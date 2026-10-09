import { useEffect, useMemo, useRef, useState } from 'react';
import { Search, X, Droplets } from 'lucide-react';
import Banner from '../components/ui/Banner';
import { bloodGroupMembers, bloodGroups } from '../data/bloodGroupMembers';

const labels = { 'A Positive': 'A+', 'A Negative': 'A-', 'B Positive': 'B+', 'B Negative': 'B-', 'AB Positive': 'AB+', 'AB Negative': 'AB-', 'O Positive': 'O+', 'O Negative': 'O-' };

export default function BloodGroupDirectory() {
  const [selectedGroup, setSelectedGroup] = useState('');
  const [search, setSearch] = useState('');
  const [liveSearch, setLiveSearch] = useState('');
  const [page, setPage] = useState(1);
  const resultsRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => { setLiveSearch(search.trim()); setPage(1); }, 200);
    return () => clearTimeout(timer);
  }, [search]);
  useEffect(() => {
    document.title = 'Blood Group Directory – IMA Moradabad Doctors';
    const description = 'IMA Moradabad ke members ki blood group wise list. A+, A-, B+, B-, AB+, AB-, O+, O- blood group wale doctors ke naam search karein.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
    meta.content = description;
  }, []);

  const members = useMemo(() => bloodGroupMembers.map((member, index) => ({ ...member, id: index + 1, shortGroup: labels[member.bloodGroup] })).sort((a, b) => a.name.localeCompare(b.name)), []);
  const counts = useMemo(() => Object.fromEntries(bloodGroups.map(group => [group, members.filter(member => member.shortGroup === group).length])), [members]);
  const filtered = useMemo(() => {
    const query = liveSearch.toLowerCase().replace(/^dr\.?\s*/, '');
    return members.filter(member => (!selectedGroup || member.shortGroup === selectedGroup) && (!query || member.name.toLowerCase().replace(/^dr\.?\s*/, '').includes(query)));
  }, [members, selectedGroup, liveSearch]);
  const visible = filtered.slice(0, page * 50);
  const hasResults = selectedGroup || liveSearch;
  const selectGroup = (group) => { setSelectedGroup(selectedGroup === group ? '' : group); setPage(1); setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50); };
  const clearAll = () => { setSearch(''); setLiveSearch(''); setSelectedGroup(''); setPage(1); };

  return <>
    <Banner title="BLOOD GROUP DIRECTORY" />
    <main className="min-h-screen bg-slate-50/70 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 font-libre">IMA Member's Directory 2024 – Blood Group Index</h1>
          <p className="mt-2 text-sm text-slate-600">Blood group select karein ya doctor ka naam search karein.</p>
        </header>
        <div className="relative mb-7">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Doctor ka naam search karein..." className="w-full rounded-xl border border-slate-200 bg-white py-4 pl-12 pr-12 text-sm shadow-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100" />
          {(search || selectedGroup) && <button onClick={clearAll} aria-label="Clear" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"><X className="w-5 h-5" /></button>}
        </div>
        <section aria-label="Blood groups" className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {bloodGroups.map(group => <button key={group} onClick={() => selectGroup(group)} className={`rounded-2xl p-5 text-left border transition-all shadow-sm ${selectedGroup === group ? 'bg-teal-700 text-white border-teal-700 shadow-lg scale-[1.02]' : 'bg-white border-slate-200 text-slate-900 hover:border-teal-400 hover:-translate-y-0.5'}`}><Droplets className={`w-5 h-5 mb-2 ${selectedGroup === group ? 'text-teal-100' : 'text-teal-600'}`} /><div className="text-2xl font-bold">{group}</div><div className={`text-xs mt-1 ${selectedGroup === group ? 'text-teal-100' : 'text-slate-500'}`}>{counts[group]} Doctors</div></button>)}
        </section>
        <section ref={resultsRef} className="scroll-mt-24">
          {hasResults && <><div className="flex flex-wrap items-center justify-between gap-3 mb-4"><h2 className="text-xl font-bold text-slate-900 font-libre">{liveSearch ? `${filtered.length} results for '${liveSearch}'` : `${selectedGroup} Blood Group – ${counts[selectedGroup]} Doctors`}</h2>{selectedGroup && liveSearch && <button onClick={() => setSelectedGroup('')} className="text-sm font-semibold text-teal-700 hover:underline">Sabhi groups me search karein</button>}</div>
            {visible.length ? <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm"><table className="w-full text-left text-sm"><thead className="sticky top-0 bg-slate-100 text-xs uppercase tracking-wider text-slate-600"><tr><th className="px-5 py-3">S.No</th><th className="px-5 py-3">Doctor Name</th><th className="px-5 py-3">Blood Group</th></tr></thead><tbody className="divide-y divide-slate-100">{visible.map(member => <tr key={member.id} className="hover:bg-teal-50/50"><td className="px-5 py-3 text-slate-500">{member.id}</td><td className="px-5 py-3 font-medium text-slate-800">{member.name}</td><td className="px-5 py-3"><span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-bold ${member.shortGroup.includes('-') ? 'bg-rose-100 text-rose-700' : 'bg-teal-100 text-teal-700'}`}>{member.shortGroup}</span></td></tr>)}</tbody></table></div> : <p className="rounded-xl bg-white border border-slate-200 p-8 text-center text-slate-500">Koi doctor nahi mila. Spelling check karein.</p>}
            {visible.length < filtered.length && <button onClick={() => setPage(page + 1)} className="mt-5 mx-auto block rounded-lg bg-teal-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-teal-800">Load more</button>}
          </>}
        </section>
        <div className="sr-only">{bloodGroups.map(group => <h2 key={group}>{group} Blood Group Doctors</h2>)}</div>
      </div>
    </main>
  </>;
}
