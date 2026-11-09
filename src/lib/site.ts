export const site = {
  name: 'AudioSigns',
  phone: '01765 522765',
  phoneHref: 'tel:+441765522765',
  email: 'inspired@audiosigns.co.uk',
  address: 'Boroughbridge Road, Ripon, North Yorkshire HG4 1QW',
  hours: 'Monday to Friday, 9am to 5pm UK time',
  legalName: 'AudioSigns Ltd',
  registeredOffice: 'Harelands Courtyard Offices, Moor Road, Melsonby, Richmond, North Yorkshire DL10 5NY',
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
