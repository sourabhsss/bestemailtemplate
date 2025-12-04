import { Template } from './csv-utils';

export interface FilterOptions {
  industries: string[];
  useCases: string[];
  types: string[];
  emailClients: string[];
  esps: string[];
}

export function extractFilterOptions(templates: Template[]): FilterOptions {
  return {
    industries: [...new Set(templates.map(t => t.industry).filter(Boolean))].sort(),
    useCases: [...new Set(templates.map(t => t.useCase).filter(Boolean))].sort(),
    types: [...new Set(templates.map(t => t.type).filter(Boolean))].sort(),
    emailClients: [...new Set(templates.flatMap(t => t.supportedEmailClients).filter(Boolean))].sort(),
    esps: [...new Set(templates.flatMap(t => t.supportedESPs).filter(Boolean))].sort(),
  };
}

export interface ActiveFilters {
  industry: string | null;
  useCase: string | null;
  type: string | null;
  emailClient: string | null;
  esp: string | null;
}

export function filterTemplates(templates: Template[], filters: ActiveFilters): Template[] {
  return templates.filter(template => {
    if (filters.industry && template.industry !== filters.industry) return false;
    if (filters.useCase && template.useCase !== filters.useCase) return false;
    if (filters.type && template.type !== filters.type) return false;
    if (filters.emailClient && !template.supportedEmailClients.includes(filters.emailClient)) return false;
    if (filters.esp && !template.supportedESPs.includes(filters.esp)) return false;
    return true;
  });
}