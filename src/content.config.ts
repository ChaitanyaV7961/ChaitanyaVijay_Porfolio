import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    status: z.enum(["completed", "developing"]).default("completed"),
    featured: z.boolean().default(false),
    year: z.string().optional(),
    summary: z.string(),
    repo: z.string().optional(),
    cover: z.string().optional()
  })
});

const research = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    category: z.string(),
    year: z.string().optional(),
    summary: z.string(),
    document: z.string().optional(),
    tags: z.array(z.string()).default([])
  })
});

export const collections = { projects, research };
