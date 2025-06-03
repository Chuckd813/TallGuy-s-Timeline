import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Youtube } from 'lucide-react';

export function YoutubeSection() {
  const channelId = 'UCfx4_Uaa_U0c_2WZuS4HNsQ'; // TallGuyTycoon's YouTube Channel ID
  const embedUrl = `https://www.youtube.com/embed/live_stream?channel=${channelId}`;

  return (
    <section id="youtube-feed" aria-labelledby="youtube-heading">
      <Card className="bg-card/50 backdrop-blur-sm h-full flex flex-col">
        <CardHeader>
          <CardTitle id="youtube-heading" className="font-headline text-3xl text-center text-accent flex items-center justify-center">
            <Youtube className="mr-2 h-8 w-8" /> Live Feed & Latest Videos
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="aspect-video rounded-lg overflow-hidden border border-border shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src={embedUrl}
              title="TallGuyTycoon YouTube Live Feed"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="min-h-[300px] md:min-h-[400px]"
            ></iframe>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
