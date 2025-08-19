// Vercel handler
export default function handler(req, res) {
  res.status(200).json({ 
    message: 'Hello from Vercel!',
    method: req.method,
    url: req.url,
    timestamp: new Date().toISOString()
  });
}

// Netlify handler
exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: 'Hello from Netlify!',
      method: event.httpMethod,
      path: event.path,
      timestamp: new Date().toISOString()
    })
  };
};