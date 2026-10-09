export const events = [
  { id: 'mental-health-2026', title: 'Public Outreach Programme – Mental Health Initiative', startDate: '2026-10-10', endDate: '2026-10-25', venue: 'Schools across Moradabad', audience: 'Students of Classes 9–12', shortDescription: '“Nurture the Mind – Shape the Future”. IMA Moradabad members will address students of classes 9th to 12th about teenage mental health.', image: '/PUBLIC OUTREACH PROGRAM UPDATED.png', category: 'Public Outreach', status: 'Programme Announced', registrationLink: '/contactus' },
  { id: 'cme-2025', title: 'Continuing Medical Education (CME) Workshop 2025', startDate: '2025-11-15', endDate: '2025-11-15', venue: 'IMA Bhawan, Medical Road, Moradabad, UP 244001', audience: '200+ Doctors', shortDescription: 'Comprehensive CME workshop featuring renowned medical faculty discussing advancements in healthcare and critical patient care protocols.', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop', category: 'Education', status: 'Registrations Open', registrationLink: '/contactus' },
  { id: 'blood-camp-2025', title: 'Community Blood Donation & Health Camp', startDate: '2025-12-10', endDate: '2025-12-10', venue: 'IMA Medical Center, Civil Lines, Moradabad, UP 244001', audience: '150+ Donors', shortDescription: 'Mega voluntary blood donation drive with free health check-ups, vital screenings, and donor certificates.', image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=600&h=400&fit=crop', category: 'Community', status: 'Open to Public', registrationLink: '/contactus' },
  { id: 'rural-health-2026', title: 'Free Health Screening for Rural & Underserved Communities', startDate: '2026-01-20', endDate: '2026-01-20', venue: 'Community Hall, Majhola, Moradabad, UP 244001', audience: '300+ Patients', shortDescription: 'Specialist consultations, basic diagnostic tests, free medicines, and health counseling for underserved families.', image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&h=400&fit=crop', category: 'Healthcare', status: 'Free Entry', registrationLink: '/contactus' }
];

export function getIndiaToday() {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata' }).format(new Date());
}

export function getUpcomingEvents(today = getIndiaToday()) {
  return events.filter(event => event.endDate >= today).sort((a, b) => a.startDate.localeCompare(b.startDate));
}

export function getAllEvents() {
  return [...events].sort((a, b) => {
    if (a.id === 'mental-health-2026') return -1;
    if (b.id === 'mental-health-2026') return 1;
    return a.startDate.localeCompare(b.startDate);
  });
}

export function formatEventDate(event) {
  const start = new Date(`${event.startDate}T00:00:00+05:30`);
  const end = new Date(`${event.endDate}T00:00:00+05:30`);
  const fmt = new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'Asia/Kolkata' });
  return event.startDate === event.endDate ? fmt.format(start) : `${fmt.format(start)} – ${fmt.format(end)}`;
}
