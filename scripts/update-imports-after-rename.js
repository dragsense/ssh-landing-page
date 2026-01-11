import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Mapping of old file paths to new file paths (relative to images folder or assets root)
const renameMappings = {
  // Airforce images - full paths
  'images/airforce/Image (16).jpg': 'images/airforce/airforce-war-1965-1.jpg',
  'images/airforce/Image (17).jpg': 'images/airforce/airforce-war-1965-2.jpg',
  'images/airforce/Image (18).jpg': 'images/airforce/airforce-war-1965-3.jpg',
  'images/airforce/Image (19).jpg': 'images/airforce/airforce-war-1965-4.jpg',
  'images/airforce/Image (21).jpg': 'images/airforce/airforce-war-1971-1.jpg',
  'images/airforce/Image (22).jpg': 'images/airforce/airforce-war-1971-2.jpg',
  'images/airforce/Image (23).jpg': 'images/airforce/airforce-war-1971-3.jpg',
  'images/airforce/Image (24).jpg': 'images/airforce/airforce-war-1971-4.jpg',
  'images/airforce/Image (25).jpg': 'images/airforce/airforce-war-1971-5.jpg',
  'images/airforce/Image (26).jpg': 'images/airforce/airforce-war-1971-6.jpg',
  'images/airforce/airforce (1).jpeg': 'images/airforce/airforce-gallery-1.jpeg',
  'images/airforce/airforce (1).jpg': 'images/airforce/airforce-gallery-1-alt.jpg',
  'images/airforce/airforce (2).jpg': 'images/airforce/airforce-gallery-2.jpg',
  'images/airforce/airforce (3).jpg': 'images/airforce/airforce-gallery-3.jpg',
  'images/airforce/airforce (4).jpg': 'images/airforce/airforce-gallery-4.jpg',
  'images/airforce/fl (1).jpeg': 'images/airforce/flight-log-1.jpeg',
  'images/airforce/fl (2).jpeg': 'images/airforce/flight-log-2.jpeg',
  'images/airforce/fl (3).jpeg': 'images/airforce/flight-log-3.jpeg',
  'images/airforce/fl (4).jpeg': 'images/airforce/flight-log-4.jpeg',
  'images/airforce/md (1).jpeg': 'images/airforce/medal-display-1.jpeg',
  'images/airforce/md (2).jpeg': 'images/airforce/medal-display-2.jpeg',
  'images/airforce/md (3).jpeg': 'images/airforce/medal-display-3.jpeg',
  'images/airforce/SSH.jpg': 'images/airforce/sajad-haider-portrait.jpg',
  'images/airforce/SajadHaider1965.png': 'images/airforce/sajad-haider-1965-war.png',
  'images/airforce/PAF_F-86_Sabres_1965_War.jpg': 'images/airforce/paf-f86-sabres-1965-war.jpg',
  'images/airforce/Pakistani_Sherdil_Pilots_Planning_Pathankot_Airstrikes_(1965_War).jpg': 'images/airforce/pakistani-sherdil-pilots-pathankot-1965.jpg',
  'images/airforce/s1.jpg': 'images/airforce/airforce-squadron-1.jpg',
  'images/airforce/s2.jpg': 'images/airforce/airforce-squadron-2.jpg',
  'images/airforce/s4.jpg': 'images/airforce/airforce-squadron-4.jpg',
  'images/airforce/s5.jpg': 'images/airforce/airforce-squadron-5.jpg',
  'images/airforce/s6.jpg': 'images/airforce/airforce-squadron-6.jpg',
  'images/airforce/s7.jpg': 'images/airforce/airforce-squadron-7.jpg',
  'images/airforce/s8.jpg': 'images/airforce/airforce-squadron-8.jpg',
  'images/airforce/s10.jpg': 'images/airforce/airforce-squadron-10.jpg',
  'images/airforce/s11.jpg': 'images/airforce/airforce-squadron-11.jpg',
  'images/airforce/s12.jpg': 'images/airforce/airforce-squadron-12.jpg',
  'images/airforce/i2.jpg': 'images/airforce/airforce-image-2.jpg',
  'images/airforce/i3.jpg': 'images/airforce/airforce-image-3.jpg',
  'images/airforce/i4.jpg': 'images/airforce/airforce-image-4.jpg',
  
  // Early life images
  'images/earlylife/img (1).jpg': 'images/earlylife/early-life-quetta-1.jpg',
  'images/earlylife/img (2).jpg': 'images/earlylife/early-life-quetta-2.jpg',
  'images/earlylife/img (3).jpg': 'images/earlylife/early-life-quetta-3.jpg',
  'images/earlylife/img (4).jpg': 'images/earlylife/early-life-quetta-4.jpg',
  'images/earlylife/img (5).jpg': 'images/earlylife/early-life-quetta-5.jpg',
  'images/earlylife/fm (1).jpg': 'images/earlylife/family-memories-1.jpg',
  'images/earlylife/fm (2).jpg': 'images/earlylife/family-memories-2.jpg',
  'images/earlylife/fm (3).jpg': 'images/earlylife/family-memories-3.jpg',
  'images/earlylife/fm (4).jpg': 'images/earlylife/family-memories-4.jpg',
  'images/earlylife/fm (5).jpg': 'images/earlylife/family-memories-5.jpg',
  'images/earlylife/fm (6).jpg': 'images/earlylife/family-memories-6.jpg',
  'images/earlylife/fm (7).jpg': 'images/earlylife/family-memories-7.jpg',
  'images/earlylife/fm (8).jpg': 'images/earlylife/family-memories-8.jpg',
  'images/earlylife/fm (9).jpg': 'images/earlylife/family-memories-9.jpg',
  'images/earlylife/i5.jpg': 'images/earlylife/early-life-inspiration.jpg',
  
  // Business images
  'business/1.jpg': 'business/cormorant-armored-vehicle-1.jpg',
  'business/2.jpg': 'business/cormorant-armored-vehicle-2.jpg',
  'business/3.jpg': 'business/cormorant-military-aircraft.jpg',
  'business/4.jpg': 'business/cormorant-night-vision-equipment.jpg',
  'business/5.jpg': 'business/cormorant-military-weapons.jpg',
  'business/6.jpg': 'business/cormorant-teletype-equipment.jpg',
  'business/7.jpeg': 'business/cormorant-hummer-vehicle.jpeg',
  'business/bussiness-1.jpeg': 'business/cormorant-company-1.jpeg',
  'business/bussiness-2.jpeg': 'business/cormorant-company-2.jpeg',
  'business/bussiness-3.jpeg': 'business/cormorant-company-3.jpeg',
  
  // Awards
  'images/awards/220px-Sitara_-_i_-Jurat_.png': 'images/awards/sitara-e-jurat-medal.png',
  'images/awards/award-1.png': 'images/awards/award-golden-eagle-1.png',
  'images/awards/award-2.png': 'images/awards/award-golden-eagle-2.png',
  'images/awards/award-3.png': 'images/awards/award-golden-eagle-3.png',
  'images/awards/award-4.png': 'images/awards/award-golden-eagle-4.png',
  'images/awards/Tamgha-e-Jang 71.png': 'images/awards/tamgha-e-jang-71.png',
  'images/awards/War_Medal_1965(Tamgha-e-Jang,_A.H.1385).png': 'images/awards/war-medal-1965-tamgha-e-jang.png',
  'images/awards/Tamgha-e-Sad_Saala_Jashan-e-Wiladat-e-Quaid-e-Azam.png': 'images/awards/tamgha-e-sad-saala.png',
  'images/awards/Republic_Medal_1956_(Pakistan).png': 'images/awards/republic-medal-1956.png',
  'images/awards/Sitara-e-Harb_1965_War_Ribbon.png': 'images/awards/sitara-e-harb-1965-ribbon.png',
  'images/awards/Sitara-e-Harb_1971_War.png': 'images/awards/sitara-e-harb-1971.png',
  'images/awards/Tamgha-e-Diffa_Medal_Obverse.png': 'images/awards/tamgha-e-diffa.png',
  'images/awards/PAF_GoldenEagleAward.png': 'images/awards/paf-golden-eagle-award.png',
  'images/awards/Hijri_Tamgha.png': 'images/awards/hijri-tamgha.png',
  
  // UI
  'images/ui/s1.png': 'images/ui/ui-section-1.png',
  'images/ui/s2.png': 'images/ui/ui-section-2.png',
  'images/ui/s3.png': 'images/ui/ui-section-3.png',
  'images/ui/s4.png': 'images/ui/ui-section-4.png',
  'images/ui/s5.png': 'images/ui/ui-section-5.png',
  'images/ui/s6.png': 'images/ui/ui-section-6.png',
  'images/ui/S7.png': 'images/ui/ui-section-7.png',
  'images/ui/s11.png': 'images/ui/ui-section-11.png',
  'images/ui/S12.png': 'images/ui/ui-section-12.png',
  'images/ui/S13.png': 'images/ui/ui-section-13.png',
  'images/ui/s14.png': 'images/ui/ui-section-14.png',
  'images/ui/s16.png': 'images/ui/ui-section-16.png',
  'images/ui/s17.png': 'images/ui/ui-section-17.png',
  'images/ui/videoframe_14891.png': 'images/ui/video-frame.png',
  'images/ui/mira-pakistan.png': 'images/ui/minar-e-pakistan.png',
  'images/ui/bussinessman.png': 'images/ui/businessman.png',
  
  // Backgrounds
  'images/backgrounds/cormorant background.png': 'images/backgrounds/cormorant-background.png',
  
  // Books
  'images/books/bookcover.jpg': 'images/books/book-cover-sajad-haider.jpg',
  
  // Root images
  'images/air-planes.jpg': 'images/pakistan-air-force-planes.jpg',
  
  // Root assets
  'qoute.png': 'quote.png',
};

async function getAllFiles(dir, fileList = []) {
  const files = await fs.readdir(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = await fs.stat(filePath);
    
    if (stat.isDirectory() && !filePath.includes('node_modules') && !filePath.includes('dist') && !filePath.includes('.git')) {
      await getAllFiles(filePath, fileList);
    } else if (/\.(ts|tsx|js|jsx)$/.test(file)) {
      fileList.push(filePath);
    }
  }
  
  return fileList;
}

async function updateImportsInFile(filePath) {
  try {
    let content = await fs.readFile(filePath, 'utf-8');
    let updated = false;
    
    // Sort by length (longest first) to handle nested paths correctly
    const sortedMappings = Object.entries(renameMappings).sort((a, b) => b[0].length - a[0].length);
    
    for (const [oldPath, newPath] of sortedMappings) {
      // Escape special regex characters in the old path
      const escapedOldPath = oldPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      
      // Create regex patterns to match various import formats
      const patterns = [
        // Match: @/assets/images/airforce/Image (16).jpg
        new RegExp(`(@/assets/${escapedOldPath})`, 'g'),
        // Match: '@/assets/images/airforce/Image (16).jpg'
        new RegExp(`('@/assets/${escapedOldPath}')`, 'g'),
        // Match: "@/assets/images/airforce/Image (16).jpg"
        new RegExp(`("@/assets/${escapedOldPath}")`, 'g'),
      ];
      
      for (const pattern of patterns) {
        if (pattern.test(content)) {
          content = content.replace(pattern, (match) => {
            // Detect quote style from the match
            let quote = '"';
            if (match.includes("'")) quote = "'";
            // Remove any existing quotes and add correct ones
            const cleanMatch = match.replace(/['"]/g, '');
            return `${quote}@/assets/${newPath}${quote}`;
          });
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

async function main() {
  console.log('🔄 Updating import paths after image renaming...\n');
  
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
