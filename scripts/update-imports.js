import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Mapping of old paths to new paths
const pathMappings = {
  // Awards
  '@/assets/images/220px-Sitara_-_i_-Jurat_.png': '@/assets/images/awards/220px-Sitara_-_i_-Jurat_.png',
  '@/assets/images/PAF_GoldenEagleAward.png': '@/assets/images/awards/PAF_GoldenEagleAward.png',
  '@/assets/images/Tamgha-e-Diffa_Medal_Obverse.png': '@/assets/images/awards/Tamgha-e-Diffa_Medal_Obverse.png',
  '@/assets/images/Sitara-e-Harb_1965_War_Ribbon.png': '@/assets/images/awards/Sitara-e-Harb_1965_War_Ribbon.png',
  '@/assets/images/Sitara-e-Harb_1971_War.png': '@/assets/images/awards/Sitara-e-Harb_1971_War.png',
  '@/assets/images/Tamgha-e-Jang 71.png': '@/assets/images/awards/Tamgha-e-Jang 71.png',
  '@/assets/images/War_Medal_1965(Tamgha-e-Jang,_A.H.1385).png': '@/assets/images/awards/War_Medal_1965(Tamgha-e-Jang,_A.H.1385).png',
  '@/assets/images/Hijri_Tamgha.png': '@/assets/images/awards/Hijri_Tamgha.png',
  '@/assets/images/Republic_Medal_1956_(Pakistan).png': '@/assets/images/awards/Republic_Medal_1956_(Pakistan).png',
  '@/assets/images/Tamgha-e-Sad_Saala_Jashan-e-Wiladat-e-Quaid-e-Azam.png': '@/assets/images/awards/Tamgha-e-Sad_Saala_Jashan-e-Wiladat-e-Quaid-e-Azam.png',
  '@/assets/images/award-1.png': '@/assets/images/awards/award-1.png',
  '@/assets/images/award-2.png': '@/assets/images/awards/award-2.png',
  '@/assets/images/award-3.png': '@/assets/images/awards/award-3.png',
  '@/assets/images/award-4.png': '@/assets/images/awards/award-4.png',
  
  // Backgrounds
  '@/assets/images/cormorant background.png': '@/assets/images/backgrounds/cormorant background.png',
  '@/assets/images/war-life-slider-bg.png': '@/assets/images/backgrounds/war-life-slider-bg.png',
  
  // UI
  '@/assets/images/s1.png': '@/assets/images/ui/s1.png',
  '@/assets/images/s2.png': '@/assets/images/ui/s2.png',
  '@/assets/images/s3.png': '@/assets/images/ui/s3.png',
  '@/assets/images/s4.png': '@/assets/images/ui/s4.png',
  '@/assets/images/s5.png': '@/assets/images/ui/s5.png',
  '@/assets/images/s6.png': '@/assets/images/ui/s6.png',
  '@/assets/images/S7.png': '@/assets/images/ui/S7.png',
  '@/assets/images/s11.png': '@/assets/images/ui/s11.png',
  '@/assets/images/S12.png': '@/assets/images/ui/S12.png',
  '@/assets/images/S13.png': '@/assets/images/ui/S13.png',
  '@/assets/images/s14.png': '@/assets/images/ui/s14.png',
  '@/assets/images/s16.png': '@/assets/images/ui/s16.png',
  '@/assets/images/s17.png': '@/assets/images/ui/s17.png',
  '@/assets/images/jet.png': '@/assets/images/ui/jet.png',
  '@/assets/images/jet2.png': '@/assets/images/ui/jet2.png',
  '@/assets/images/footer-img.png': '@/assets/images/ui/footer-img.png',
  '@/assets/images/mira-pakistan.png': '@/assets/images/ui/mira-pakistan.png',
  '@/assets/images/record.png': '@/assets/images/ui/record.png',
  '@/assets/images/placeholder.png': '@/assets/images/ui/placeholder.png',
  '@/assets/images/videoframe_14891.png': '@/assets/images/ui/videoframe_14891.png',
  '@/assets/images/demo-book.png': '@/assets/images/ui/demo-book.png',
  '@/assets/images/bussinessman.png': '@/assets/images/ui/bussinessman.png',
  
  // Books
  '@/assets/images/bookcover.jpg': '@/assets/images/books/bookcover.jpg',
};

async function updateImportsInFile(filePath) {
  try {
    let content = await fs.readFile(filePath, 'utf-8');
    let updated = false;
    
    for (const [oldPath, newPath] of Object.entries(pathMappings)) {
      // Match both single and double quotes
      const patterns = [
        new RegExp(`(["'])${oldPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\1`, 'g'),
        new RegExp(`(['"])${oldPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\1`, 'g'),
      ];
      
      for (const pattern of patterns) {
        if (pattern.test(content)) {
          content = content.replace(pattern, (match, quote) => `${quote}${newPath}${quote}`);
          updated = true;
        }
      }
    }
    
    if (updated) {
      await fs.writeFile(filePath, content, 'utf-8');
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error updating ${filePath}:`, error.message);
    return false;
  }
}

async function getAllFiles(dir, fileList = []) {
  const files = await fs.readdir(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = await fs.stat(filePath);
    
    if (stat.isDirectory() && !filePath.includes('node_modules') && !filePath.includes('dist')) {
      await getAllFiles(filePath, fileList);
    } else if (/\.(ts|tsx|js|jsx)$/.test(file)) {
      fileList.push(filePath);
    }
  }
  
  return fileList;
}

async function main() {
  console.log('🔄 Updating import paths...\n');
  
  const srcDir = path.join(__dirname, '../src');
  const files = await getAllFiles(srcDir);
  
  let updatedCount = 0;
  
  for (const file of files) {
    if (await updateImportsInFile(file)) {
      console.log(`  ✓ ${path.relative(srcDir, file)}`);
      updatedCount++;
    }
  }
  
  console.log(`\n✨ Updated ${updatedCount} files\n`);
}

main().catch(console.error);
