import { createClient } from 'contentful';

// Create a configured client for preview and delivery
const createConfiguredClient = (preview: boolean) => createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: preview 
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: preview ? 'preview.contentful.com' : 'cdn.contentful.com',
  // Add performance optimizations
  retryOnError: true,
  timeout: 30000,
  retryLimit: 2,
});

// Default to delivery API in production, preview in development
const isDev = import.meta.env.DEV;
export const contentfulClient = createConfiguredClient(isDev);

// Cache for projects
let cachedProjects: any = null;
let lastFetch: number = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// To get only Projects content type with caching
export async function getProjects() {
  const now = Date.now();
  
  // Return cached data if valid
  if (cachedProjects && (now - lastFetch) < CACHE_DURATION) {
    return cachedProjects;
  }

  try {
    const entries = await contentfulClient.getEntries({
      content_type: 'projects',
      order: ['-sys.createdAt'],
      select: ['fields.name', 'fields.description', 'fields.img', 'fields.website', 'fields.category'],
      limit: 100
    });
    
    // Update cache
    cachedProjects = entries;
    lastFetch = now;
    
    return entries;
  } catch (error) {
    console.error('Error fetching projects:', error);
    // Return cached data if available, even if expired
    return cachedProjects || { items: [] };
  }
}

// Get all blog posts
export async function getBlogPosts() {
  try {
    const entries = await contentfulClient.getEntries({
      content_type: 'blogPost',
      order: ['-sys.createdAt'],
      include: 10
    });
    
    return entries;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return { items: [] };
  }
}

// Get a single blog post by slug
export async function getBlogPostBySlug(slug: string) {
  try {
    const entries = await contentfulClient.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
      include: 10
    });
    
    return entries.items[0];
  } catch (error) {
    console.error('Error fetching blog post by slug:', error);
    return null;
  }
} 