import pkg from 'contentful';
const { createClient } = pkg;

// Create a standard client for regular content delivery
export const contentfulClient = createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.CONTENTFUL_PREVIEW_TOKEN,
  host: 'preview.contentful.com',
})

// To get only Projects content type (excluding LinkedIn Articles)
export async function getProjects() {
  const entries = await contentfulClient.getEntries({
    content_type: 'projects',
    order: ['-sys.createdAt'],
    // Add a unique query parameter to bust cache when needed
    'sys.revision': Date.now()
  })
  
  return entries
}

