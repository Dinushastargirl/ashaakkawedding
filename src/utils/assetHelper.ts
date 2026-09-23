/**
 * Helper to ensure asset URLs work across any deployment target (Root domain, GitHub Pages subpath, Vercel, Netlify)
 */
export const getAssetUrl = (path: string): string => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const base = import.meta.env.BASE_URL || './';
  const full = base.endsWith('/') ? `${base}${cleanPath}` : `${base}/${cleanPath}`;
  return encodeURI(full);
};
