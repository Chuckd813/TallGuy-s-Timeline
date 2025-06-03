import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { EventsSection } from '@/components/events-section';
import { YoutubeSection } from '@/components/youtube-section';
import { InstagramSection } from '@/components/instagram-section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

function WelcomeSection() {
  return (
    <section id="welcome">
      <Card className="overflow-hidden bg-card/30 backdrop-blur-md shadow-xl shadow-primary/10">
        <div className="grid md:grid-cols-2 items-center">
          <div className="p-8 md:p-12">
            <CardHeader className="p-0">
              <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold gradient-text-animated">
                Welcome to <span className="text-primary">TallGuy's</span><span className="text-accent"> Timeline</span>
              </h1>
              <CardDescription className="mt-4 text-lg text-foreground/80 font-body">
                Discover the latest from Armando Pantoja (TallGuyTycoon). Explore upcoming events, catch live streams, and connect on social media.
              </CardDescription>
            </CardHeader>
          </div>
          <div className="relative h-64 md:h-full min-h-[300px] order-first md:order-last">
            <Image 
              src="https://placehold.co/800x600.png" 
              alt="Armando Pantoja - TallGuyTycoon" 
              layout="fill"
              objectFit="cover"
              className="opacity-70"
              data-ai-hint="businessman futuristic city"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-card via-transparent to-transparent"></div>
          </div>
        </div>
      </Card>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <main className="flex-grow container mx-auto px-4 py-8 space-y-12 md:space-y-16">
        <WelcomeSection />
        <EventsSection />
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          <YoutubeSection />
          <InstagramSection />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
