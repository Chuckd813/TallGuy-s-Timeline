import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function YoutubeSection() {
  const embedUrl = 'https://www.youtube.com/embed/videoseries?list=PLUvA7SAFxl7z2IPwJS11Dt4VHzzjAkivr';

  return (
    <section id="youtube-feed" aria-labelledby="youtube-heading">
      <Card className="bg-card/50 backdrop-blur-sm h-full flex flex-col">
        <CardHeader>
          <CardTitle id="youtube-heading" className="font-headline text-3xl text-center text-accent flex items-center justify-center">
            <Youtube className="mr-2 h-8 w-8" /> Latest Youtube Videos
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="aspect-video rounded-lg overflow-hidden border border-border shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src={embedUrl}
              title="TallGuyTycoon YouTube Playlist"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full min-h-[250px] sm:min-h-[300px] md:min-h-[400px]"
            ></iframe>
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
