export const events = [
  {
    id: 'mental-health-2026',
    title: 'Public Outreach Programme – Mental Health Initiative',
    startDate: '2026-10-10',
    endDate: '2026-10-25',
    venue: 'Schools across Moradabad',
    audience: 'Students of Classes 9–12',
    shortDescription: '“Nurture the Mind – Shape the Future”. IMA Moradabad members will address students of classes 9th to 12th about teenage mental health.',
    image: '/PUBLIC OUTREACH PROGRAM UPDATED.png',
    category: 'Public Outreach',
    status: 'Programme Announced',
    registrationLink: '/contactus'
  }
];

export function getIndiaToday() {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata' }).format(new Date());
}

export function getUpcomingEvents(today = getIndiaToday()) {
  return events.filter(event => event.endDate >= today).sort((a, b) => a.startDate.localeCompare(b.startDate));
}

export function getAllEvents() {
  return [...events].sort((a, b) => a.startDate.localeCompare(b.startDate));
}

export function formatEventDate(event) {
  const start = new Date(`${event.startDate}T00:00:00+05:30`);
  const end = new Date(`${event.endDate}T00:00:00+05:30`);
  const fmt = new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'Asia/Kolkata' });
  return event.startDate === event.endDate ? fmt.format(start) : `${fmt.format(start)} – ${fmt.format(end)}`;
}
