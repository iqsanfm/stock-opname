module.exports = async function handler(req, res) {
  res.status(200).json({ 
    message: 'Test endpoint working!',
    method: req.method,
    timestamp: new Date().toISOString()
  });
};