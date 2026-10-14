import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import Banner from '../components/ui/Banner';
import EventCard from '../components/EventCard';
import { getAllEvents } from '../data/events';

export default function UpComing_Events() {
  const upcoming = getAllEvents();
  return <><Banner title="UPCOMING EVENTS" /><main className="min-h-screen py-8 sm:py-12 px-4 bg-gradient-to-br from-slate-50 via-white to-slate-100"><div className="max-w-7xl mx-auto"><header className="text-center mb-8 max-w-2xl mx-auto"><div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-full text-xs font-semibold mb-3"><Calendar className="w-3.5 h-3.5" />Official Calendar</div><h1 className="text-2xl sm:text-4xl font-bold text-slate-900 font-libre">Upcoming Events & Conferences</h1><p className="mt-2 text-sm text-slate-600">Participate in IMA Moradabad's upcoming healthcare initiatives and community outreach programmes.</p></header><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">{upcoming.map(event => <EventCard key={event.id} event={event} />)}</div><div className="mt-10 text-center bg-blue-50/60 rounded-xl p-5 border border-blue-100"><p className="text-xs text-slate-700">Want to organize a programme? <Link to="/contactus" className="text-blue-700 font-bold hover:underline">Contact the Secretarial Team →</Link></p></div></div></main></>;
}
