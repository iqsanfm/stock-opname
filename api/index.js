export default async function handler(req, res) {
  res.json({ 
    message: 'Stock Opname API Server - Vercel Deployment',
    endpoints: {
      register: '/api/auth/register',
      login: '/api/auth/login', 
      profile: '/api/auth/profile'
    }
  });
}