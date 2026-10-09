import EventCard from './EventCard';
import { getAllEvents } from '../data/events';

export default function UpcomingEventsSection() {
  const upcoming = getAllEvents();
  if (!upcoming.length) return null;
  const schema = upcoming.map(event => ({ '@type': 'Event', name: event.title, startDate: event.startDate, endDate: event.endDate, description: event.shortDescription, image: event.image, location: { '@type': 'Place', name: event.venue, address: 'Moradabad, Uttar Pradesh' } }));
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': schema }) }} /><section className="py-10 sm:py-14 px-4 bg-slate-50"><div className="max-w-7xl mx-auto"><div className="text-center mb-8"><h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-libre">Upcoming Events</h2><p className="mt-2 text-sm text-slate-600">IMA Moradabad ke aane wale programmes</p></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{upcoming.map(event => <EventCard key={event.id} event={event} />)}</div></div></section></>;
}
