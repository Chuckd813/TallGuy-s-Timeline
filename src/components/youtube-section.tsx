import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function YoutubeSection() {
  const embedSrc = "https://www.youtube.com/embed/videoseries?si=T218ngkHq5Q2vP5D&amp;list=PLUvA7SAFxl7xG8pa47wp5UNPxpgNtIcvr";

  return (
    <section id="youtube-feed" aria-labelledby="youtube-heading">
      <Card className="bg-card/50 backdrop-blur-sm h-full flex flex-col">
        <CardHeader>
          <CardTitle id="youtube-heading" className="font-headline text-3xl text-center text-accent flex items-center justify-center">

            <Youtube className="mr-2 h-8 w-8" /> Latest Youtube Videos
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="relative w-full rounded-lg overflow-hidden border border-border shadow-lg" style={{ paddingTop: '56.25%' }}>
            <iframe
              height="100%"
              src={embedSrc}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              // Responsive styles applied to the container maintain aspect ratio, iframe fills the container
              className="absolute inset-0 w-full h-full"
            >

            </iframe>

          </div>
          <div className="mt-4 text-center">
            <Button asChild>
              <a href="https://www.youtube.com/@tallguytycoon" target="_blank" rel="noopener noreferrer">
                SUBSCRIBE HERE
              </a>
            </Button>
          </div>

        </CardContent>
      </Card>
    </section>
  );
}
