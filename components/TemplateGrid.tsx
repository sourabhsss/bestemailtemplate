import { TemplateCard } from './TemplateCard';
import { templates } from '@/lib/templates-data';

export function TemplateGrid() {
  return (
    <section className="py-12 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {templates.map((template) => (
            <TemplateCard
              key={template.id}
              id={template.id}
              title={template.title}
              description={template.description}
              category={template.category}
              thumbnailUrl={template.thumbnailUrl}
              isPremium={template.isPremium}
            />
          ))}
        </div>
      </div>
    </section>
  );
}