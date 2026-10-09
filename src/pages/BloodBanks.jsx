import { useEffect, useMemo, useState } from 'react';
import { Phone, Search, X, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Banner from '../components/ui/Banner';
import { bloodBanks } from '../data/bloodBanks';

export default function BloodBanks() {
  const [search, setSearch] = useState('');
  useEffect(() => {
    document.title = 'Blood Banks in Moradabad – List & Contact Numbers | IMA Moradabad';
    const content = 'Moradabad ke blood banks ki list contact numbers ke saath. IMA Blood Bank, Janta Blood Bank, Dr. Chaturvedi Central Blood Bank aur aur bhi.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
    meta.content = content;
  }, []);
  const filteredBanks = useMemo(() => bloodBanks.filter(bank => bank.name.toLowerCase().includes(search.toLowerCase().trim())), [search]);
  const schema = { '@context': 'https://schema.org', '@graph': bloodBanks.map(bank => ({ '@type': 'Organization', name: bank.name, telephone: bank.phones, address: { '@type': 'PostalAddress', addressLocality: 'Moradabad', addressRegion: 'Uttar Pradesh', addressCountry: 'IN' } })) };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <Banner title="BLOOD BANKS" />
    <main className="min-h-screen bg-slate-50/70 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 font-libre">List of Blood Banks in Moradabad</h1>
          <p className="mt-2 text-sm text-slate-600">Emergency me blood ke liye in blood banks se sampark karein.</p>
        </header>
        <div className="relative mb-8 max-w-3xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input value={search} onChange={event => setSearch(event.target.value)} placeholder="Blood bank ka naam search karein..." className="w-full rounded-xl border border-slate-200 bg-white py-4 pl-12 pr-12 text-sm shadow-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100" />
          {search && <button onClick={() => setSearch('')} aria-label="Clear search" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"><X className="w-5 h-5" /></button>}
        </div>
        {filteredBanks.length ? <div className="grid grid-cols-1 md:grid-cols-2 gap-5">{filteredBanks.map(bank => <article key={bank.name} className="relative rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all"><div className="flex gap-3"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-600"><MapPin className="w-5 h-5" /></div><div className="min-w-0"><div className="flex flex-wrap items-start gap-2"><h2 className="text-base font-bold leading-snug text-slate-900 font-libre">{bank.name}</h2>{bank.imaRun && <span className="rounded-full bg-teal-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-teal-700">IMA Run</span>}</div><div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">{bank.phones.map(phone => <a key={phone} href={`tel:${phone.replace(/[\s-]/g, '')}`} className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-900 hover:underline"><Phone className="h-4 w-4" />{phone}</a>)}</div></div></div></article>)}</div> : <p className="rounded-xl bg-white border border-slate-200 p-8 text-center text-slate-500">Koi blood bank nahi mila</p>}
      </div>
    </main>
  </>;
}
