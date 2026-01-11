import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

async function fixDoubleQuotes(filePath) {
  try {
    let content = await fs.readFile(filePath, 'utf-8');
    let updated = false;
    
    // Fix double single quotes: ''@/assets/...'' -> '@/assets/...'
    if (content.includes("''@/assets")) {
      content = content.replace(/''@\/assets\/([^'']+)''/g, "'@/assets/$1'");
      updated = true;
    }
    
    // Fix double double quotes: ""@/assets/..."" -> "@/assets/..."
    if (content.includes('""@/assets')) {
      content = content.replace(/""@\/assets\/([^""]+)""/g, '"@/assets/$1"');
      updated = true;
    }
    
    // Fix mixed quotes: "'@/assets/...'" -> '@/assets/...'
    if (content.includes("'\"@/assets") || content.includes("\"'@/assets")) {
      content = content.replace(/['"]+@\/assets\/([^'"]+)['"]+/g, "'@/assets/$1'");
      updated = true;
    }
    
    if (updated) {
      await fs.writeFile(filePath, content, 'utf-8');
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

async function main() {
  console.log('🔧 Fixing double quotes in imports...\n');
  
  const srcDir = path.join(__dirname, '../src');
  const files = await getAllFiles(srcDir);
  
  let updatedCount = 0;
  
  for (const file of files) {
    if (await fixDoubleQuotes(file)) {
      console.log(`  ✓ ${path.relative(srcDir, file)}`);
      updatedCount++;
    }
  }
  
  console.log(`\n✨ Fixed ${updatedCount} files\n`);
}

main().catch(console.error);
