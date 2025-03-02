// Vercel Serverless Function for revalidation
export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  // Check for secret to confirm this is a valid request
  const authHeader = req.headers.get('authorization');
  const expectedAuth = `Bearer ${process.env.CONTENTFUL_WEBHOOK_SECRET}`;
  
  if (authHeader !== expectedAuth) {
    return new Response(JSON.stringify({ message: 'Invalid token' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    // With server-side rendering, we don't need to explicitly revalidate
    // The content will be fetched fresh on the next request
    console.log('Manual revalidation triggered');
    
    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Content will be refreshed on next request' 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.error('Error processing revalidation:', err);
    return new Response(JSON.stringify({ 
      message: 'Error processing revalidation',
      error: err.message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
} 