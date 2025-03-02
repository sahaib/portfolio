// Vercel Serverless Function for Contentful webhook
export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ message: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    // Parse the request body
    const body = await req.json();
    
    // Verify the webhook secret
    const secret = req.headers.get('x-contentful-webhook-secret');
    if (secret !== process.env.CONTENTFUL_WEBHOOK_SECRET) {
      return new Response(JSON.stringify({ message: 'Invalid webhook secret' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Get the content type from the webhook payload
    const { sys } = body;
    const contentType = sys?.contentType?.sys?.id;
    
    // Log the webhook event
    console.log(`Contentful webhook triggered for content type: ${contentType}`);
    
    // With server-side rendering, we don't need to explicitly revalidate
    // The content will be fetched fresh on the next request
    
    return new Response(JSON.stringify({ 
      success: true,
      contentType,
      message: 'Webhook received successfully' 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.error('Error processing webhook:', err);
    return new Response(JSON.stringify({ 
      message: 'Error processing webhook',
      error: err.message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
} 