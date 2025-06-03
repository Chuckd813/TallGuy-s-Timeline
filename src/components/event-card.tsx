import type { Event } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays, MapPin, Ticket, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-accent/20 hover:border-accent/50">
      {event.imageUrl && (
        <div className="relative w-full h-48">
          <Image 
            src={event.imageUrl} 
            alt={event.title} 
            layout="fill" 
            objectFit="cover"
            data-ai-hint={event.category === "Webinar" ? "online presentation screen" : "conference stage"}
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="font-headline text-2xl text-primary">{event.title}</CardTitle>
        <CardDescription className="text-muted-foreground flex items-center pt-1">
          <CalendarDays className="mr-2 h-4 w-4" />
          {new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          {event.time && ` at ${event.time}`}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-foreground/80 line-clamp-3">{event.description}</p>
        {event.location && (
          <div className="mt-2 flex items-center text-sm text-muted-foreground">
            <MapPin className="mr-2 h-4 w-4" />
            {event.location}
          </div>
        )}
        {event.category && (
           <div className="mt-2 flex items-center text-sm text-muted-foreground">
            <Ticket className="mr-2 h-4 w-4 transform rotate-45" />
            Category: {event.category}
          </div>
        )}
      </CardContent>
      {event.link && (
        <CardFooter>
          <Button asChild variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors">
            <Link href={event.link} target="_blank" rel="noopener noreferrer">
              Learn More
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
