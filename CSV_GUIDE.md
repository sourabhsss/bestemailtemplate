# CSV Data Management Guide

## Overview
Your project now supports CSV files for managing categories and templates data. This makes it easier to update content without modifying code.

## File Structure

```
/data
  ├── categories.csv      # Category definitions
  └── templates.csv       # Template data
```

## CSV File Formats

### categories.csv
```csv
id,name,description
newsletter,Newsletter,Engage your subscribers with regular updates and news
promotional,Promotional,Drive sales and conversions with promotional campaigns
```

**Columns:**
- `id`: Unique identifier (lowercase, no spaces)
- `name`: Display name
- `description`: Category description

### templates.csv
```csv
id,title,description,category,thumbnailUrl,isPremium,useCase,industry
1,Template Name,Template description,Newsletter,/images/template-1.png,false,Use Case Name,Industry Name
```

**Columns:**
- `id`: Unique template ID
- `title`: Template title
- `description`: Short description
- `category`: Category name (must match categories.csv)
- `thumbnailUrl`: Path to thumbnail image
- `isPremium`: true or false
- `useCase`: Use case category
- `industry`: Industry category

## How to Add/Edit Data

### Adding a New Template
1. Open `data/templates.csv`
2. Add a new row with all required fields
3. Save the file
4. The changes will appear on next page load

### Adding a New Category
1. Open `data/categories.csv`
2. Add a new row with id, name, and description
3. Save the file
4. Update templates to use the new category

## Important Notes

### CSV Formatting Rules
- **No commas** in field values (they break CSV parsing)
- Use `&` instead of `,` in text (e.g., "Food & Beverages" not "Food, Beverages")
- Keep boolean values as `true` or `false` (lowercase)
- Ensure all required fields are filled
- Don't add extra spaces around values

### Image Paths
- Store images in `/public/images/`
- Reference them as `/images/filename.png` in CSV
- Supported formats: PNG, JPG, WebP

## Available Functions

### In Server Components (Next.js pages)
```typescript
import { getTemplates, getCategories, getTemplateById } from '@/lib/templates-data';

// Get all templates
const templates = getTemplates();

// Get all categories
const categories = getCategories();

// Get specific template
const template = getTemplateById('1');

// Get templates by category
const newsletterTemplates = getTemplatesByCategory('Newsletter');
```

### Backward Compatibility
Existing code using `import { templates } from '@/lib/templates-data'` still works!

## Troubleshooting

### Templates not showing?
1. Check CSV file is in `data/` folder
2. Verify CSV headers match exactly
3. Ensure no syntax errors in CSV (missing quotes, extra commas)
4. Restart dev server: `npm run dev`

### Images not loading?
1. Verify image exists in `/public/images/`
2. Check path in CSV starts with `/images/`
3. Ensure filename matches exactly (case-sensitive)

## Example: Adding a New Template

1. Add image to `/public/images/my-new-template.png`
2. Open `data/templates.csv`
3. Add new row:
```csv
13,Holiday Sale Email,Boost holiday sales with this festive design,Promotional,/images/my-new-template.png,false,Discounts & Coupons,Ecommerce
```
4. Save and refresh your browser

## Migration from Hardcoded Data

Your project has been updated to use CSV files. The old hardcoded data in `lib/templates-data.ts` has been replaced with CSV reading functions. All existing code continues to work without changes!

## Benefits of CSV Approach

✅ Easy content updates without code changes
✅ Non-developers can manage data
✅ Version control friendly
✅ Easy to import/export
✅ Can be edited in Excel, Google Sheets, or any text editor