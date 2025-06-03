import type { Event } from '@/types';
import { EventCard } from './event-card';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Future of Finance Summit',
    date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 1 week from now
    time: '10:00 AM PST',
    location: 'Virtual Conference',
    description: 'Join TallGuyTycoon as he discusses the evolving landscape of digital assets and investment strategies in the new economy.',
    category: 'Webinar',
    imageUrl: '/images/info.png',
    link: '#',
  },
  {
    id: '2',
    title: 'Tycoon Mastermind Retreat',
    date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 1 month from now
    time: 'All Day',
    location: 'Miami, FL',
    description: 'An exclusive in-person event for serious entrepreneurs looking to scale their ventures with insights from Armando Pantoja.',
    category: 'Workshop',
    imageUrl: '/images/info.png',
    link: '#',
  },
  {
    id: '3',
    title: 'Crypto & Blockchain Expo Keynote',
    date: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).toISOString(), // 2 months from now
    time: '2:00 PM EST',
    location: 'New York City, NY',
    description: 'TallGuyTycoon delivers a keynote speech on the future trends in cryptocurrency and blockchain technology.',
    category: 'Conference',
    imageUrl: '/images/info.png',
    link: '#',
  },
];

export function EventsSection() {
  // Sort events by date, soonest first
  const sortedEvents = mockEvents.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <section id="events" aria-labelledby="events-heading">
      <Card className="bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle id="events-heading" className="font-headline text-3xl text-center text-accent">Upcoming Events</CardTitle>
        </CardHeader>
        <CardContent>
          {sortedEvents.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground">No upcoming events. Check back soon!</p>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
