import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatEventDate, getUpcomingEvents } from '../data/events';

export default function AnnouncementBar() {
  const event = getUpcomingEvents()[0];
  const [hidden, setHidden] = useState(() => { try { return event ? localStorage.getItem(`dismissed-event-${event.id}`) === '1' : false; } catch { return false; } });
  if (!event || hidden) return null;
  const dismiss = () => { try { localStorage.setItem(`dismissed-event-${event.id}`, '1'); } catch {} setHidden(true); };
  return <div className="bg-teal-700 text-white text-xs sm:text-sm"><div className="max-w-7xl mx-auto px-4 py-2 flex items-center gap-3"><span className="min-w-0 flex-1 truncate">{event.title} <span className="hidden sm:inline">| {formatEventDate(event)} | </span><Link to="/upcomingevents" className="font-bold underline">More Details →</Link></span><button onClick={dismiss} aria-label="Dismiss announcement" className="shrink-0 p-1 hover:bg-teal-800 rounded"><X className="w-4 h-4" /></button></div></div>;
}
