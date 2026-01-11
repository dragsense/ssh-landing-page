import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, '../src/assets/images');

// Organization mapping: files to move to awards folder
const awardsFiles = [
  '220px-Sitara_-_i_-Jurat_.png',
  'PAF_GoldenEagleAward.png',
  'Tamgha-e-Diffa_Medal_Obverse.png',
  'Sitara-e-Harb_1965_War_Ribbon.png',
  'Sitara-e-Harb_1971_War.png',
  'Tamgha-e-Jang 71.png',
  'War_Medal_1965(Tamgha-e-Jang,_A.H.1385).png',
  'Hijri_Tamgha.png',
  'Republic_Medal_1956_(Pakistan).png',
  'Tamgha-e-Sad_Saala_Jashan-e-Wiladat-e-Quaid-e-Azam.png',
  'award-1.png',
  'award-2.png',
  'award-3.png',
  'award-4.png',
];

// Background images
const backgroundsFiles = [
  'cormorant background.png',
  'war-life-slider-bg.png',
];

// UI/Interface elements
const uiFiles = [
  's1.png',
  's2.png',
  's3.png',
  's4.png',
  's5.png',
  's6.png',
  'S7.png',
  's11.png',
  'S12.png',
  'S13.png',
  's14.png',
  's16.png',
  's17.png',
  'jet.png',
  'jet2.png',
  'footer-img.png',
  'mira-pakistan.png',
  'record.png',
  'placeholder.png',
  'videoframe_14891.png',
  'demo-book.png',
  'bussinessman.png',
];

// Books
const booksFiles = [
  'bookcover.jpg',
];

async function moveFile(source, destination) {
  try {
    const destDir = path.dirname(destination);
    await fs.mkdir(destDir, { recursive: true });
    await fs.rename(source, destination);
    return true;
  } catch (error) {
    console.error(`Error moving ${source} to ${destination}:`, error.message);
    return false;
  }
}

async function organizeImages() {
  console.log('📁 Organizing images into proper folders...\n');

  const awardsDir = path.join(assetsDir, 'awards');
  const backgroundsDir = path.join(assetsDir, 'backgrounds');
  const uiDir = path.join(assetsDir, 'ui');
  const booksDir = path.join(assetsDir, 'books');

  // Create directories
  await fs.mkdir(awardsDir, { recursive: true });
  await fs.mkdir(backgroundsDir, { recursive: true });
  await fs.mkdir(uiDir, { recursive: true });
  await fs.mkdir(booksDir, { recursive: true });

  let movedCount = 0;
  let errorCount = 0;

  // Move awards
  console.log('Moving awards...');
  for (const file of awardsFiles) {
    const source = path.join(assetsDir, file);
    const destination = path.join(awardsDir, file);
    try {
      await fs.access(source);
      if (await moveFile(source, destination)) {
        console.log(`  ✓ ${file} → awards/`);
        movedCount++;
      } else {
        errorCount++;
      }
    } catch {
      // File doesn't exist, skip
    }
  }

  // Move backgrounds
  console.log('\nMoving backgrounds...');
  for (const file of backgroundsFiles) {
    const source = path.join(assetsDir, file);
    const destination = path.join(backgroundsDir, file);
    try {
      await fs.access(source);
      if (await moveFile(source, destination)) {
        console.log(`  ✓ ${file} → backgrounds/`);
        movedCount++;
      } else {
        errorCount++;
      }
    } catch {
      // File doesn't exist, skip
    }
  }

  // Move UI elements
  console.log('\nMoving UI elements...');
  for (const file of uiFiles) {
    const source = path.join(assetsDir, file);
    const destination = path.join(uiDir, file);
    try {
      await fs.access(source);
      if (await moveFile(source, destination)) {
        console.log(`  ✓ ${file} → ui/`);
        movedCount++;
      } else {
        errorCount++;
      }
    } catch {
      // File doesn't exist, skip
    }
  }

  // Move books
  console.log('\nMoving books...');
  for (const file of booksFiles) {
    const source = path.join(assetsDir, file);
    const destination = path.join(booksDir, file);
    try {
      await fs.access(source);
      if (await moveFile(source, destination)) {
        console.log(`  ✓ ${file} → books/`);
        movedCount++;
      } else {
        errorCount++;
      }
    } catch {
      // File doesn't exist, skip
    }
  }

  console.log(`\n✨ Organization complete!`);
  console.log(`   Moved: ${movedCount} files`);
  if (errorCount > 0) {
    console.log(`   Errors: ${errorCount} files`);
  }
  console.log('\n⚠️  Note: You will need to update import paths in your components!\n');
}

organizeImages().catch(console.error);
