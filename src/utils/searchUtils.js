/**
 * Utility to check if a member matches a search query.
 * 
 * Supports flexible searches such as:
 * - "cp singh" matching "Dr. C.P. Singh" or "Dr. C.P.Singh"
 * - "a.k. singh" matching "ak singh" or "ak"
 * - membership numbers (e.g. "UP/6678", "6678")
 * - partial names, doctor title variations, and any order of keywords
 */

// Helper to remove punctuation (periods, commas, hyphens, slashes, etc.) and excess spaces
export const normalizeText = (text = '') => {
  return String(text)
    .toLowerCase()
    .replace(/[.,\-_/\\()]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
};

// Helper to strip all whitespace and punctuation completely for compact matching
export const compactText = (text = '') => {
  return String(text)
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');
};

/**
 * Checks whether a given member matches the user's query string.
 * @param {Object} member - { name: string, membership: string }
 * @param {string} query - raw search input
 * @returns {boolean}
 */
export const matchesMember = (member, query) => {
  if (!query) return true;
  const rawQuery = query.trim().toLowerCase();
  if (!rawQuery) return true;

  const rawTarget = `${member.name || ''} ${member.membership || ''}`.toLowerCase();

  // 1. Direct raw substring match (fast path)
  if (rawTarget.includes(rawQuery)) {
    return true;
  }

  // 2. Compact match (ignores all spaces, dots, dashes, slashes, e.g. "cpsingh" <-> "dr.c.p.singh")
  const compactQ = compactText(rawQuery);
  const compactT = compactText(rawTarget);
  if (compactQ && compactT.includes(compactQ)) {
    return true;
  }

  // 3. Token-based normalized match:
  // All search words (normalized without punctuation) must exist in the normalized target
  const normalizedTarget = normalizeText(rawTarget);
  const queryTokens = normalizeText(rawQuery)
    .split(' ')
    .filter(Boolean);

  if (queryTokens.length > 0) {
    const allTokensMatch = queryTokens.every((token) => {
      // Check if token exists in normalized target with spaces
      if (normalizedTarget.includes(token)) return true;
      // Or check compact token inside compact target
      const cToken = compactText(token);
      return cToken && compactT.includes(cToken);
    });

    if (allTokensMatch) {
      return true;
    }
  }

  return false;
};
