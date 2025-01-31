import contentful from 'contentful';
const { createClient } = contentful;

export const contentfulClient = createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? 'preview.contentful.com' : 'cdn.contentful.com',
})

// To get only Projects content type (excluding LinkedIn Articles)
export async function getProjects() {
  const entries = await contentfulClient.getEntries({
    content_type: 'projects',
    order: ['-sys.createdAt']
  })
  
  return entries
}

