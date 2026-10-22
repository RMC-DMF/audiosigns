export const site = {
  name: 'AudioSigns',
  phone: '01765 522765',
  phoneHref: 'tel:+441765522765',
  email: 'enquiries@audiosigns.co.uk', // TODO David: confirm (old site used Inspired@, rebuild used enquires@)
  address: 'Boroughbridge Road, Ripon, North Yorkshire HG4 1QW',
  hours: 'Monday to Friday, 9am to 5pm UK time',
  legalName: 'AudioSigns Ltd', // TODO David: confirm registered name
};

const preview = process.env.PREVIEW === '1';

/** Internal link helper. In PREVIEW builds, '/industries' becomes '/industries.html'. */
export function url(path: string): string {
  if (!path.startsWith('/')) return path;
  if (path === '/') return preview ? '/index.html' : '/';
  const clean = path.replace(/\/$/, '');
  return preview ? `${clean}.html` : `${clean}/`;
}

export const nav = [
  { label: 'Why audio works', href: '/why-audio-works' },
  { label: 'Industries', href: '/industries' },
  { label: 'Messages', href: '/messages' },
  { label: 'Results', href: '/results' },
  { label: 'Compliance', href: '/compliance' },
  { label: 'About', href: '/about' },
];

export const cta = { label: 'Start with one sign', href: '/start' };
