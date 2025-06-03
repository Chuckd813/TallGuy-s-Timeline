import { Youtube, Instagram, Copyright } from 'lucide-react';
import Link from 'next/link';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 py-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4 md:mb-0">
            <Copyright className="h-4 w-4" />
            <span>{currentYear} TycoonVerse. All rights reserved.</span>
          </div>
          <div className="flex space-x-4">
            <Link href="https://www.youtube.com/@tallguytycoon" target="_blank" rel="noopener noreferrer" aria-label="TallGuyTycoon YouTube">
              <Youtube className="h-6 w-6 text-muted-foreground hover:text-accent transition-colors" />
            </Link>
            <Link href="https://www.instagram.com/tallguytycoon/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="TallGuyTycoon Instagram">
              <Instagram className="h-6 w-6 text-muted-foreground hover:text-accent transition-colors" />
            </Link>
          </div>
        </div>
        <p className="text-center text-xs text-muted-foreground mt-6">
          This site is dedicated to Armando Pantoja (TallGuyTycoon).
        </p>
      </div>
    </footer>
  );
}
