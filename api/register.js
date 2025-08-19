export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  
  // Simple test response
  res.status(200).json({
    message: 'Register endpoint working!',
    body: req.body,
    timestamp: new Date().toISOString()
  });
}