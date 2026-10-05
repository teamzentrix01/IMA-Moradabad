import React, { useEffect, useMemo, useState } from 'react';
import { Search, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import membersData from '../data/membersData';
import { matchesMember } from '../utils/searchUtils';
import '../pages/MembersDirectory.css';

const MEMBERS_PER_PAGE = 24;

export default function MembersDirectorySection() {
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredMembers = useMemo(() => {
    if (!query.trim()) return membersData;
    return membersData.filter((member) => matchesMember(member, query));
  }, [query]);

  useEffect(() => {
    setCurrentPage(1);
  }, [query]);

  const totalPages = Math.ceil(filteredMembers.length / MEMBERS_PER_PAGE);
  const visibleMembers = filteredMembers.slice(
    (currentPage - 1) * MEMBERS_PER_PAGE,
    currentPage * MEMBERS_PER_PAGE,
  );

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) setCurrentPage(totalPages);
  }, [currentPage, totalPages]);

  const pageNumbers = useMemo(() => {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, index) => index + 1);
    const pages = new Set([1, totalPages, currentPage, currentPage - 1, currentPage + 1]);
    return [...pages].filter((page) => page > 0 && page <= totalPages).sort((a, b) => a - b);
  }, [currentPage, totalPages]);

  const goToPage = (page) => {
    setCurrentPage(page);
    const element = document.getElementById('members-directory-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="members-directory-section" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-200/80 bg-slate-50/70">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div data-aos="fade-up" className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 bg-emerald-100/80 text-emerald-800 px-3.5 py-1 rounded-full text-xs font-semibold mb-3">
            <Users className="w-3.5 h-3.5 text-emerald-600" />
            <span>Fraternity Roster</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-libre tracking-tight text-slate-900">
            IMA Moradabad{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600">
              Members Directory
            </span>
          </h2>
          <div className="w-14 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-2.5 rounded-full" />
          <p className="text-slate-600 text-xs sm:text-sm mt-2 max-w-xl mx-auto">
            Search registered life members, specialists, and medical consultants affiliated with IMA Moradabad.
          </p>
        </div>

        {/* Search Toolbar */}
        <div data-aos="fade-up" data-aos-delay="100" className="max-w-4xl mx-auto mb-6">
          <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="relative w-full sm:w-2/3">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search doctor by name or membership number..."
                className="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-slate-50/50"
              />
            </div>
            <div className="text-xs font-medium text-slate-600 whitespace-nowrap bg-slate-100 px-3 py-1.5 rounded-full">
              Showing <strong>{filteredMembers.length === 0 ? 0 : (currentPage - 1) * MEMBERS_PER_PAGE + 1} - {Math.min(currentPage * MEMBERS_PER_PAGE, filteredMembers.length)}</strong> of <strong>{filteredMembers.length}</strong> members
            </div>
          </div>
        </div>

        {/* Members Table / Grid */}
        {filteredMembers.length === 0 ? (
          <div className="max-w-2xl mx-auto p-8 bg-white rounded-2xl border border-slate-200 text-center text-slate-600 text-sm shadow-sm">
            No doctors match your query "{query}". Please search with a different doctor name or UP membership code.
          </div>
        ) : (
          <div data-aos="fade-up" data-aos-delay="150" className="max-w-6xl mx-auto">
            {/* Desktop 2-column paired table */}
            <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full border-collapse text-left text-xs">
                <thead>
                  <tr className="bg-slate-100/80 text-slate-700 font-bold uppercase tracking-wider border-b border-slate-200">
                    <th className="py-3 px-3 w-[6%] text-center">No.</th>
                    <th className="py-3 px-4 w-[22%]">Doctor Name</th>
                    <th className="py-3 px-4 w-[22%]">Membership Number</th>
                    <th className="py-3 px-3 w-[6%] text-center border-l border-slate-200">No.</th>
                    <th className="py-3 px-4 w-[22%]">Doctor Name</th>
                    <th className="py-3 px-4 w-[22%]">Membership Number</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {Array.from({ length: Math.ceil(visibleMembers.length / 2) }, (_, index) => {
                    const leftMember = visibleMembers[index];
                    const rightMember = visibleMembers[index + Math.ceil(visibleMembers.length / 2)];
                    return (
                      <tr key={`paired-${leftMember?.id || index}`} className="hover:bg-emerald-50/40 transition-colors">
                        <td className="py-2.5 px-3 text-center text-slate-500 font-medium">{leftMember?.id}</td>
                        <td className="py-2.5 px-4 font-semibold text-slate-900">{leftMember?.name}</td>
                        <td className="py-2.5 px-4 font-mono text-[11px] text-slate-600">{leftMember?.membership}</td>
                        <td className="py-2.5 px-3 text-center text-slate-500 font-medium border-l border-slate-200">{rightMember?.id || '-'}</td>
                        <td className="py-2.5 px-4 font-semibold text-slate-900">{rightMember?.name || '-'}</td>
                        <td className="py-2.5 px-4 font-mono text-[11px] text-slate-600">{rightMember?.membership || '-'}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:hidden gap-3">
              {visibleMembers.map((member) => (
                <div key={`m-${member.id}`} className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs relative">
                  <span className="absolute top-3 right-3 text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                    #{member.id}
                  </span>
                  <h3 className="font-bold text-slate-900 text-sm mb-1 pr-10">{member.name}</h3>
                  <p className="font-mono text-xs text-slate-500">{member.membership}</p>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-8">
                <button
                  type="button"
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed inline-flex items-center gap-1"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Prev</span>
                </button>

                <div className="flex items-center gap-1">
                  {pageNumbers.map((page, index) => (
                    <React.Fragment key={page}>
                      {index > 0 && page - pageNumbers[index - 1] > 1 && (
                        <span className="px-1 text-slate-400 text-xs">…</span>
                      )}
                      <button
                        type="button"
                        onClick={() => goToPage(page)}
                        className={`min-w-8 h-8 rounded-lg text-xs font-semibold transition-colors ${
                          currentPage === page
                            ? 'bg-emerald-600 text-white shadow-xs'
                            : 'bg-white border border-slate-200 text-slate-700 hover:bg-emerald-50'
                        }`}
                      >
                        {page}
                      </button>
                    </React.Fragment>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed inline-flex items-center gap-1"
                >
                  <span>Next</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
