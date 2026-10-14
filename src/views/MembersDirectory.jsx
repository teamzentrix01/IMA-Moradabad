import { useEffect, useMemo, useState } from 'react';
import membersData from '../data/membersData';
import './MembersDirectory.css';

import { matchesMember } from '../utils/searchUtils';

const MEMBERS_PER_PAGE = 25;

export default function MembersDirectory() {
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "IMA Member's Directory 2024 | Jigyasa Hospital, Moradabad";
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.getAttribute('content');
    if (description) {
      description.setAttribute(
        'content',
        "Browse the IMA Member's Directory 2024 with doctors and membership numbers associated with Jigyasa Hospital, Moradabad.",
      );
    }
    return () => {
      document.title = previousTitle;
      if (description && previousDescription) description.setAttribute('content', previousDescription);
    };
  }, []);

  return (
    <main className="members-directory">
      <section className="members-directory__hero" aria-labelledby="members-directory-title">
        <div className="members-directory__container">
          <p className="members-directory__eyebrow">Indian Medical Association · Moradabad</p>
          <h1 id="members-directory-title">IMA Member&apos;s Directory 2024</h1>
          <p className="members-directory__subtitle">
            Connect with the medical professionals in the IMA Moradabad community.
          </p>
        </div>
      </section>

      <section className="members-directory__content members-directory__container" aria-label="Member directory">
        <div className="members-directory__toolbar">
          <label className="members-directory__search-label" htmlFor="member-search">Search members</label>
          <input
            id="member-search"
            className="members-directory__search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by name or membership number"
            autoComplete="off"
          />
          <p className="members-directory__count" aria-live="polite">
            Showing <strong>{filteredMembers.length === 0 ? 0 : (currentPage - 1) * MEMBERS_PER_PAGE + 1}-{Math.min(currentPage * MEMBERS_PER_PAGE, filteredMembers.length)}</strong> of <strong>{filteredMembers.length}</strong> members
          </p>
        </div>

        {filteredMembers.length === 0 ? (
          <p className="members-directory__empty">No members match your search. Try another name or membership number.</p>
        ) : (
          <>
            <div data-aos="fade-up" data-aos-duration="700" className="members-directory__table-wrap">
              <div className="members-directory__desktop-columns">
                <table className="members-directory__table members-directory__paired-table">
                  <caption className="sr-only">IMA Member&apos;s Directory 2024</caption>
                  <thead>
                    <tr>
                      <th scope="col">No.</th><th scope="col">Full Name</th><th scope="col">Membership</th>
                      <th scope="col">No.</th><th scope="col">Full Name</th><th scope="col">Membership</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: Math.ceil(visibleMembers.length / 2) }, (_, index) => {
                      const leftMember = visibleMembers[index];
                      const rightMember = visibleMembers[index + Math.ceil(visibleMembers.length / 2)];
                      return (
                        <tr key={`paired-row-${leftMember?.id || index}`}>
                          <td>{leftMember?.id}</td>
                          <td>{leftMember?.name}</td>
                          <td><span className="membership-code">{leftMember?.membership}</span></td>
                          <td>{rightMember?.id}</td>
                          <td>{rightMember?.name}</td>
                          <td><span className="membership-code">{rightMember?.membership}</span></td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="members-directory__cards">
              {visibleMembers.map((member) => (
                <article className="member-card" key={`card-${member.id}-${member.membership}`}>
                  <span className="member-card__number">{member.id}</span>
                  <h2>{member.name}</h2>
                  <p>{member.membership}</p>
                </article>
              ))}
            </div>
            {totalPages > 1 && (
              <nav className="members-directory__pagination" aria-label="Member directory pagination">
                <button type="button" className="pagination-button pagination-button--wide" onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
                  Previous
                </button>
                <div className="pagination-pages">
                  {pageNumbers.map((page, index) => (
                    <span key={page} className="pagination-page-wrap">
                      {index > 0 && page - pageNumbers[index - 1] > 1 && <span className="pagination-ellipsis">…</span>}
                      <button type="button" className={`pagination-button ${currentPage === page ? 'is-active' : ''}`} onClick={() => goToPage(page)} aria-current={currentPage === page ? 'page' : undefined}>
                        {page}
                      </button>
                    </span>
                  ))}
                </div>
                <button type="button" className="pagination-button pagination-button--wide" onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
                  Next
                </button>
              </nav>
            )}
          </>
        )}
      </section>
    </main>
  );
}
