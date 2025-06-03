import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Instagram, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function InstagramSection() {
  const instagramProfileUrl = "https://www.instagram.com/tallguytycoon/?hl=en";

  return (
    <section id="instagram-feed" aria-labelledby="instagram-heading">
      <Card className="bg-card/50 backdrop-blur-sm h-full flex flex-col">
        <CardHeader>
          <CardTitle id="instagram-heading" className="font-headline text-3xl text-center text-accent flex items-center justify-center">
            <Instagram className="mr-2 h-8 w-8" /> Follow on Instagram
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          {/* Elfsight Instagram Feed | Untitled Instagram Feed */}
          <script src="https://static.elfsight.com/platform/platform.js" async></script>
          <div className="elfsight-app-770013fe-5180-4370-9aa8-f0b707c8e05b" data-elfsight-app-lazy></div>
        </CardContent>
        <CardFooter className="mt-4">
          <Button asChild variant="default" className="w-full bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground hover:opacity-90 transition-opacity">
            <Link href={instagramProfileUrl} target="_blank" rel="noopener noreferrer">
              View Profile on Instagram
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
}
