/**
 * Converts a string to a URL-safe slug by removing special characters
 * and replacing spaces with hyphens
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    // Replace & with 'and'
    .replace(/\s*&\s*/g, '-and-')
    // Replace / with 'or'
    .replace(/\s*\/\s*/g, '-or-')
    // Replace spaces with hyphens
    .replace(/\s+/g, '-')
    // Remove special characters except hyphens
    .replace(/[^\w\-]+/g, '')
    // Replace multiple hyphens with single hyphen
    .replace(/\-\-+/g, '-')
    // Remove leading/trailing hyphens
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

/**
 * Converts a slug back to a display name (reverses slugify for matching)
 */
export function deslugify(slug: string): string {
  return slug
    .replace(/-and-/g, ' & ')
    .replace(/-or-/g, ' / ')
    .replace(/-/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}