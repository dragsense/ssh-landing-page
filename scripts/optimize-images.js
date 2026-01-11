import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, '../src/assets');

// Configuration for image optimization
const optimizationConfig = {
  jpeg: {
    quality: 85,
    mozjpeg: true,
    progressive: true,
  },
  png: {
    quality: 90,
    compressionLevel: 9,
    adaptiveFiltering: true,
  },
  webp: {
    quality: 85,
    effort: 6,
  },
};

async function optimizeImage(inputPath, outputPath) {
  try {
    const ext = path.extname(inputPath).toLowerCase();
    const stats = await fs.stat(inputPath);
    const originalSize = stats.size;

    let image = sharp(inputPath);
    const metadata = await image.metadata();

    // Resize if image is too large (max 4000px on longest side)
    if (metadata.width > 4000 || metadata.height > 4000) {
      image = image.resize(4000, 4000, {
        fit: 'inside',
        withoutEnlargement: true,
      });
    }

    // Optimize based on format
    if (ext === '.jpg' || ext === '.jpeg') {
      await image
        .jpeg(optimizationConfig.jpeg)
        .toFile(outputPath);
    } else if (ext === '.png') {
      await image
        .png(optimizationConfig.png)
        .toFile(outputPath);
    } else {
      // Copy as-is for other formats
      await fs.copyFile(inputPath, outputPath);
      return { optimized: false, originalSize, newSize: originalSize };
    }

    const newStats = await fs.stat(outputPath);
    const newSize = newStats.size;
    const saved = originalSize - newSize;
    const percentSaved = ((saved / originalSize) * 100).toFixed(1);

    return {
      optimized: true,
      originalSize,
      newSize,
      saved,
      percentSaved,
    };
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error.message);
    return { optimized: false, error: error.message };
  }
}

async function processDirectory(dir, relativePath = '') {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const results = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relPath = path.join(relativePath, entry.name);

    if (entry.isDirectory()) {
      const subResults = await processDirectory(fullPath, relPath);
      results.push(...subResults);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        const tempPath = fullPath + '.tmp';
        const result = await optimizeImage(fullPath, tempPath);

        if (result.optimized) {
          // Always replace if optimized (even if size is same, quality settings are better)
          await fs.rename(tempPath, fullPath);
          const saved = result.originalSize - result.newSize;
          results.push({
            file: relPath,
            originalSize: (result.originalSize / 1024).toFixed(2) + ' KB',
            newSize: (result.newSize / 1024).toFixed(2) + ' KB',
            saved: (saved / 1024).toFixed(2) + ' KB',
            percentSaved: result.percentSaved + '%',
            optimized: true,
          });
        } else {
          // Remove temp file if optimization failed
          try {
            await fs.unlink(tempPath);
          } catch (e) {
            // Ignore
          }
          if (result.error) {
            results.push({
              file: relPath,
              error: result.error,
            });
          }
        }
      }
    }
  }

  return results;
}

async function main() {
  console.log('🚀 Starting image optimization...\n');
  const startTime = Date.now();

  try {
    const results = await processDirectory(assetsDir);

    console.log('\n📊 Optimization Results:\n');
    console.log('─'.repeat(80));

    let totalOriginal = 0;
    let totalNew = 0;
    let successCount = 0;
    let errorCount = 0;

    results.forEach((result) => {
      if (result.error) {
        console.log(`❌ ${result.file}: ${result.error}`);
        errorCount++;
      } else if (result.optimized) {
        console.log(
          `✅ ${result.file.padEnd(50)} ${result.originalSize.padStart(10)} → ${result.newSize.padStart(10)} (saved ${result.percentSaved})`
        );
        totalOriginal += parseFloat(result.originalSize);
        totalNew += parseFloat(result.newSize);
        successCount++;
      }
    });

    console.log('─'.repeat(80));
    const totalSaved = totalOriginal - totalNew;
    const totalPercentSaved = totalOriginal > 0 ? ((totalSaved / totalOriginal) * 100).toFixed(1) : 0;

    console.log(`\n✨ Summary:`);
    console.log(`   Optimized: ${successCount} images`);
    console.log(`   Errors: ${errorCount} images`);
    console.log(`   Total size reduction: ${totalSaved.toFixed(2)} KB (${totalPercentSaved}%)`);
    console.log(`   Time taken: ${((Date.now() - startTime) / 1000).toFixed(2)}s\n`);
  } catch (error) {
    console.error('Fatal error:', error);
    process.exit(1);
  }
}

main();
