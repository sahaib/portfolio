import * as contentful from 'contentful';

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.CONTENTFUL_PREVIEW_TOKEN,
  host: 'preview.contentful.com',
})

// To get only Projects content type (excluding LinkedIn Articles)
export async function getProjects() {
  const entries = await contentfulClient.getEntries({
    content_type: 'projects',
    order: ['-sys.createdAt']
  })
  
  return entries
}

