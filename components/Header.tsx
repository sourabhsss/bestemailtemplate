'use client';

import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 glass border-b border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-center">
          <Link href="/templates" className="group transition-smooth hover:scale-105">
            <span className="heading-sm text-foreground group-hover:text-primary">
              best<span className="gradient-text">email</span>template
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}