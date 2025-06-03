import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Instagram, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const placeholderPosts = [
  { id: '1', alt: 'Instagram post placeholder 1', hint: 'luxury lifestyle' },
  { id: '2', alt: 'Instagram post placeholder 2', hint: 'business meeting' },
  { id: '3', alt: 'Instagram post placeholder 3', hint: 'travel cityscape' },
  { id: '4', alt: 'Instagram post placeholder 4', hint: 'motivational quote' },
  { id: '5', alt: 'Instagram post placeholder 5', hint: 'tech gadget' },
  { id: '6', alt: 'Instagram post placeholder 6', hint: 'exotic car' },
];

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
          <div className="grid grid-cols-3 gap-2 md:gap-4">
            {placeholderPosts.map((post) => (
              <Link key={post.id} href={instagramProfileUrl} target="_blank" rel="noopener noreferrer" className="aspect-square block">
                <div className="relative w-full h-full rounded-md overflow-hidden border border-border hover:opacity-80 transition-opacity">
                  <Image
                    src={`https://placehold.co/300x300.png`}
                    alt={post.alt}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={post.hint}
                  />
                </div>
              </Link>
            ))}
          </div>
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
