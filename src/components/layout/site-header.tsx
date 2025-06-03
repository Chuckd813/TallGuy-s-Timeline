import Link from 'next/link';
import Image from 'next/image'; // Import the Image component
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2"> 
          <Image src="/images/tallguy.jpg" alt="TallGuy's Timeline Logo" width={50} height={50} className="rounded-full" /> {/* Add the Image component */}
          <span className="font-headline text-2xl font-bold text-primary gradient-text-animated">TallGuy's Timeline</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Button asChild variant="default" size="sm">
              <Link href="https://www.ajpantoja.com/join-the-cnc/" target="_blank" rel="noopener noreferrer">
                JOIN THE CNC
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
