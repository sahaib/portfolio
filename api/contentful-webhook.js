// Vercel Serverless Function for Contentful webhook
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Verify the webhook secret
  const secret = req.headers['x-contentful-webhook-secret'];
  if (secret !== process.env.CONTENTFUL_WEBHOOK_SECRET) {
    return res.status(401).json({ message: 'Invalid webhook secret' });
  }

  try {
    // Get the content type from the webhook payload
    const { sys } = req.body;
    const contentType = sys?.contentType?.sys?.id;
    
    // Determine which paths to revalidate based on content type
    const pathsToRevalidate = [];
    
    // Always revalidate the home page
    pathsToRevalidate.push('/');
    
    // Revalidate specific pages based on content type
    if (contentType === 'projects') {
      pathsToRevalidate.push('/portfolio');
    } else if (contentType === 'service') {
      pathsToRevalidate.push('/services');
    }
    
    // Revalidate all paths
    for (const path of pathsToRevalidate) {
      await res.revalidate(path);
    }
    
    return res.json({ 
      revalidated: true, 
      paths: pathsToRevalidate,
      message: 'Revalidation triggered successfully' 
    });
  } catch (err) {
    console.error('Error revalidating:', err);
    return res.status(500).json({ 
      message: 'Error revalidating',
      error: err.message 
    });
  }
} 