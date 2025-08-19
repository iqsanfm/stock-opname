export default function handler(req, res) {
  res.status(200).json({ 
    message: 'Debug endpoint',
    url: req.url,
    method: req.method,
    headers: req.headers,
    query: req.query,
    body: req.body,
    timestamp: new Date().toISOString()
  });
}