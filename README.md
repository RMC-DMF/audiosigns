# AudioSigns website

Astro 5, static, no CMS. Deploys to Netlify from `main`.

## Run

```
npm install
npm run dev            # http://localhost:4321
npm run build          # production build → dist/ (Netlify uses this)
npm run build:preview  # flat .html build with relative links → dist-preview/ (for sharing a static preview anywhere)
```

## Where things live

- `src/content/industries/*.md` — one file per sector page. Frontmatter holds the hazards, which messages and testimonials to show; the body is the framing copy.
- `src/content/messages/*.md` — one file per message. `audio` is the path under `public/audio/`, or `null` until the recording arrives (the player then shows “recording to follow”). `featured: true` puts it on the homepage/thanks page.
- `src/content/case-studies/*.md` — the four case studies. `todo` is shown on the page until removed.
- `src/content/testimonials/*.md` — the testimonial wall. `short` is the pull-quote used on the homepage and industry pages.
- `src/lib/site.ts` — phone, email, address, nav, the CTA label, and the `url()` link helper.
- `src/styles/global.css` — design tokens and shared components. Colours and type are at the top.
- `src/components/AudioPlayer.astro` — the signature component. Used on the homepage, messages, industries, thanks page.
- `public/_redirects` — 301s from the old WordPress URLs. Netlify reads this.

## Adding a message

Copy any file in `src/content/messages/`, change the slug (file name), fill in the frontmatter, drop the recording in `public/audio/` and set `audio: "/audio/<file>.mp3"`. It appears in the library and on any industry page that lists its slug.

## Placeholders still in the site

Search the source for `todo` (the class) and `TODO`. Each one is a fact David needs to confirm: the neuroscientist, the 6x source (not on the site until sourced), product specs, IP rating, battery life, privacy notice, manufacturing testimonial, email address, registered company name.

`public/audio/placeholder.wav` is a chime so the player can be demonstrated. Replace with real recordings and set `audio` in the three featured messages.

Client names on the homepage strip are text; swap for logos in `src/components/ClientStrip.astro` once permissions are in.

## Before launch

- Analytics (GA4 + Search Console) in `src/layouts/Base.astro`.
- Netlify Forms: the form on `/start` is already tagged `data-netlify`; set the notification email in Netlify once deployed.
- Privacy page.
- Remove every `todo`.
