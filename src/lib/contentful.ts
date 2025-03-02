import pkg from 'contentful';
const { createClient } = pkg;

// Create a standard client for regular content delivery with error handling
export const contentfulClient = (() => {
  try {
    // Check if environment variables are defined
    const spaceId = import.meta.env.CONTENTFUL_SPACE_ID;
    const accessToken = import.meta.env.CONTENTFUL_PREVIEW_TOKEN;
    
    if (!spaceId || !accessToken) {
      console.warn('Contentful environment variables are missing. Using dummy client.');
      return {
        getEntries: async () => ({ items: [] })
      };
    }
    
    return createClient({
      space: spaceId,
      accessToken: accessToken,
      host: 'preview.contentful.com',
    });
  } catch (error) {
    console.error('Error initializing Contentful client:', error);
    // Return a dummy client that returns empty data
    return {
      getEntries: async () => ({ items: [] })
    };
  }
})();

// To get only Projects content type (excluding LinkedIn Articles)
export async function getProjects() {
  try {
    const entries = await contentfulClient.getEntries({
      content_type: 'projects',
      order: ['-sys.createdAt']
    });
    
    return entries;
  } catch (error) {
    console.error('Error fetching projects from Contentful:', error);
    return { items: [] }; // Return empty array in case of error
  }
}

// Helper function to add a cache-busting parameter that works with Contentful
export function addTimestampToQuery<T>(query: T): T {
  // We're just returning the original query without modification
  // since we can't use sys.revision and don't need cache busting with SSR
  return query;
}

