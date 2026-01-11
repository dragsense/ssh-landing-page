import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, '../src/assets');

// Mapping of old names to new descriptive names (SEO-friendly)
const renameMappings = {
  // Airforce images
  'airforce': {
    'airforce (1).jpeg': 'airforce-gallery-1.jpeg',
    'airforce (1).jpg': 'airforce-gallery-1-alt.jpg',
    'airforce (2).jpg': 'airforce-gallery-2.jpg',
    'airforce (3).jpg': 'airforce-gallery-3.jpg',
    'airforce (4).jpg': 'airforce-gallery-4.jpg',
    's1.jpg': 'airforce-squadron-1.jpg',
    's2.jpg': 'airforce-squadron-2.jpg',
    's4.jpg': 'airforce-squadron-4.jpg',
    's5.jpg': 'airforce-squadron-5.jpg',
    's6.jpg': 'airforce-squadron-6.jpg',
    's7.jpg': 'airforce-squadron-7.jpg',
    's8.jpg': 'airforce-squadron-8.jpg',
    's10.jpg': 'airforce-squadron-10.jpg',
    's11.jpg': 'airforce-squadron-11.jpg',
    's12.jpg': 'airforce-squadron-12.jpg',
    'i2.jpg': 'airforce-image-2.jpg',
    'i3.jpg': 'airforce-image-3.jpg',
    'i4.jpg': 'airforce-image-4.jpg',
    'Image (16).jpg': 'airforce-war-1965-1.jpg',
    'Image (17).jpg': 'airforce-war-1965-2.jpg',
    'Image (18).jpg': 'airforce-war-1965-3.jpg',
    'Image (19).jpg': 'airforce-war-1965-4.jpg',
    'Image (21).jpg': 'airforce-war-1971-1.jpg',
    'Image (22).jpg': 'airforce-war-1971-2.jpg',
    'Image (23).jpg': 'airforce-war-1971-3.jpg',
    'Image (24).jpg': 'airforce-war-1971-4.jpg',
    'Image (25).jpg': 'airforce-war-1971-5.jpg',
    'Image (26).jpg': 'airforce-war-1971-6.jpg',
    'fl (1).jpeg': 'flight-log-1.jpeg',
    'fl (2).jpeg': 'flight-log-2.jpeg',
    'fl (3).jpeg': 'flight-log-3.jpeg',
    'fl (4).jpeg': 'flight-log-4.jpeg',
    'md (1).jpeg': 'medal-display-1.jpeg',
    'md (2).jpeg': 'medal-display-2.jpeg',
    'md (3).jpeg': 'medal-display-3.jpeg',
    'SSH.jpg': 'sajad-haider-portrait.jpg',
    'SajadHaider1965.png': 'sajad-haider-1965-war.png',
    'PAF_F-86_Sabres_1965_War.jpg': 'paf-f86-sabres-1965-war.jpg',
    'Pakistani_Sherdil_Pilots_Planning_Pathankot_Airstrikes_(1965_War).jpg': 'pakistani-sherdil-pilots-pathankot-1965.jpg',
  },
  // Early life images
  'earlylife': {
    'img (1).jpg': 'early-life-quetta-1.jpg',
    'img (2).jpg': 'early-life-quetta-2.jpg',
    'img (3).jpg': 'early-life-quetta-3.jpg',
    'img (4).jpg': 'early-life-quetta-4.jpg',
    'img (5).jpg': 'early-life-quetta-5.jpg',
    'fm (1).jpg': 'family-memories-1.jpg',
    'fm (2).jpg': 'family-memories-2.jpg',
    'fm (3).jpg': 'family-memories-3.jpg',
    'fm (4).jpg': 'family-memories-4.jpg',
    'fm (5).jpg': 'family-memories-5.jpg',
    'fm (6).jpg': 'family-memories-6.jpg',
    'fm (7).jpg': 'family-memories-7.jpg',
    'fm (8).jpg': 'family-memories-8.jpg',
    'fm (9).jpg': 'family-memories-9.jpg',
    'i5.jpg': 'early-life-inspiration.jpg',
  },
  // Business images
  'business': {
    '1.jpg': 'cormorant-armored-vehicle-1.jpg',
    '2.jpg': 'cormorant-armored-vehicle-2.jpg',
    '3.jpg': 'cormorant-military-aircraft.jpg',
    '4.jpg': 'cormorant-night-vision-equipment.jpg',
    '5.jpg': 'cormorant-military-weapons.jpg',
    '6.jpg': 'cormorant-teletype-equipment.jpg',
    '7.jpeg': 'cormorant-hummer-vehicle.jpeg',
    'bussiness-1.jpeg': 'cormorant-company-1.jpeg',
    'bussiness-2.jpeg': 'cormorant-company-2.jpeg',
    'bussiness-3.jpeg': 'cormorant-company-3.jpeg',
  },
  // Awards
  'awards': {
    '220px-Sitara_-_i_-Jurat_.png': 'sitara-e-jurat-medal.png',
    'award-1.png': 'award-golden-eagle-1.png',
    'award-2.png': 'award-golden-eagle-2.png',
    'award-3.png': 'award-golden-eagle-3.png',
    'award-4.png': 'award-golden-eagle-4.png',
    'Tamgha-e-Jang 71.png': 'tamgha-e-jang-71.png',
    'War_Medal_1965(Tamgha-e-Jang,_A.H.1385).png': 'war-medal-1965-tamgha-e-jang.png',
    'Tamgha-e-Sad_Saala_Jashan-e-Wiladat-e-Quaid-e-Azam.png': 'tamgha-e-sad-saala.png',
    'Republic_Medal_1956_(Pakistan).png': 'republic-medal-1956.png',
    'Sitara-e-Harb_1965_War_Ribbon.png': 'sitara-e-harb-1965-ribbon.png',
    'Sitara-e-Harb_1971_War.png': 'sitara-e-harb-1971.png',
    'Tamgha-e-Diffa_Medal_Obverse.png': 'tamgha-e-diffa.png',
    'PAF_GoldenEagleAward.png': 'paf-golden-eagle-award.png',
    'Hijri_Tamgha.png': 'hijri-tamgha.png',
  },
  // UI
  'ui': {
    's1.png': 'ui-section-1.png',
    's2.png': 'ui-section-2.png',
    's3.png': 'ui-section-3.png',
    's4.png': 'ui-section-4.png',
    's5.png': 'ui-section-5.png',
    's6.png': 'ui-section-6.png',
    'S7.png': 'ui-section-7.png',
    's11.png': 'ui-section-11.png',
    'S12.png': 'ui-section-12.png',
    'S13.png': 'ui-section-13.png',
    's14.png': 'ui-section-14.png',
    's16.png': 'ui-section-16.png',
    's17.png': 'ui-section-17.png',
    'videoframe_14891.png': 'video-frame.png',
    'mira-pakistan.png': 'minar-e-pakistan.png',
    'bussinessman.png': 'businessman.png',
  },
  // Backgrounds
  'backgrounds': {
    'cormorant background.png': 'cormorant-background.png',
  },
  // Books
  'books': {
    'bookcover.jpg': 'book-cover-sajad-haider.jpg',
  },
  // Root images
  'images': {
    'air-planes.jpg': 'pakistan-air-force-planes.jpg',
  },
  // Root assets
  '': {
    'qoute.png': 'quote.png',
  },
};

async function renameFile(oldPath, newName) {
  try {
    const dir = path.dirname(oldPath);
    const newPath = path.join(dir, newName);
    await fs.rename(oldPath, newPath);
    return true;
  } catch (error) {
    console.error(`Error renaming ${oldPath}:`, error.message);
    return false;
  }
}

async function processDirectory(dir, relativePath = '', category = '') {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const results = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relPath = path.join(relativePath, entry.name);

    if (entry.isDirectory()) {
      const subCategory = entry.name;
      const subResults = await processDirectory(fullPath, relPath, subCategory);
      results.push(...subResults);
    } else if (entry.isFile()) {
      const categoryMappings = renameMappings[category] || renameMappings[relativePath] || {};
      const newName = categoryMappings[entry.name];
      
      if (newName && newName !== entry.name) {
        if (await renameFile(fullPath, newName)) {
          results.push({
            old: relPath,
            new: path.join(relativePath, newName),
          });
        }
      }
    }
  }

  return results;
}

async function main() {
  console.log('🔄 Renaming images with descriptive names...\n');

  try {
    const results = await processDirectory(assetsDir);

    console.log('Renamed files:\n');
    results.forEach(({ old, new: newPath }) => {
      console.log(`  ✓ ${old}`);
      console.log(`    → ${newPath}\n`);
    });

    console.log(`✨ Renamed ${results.length} files\n`);
    console.log('⚠️  Note: You will need to update import paths in your components!\n');
  } catch (error) {
    console.error('Fatal error:', error);
    process.exit(1);
  }
}

main();
