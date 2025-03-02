export const config = {
  runtime: 'edge',
};

export async function POST({ request }) {
  try {
    // Parse the request body
    const body = await request.json();
    
    // Verify the webhook secret
    const secret = request.headers.get('x-contentful-webhook-secret');
    if (secret !== import.meta.env.CONTENTFUL_WEBHOOK_SECRET) {
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