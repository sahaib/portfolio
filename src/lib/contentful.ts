import { createClient } from 'contentful';

export const contentfulClient = createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.CONTENTFUL_PREVIEW_TOKEN,
  host: 'preview.contentful.com',
});

// To get only Projects content type (excluding LinkedIn Articles)
export async function getProjects() {
  const entries = await contentfulClient.getEntries({
    content_type: 'projects',
    order: ['-sys.createdAt']
  });
  
  return entries;
}

// Get all blog posts
export async function getBlogPosts() {
  try {
    const entries = await contentfulClient.getEntries({
      content_type: 'blogPost',
      order: ['-sys.createdAt'],
      include: 10 // Include linked assets (embedded images)
    });
    
    return entries;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    // Return an empty entries object if the content type doesn't exist yet
    return { items: [] };
  }
}

// Get a single blog post by slug
export async function getBlogPostBySlug(slug: string) {
  try {
    const entries = await contentfulClient.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
      include: 10 // Include linked assets (embedded images)
    });
    
    return entries.items[0];
  } catch (error) {
    console.error('Error fetching blog post by slug:', error);
    return null;
  }
} 