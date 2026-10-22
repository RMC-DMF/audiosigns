import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const industries = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/industries' }),
  schema: z.object({
    title: z.string(),
    navTitle: z.string().optional(),
    titleTag: z.string(),
    description: z.string(),
    h1: z.string(),
    cardLine: z.string(),
    order: z.number(),
    hazards: z.array(z.string()),
    messages: z.array(z.string()),       // message slugs
    testimonials: z.array(z.string()),   // testimonial slugs
    secondary: z.boolean().default(false),
  }),
});

const messages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/messages' }),
  schema: z.object({
    title: z.string(),
    script: z.string(),
    hazard: z.enum(['PPE', 'Vehicles & plant', 'Height', 'Exclusion & access', 'Hygiene', 'Machinery', 'Security']),
    tag: z.string(),
    audio: z.string().nullable().default(null),
    where: z.string(),
    why: z.string(),
    variants: z.array(z.string()).default([]),
    seenOn: z.array(z.string()).default([]),
    sectors: z.array(z.string()).default([]),
    alarm: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
  schema: z.object({
    client: z.string(),
    location: z.string().optional(),
    sector: z.string(),
    headline: z.string(),
    problem: z.string(),
    installed: z.string(),
    changed: z.string(),
    quote: z.string(),
    name: z.string(),
    role: z.string(),
    order: z.number(),
    todo: z.string().optional(),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonials' }),
  schema: z.object({
    client: z.string(),
    name: z.string().optional(),
    role: z.string().optional(),
    quote: z.string(),
    short: z.string().optional(),
    sector: z.string().optional(),
    order: z.number(),
  }),
});

export const collections = { industries, messages, caseStudies, testimonials };
