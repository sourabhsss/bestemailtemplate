import { getTemplates as getTemplatesFromCSV, getCategories as getCategoriesFromCSV } from './csv-utils';

// Re-export types
export type { Template, Category } from './csv-utils';

// Cache the data at module level (server-side only)
let templatesCache: ReturnType<typeof getTemplatesFromCSV> | null = null;
let categoriesCache: ReturnType<typeof getCategoriesFromCSV> | null = null;

export function getTemplates() {
  if (!templatesCache) {
    templatesCache = getTemplatesFromCSV();
  }
  return templatesCache;
}

export function getCategories() {
  if (!categoriesCache) {
    categoriesCache = getCategoriesFromCSV();
  }
  return categoriesCache;
}

export function getTemplateById(id: string) {
  const templates = getTemplates();
  return templates.find(template => template.id === id || template.slug === id);
}

export function getTemplatesByCategory(category: string) {
  const templates = getTemplates();
  return templates.filter(template => 
    template.category.toLowerCase() === category.toLowerCase() ||
    template.industry.toLowerCase() === category.toLowerCase()
  );
}

export function getCategoryByName(name: string) {
  const categories = getCategories();
  return categories.find(cat => 
    cat.listingName.toLowerCase() === name.toLowerCase() ||
    cat.urlPath.toLowerCase() === name.toLowerCase()
  );
}

export function getRelatedTemplates(templateSlug: string) {
  const templates = getTemplates();
  const template = templates.find(t => t.slug === templateSlug);
  if (!template || !template.relatedTemplates.length) return [];
  
  return templates.filter(t => 
    template.relatedTemplates.includes(t.slug)
  );
}

// For backward compatibility with existing code that imports templates as array
export const templates = getTemplates();