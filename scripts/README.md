# Image Optimization & Organization Scripts

## Overview
This directory contains scripts for optimizing and organizing images in the project.

## Scripts

### 1. `optimize-images.js`
Optimizes all images (JPG, JPEG, PNG) in the `src/assets` directory without losing quality.

**Features:**
- JPEG: 85% quality, progressive encoding, mozjpeg optimization
- PNG: 90% quality, compression level 9, adaptive filtering
- Automatically resizes images larger than 4000px on longest side
- Maintains original quality while reducing file size

**Usage:**
```bash
npm run optimize-images
```

### 2. `organize-images.js`
Organizes images into logical folders for better project structure.

**Organization:**
- `images/awards/` - All award and medal images
- `images/backgrounds/` - Background images
- `images/ui/` - UI elements and interface graphics
- `images/books/` - Book-related images

**Usage:**
```bash
npm run organize-images
```

### 3. `update-imports.js`
Automatically updates all import paths in source files after image organization.

**Usage:**
```bash
npm run update-imports
```

## Complete Workflow

To optimize and organize all images:

```bash
# 1. Optimize images
npm run optimize-images

# 2. Organize images into folders
npm run organize-images

# 3. Update import paths
npm run update-imports
```

## Notes

- Images are optimized in-place (original files are replaced)
- The optimization maintains high quality (85-90% quality settings)
- Some images may show negative savings if they were already well-optimized
- All import paths are automatically updated after organization
