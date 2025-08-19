require('dotenv').config();
const jwt = require('jsonwebtoken');
const connectDB = require('../../database');
const User = require('../../models/User');

let isConnected = false;

const auth = async (req) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  
  if (!token) {
    throw new Error('Token tidak ditemukan');
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findById(decoded.id).select('-password');
  
  if (!user) {
    throw new Error('User tidak ditemukan');
  }

  return user;
};

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    if (!isConnected) {
      await connectDB();
      isConnected = true;
    }

    const user = await auth(req);

    res.json({
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    if (error.message === 'Token tidak ditemukan' || error.message === 'User tidak ditemukan') {
      return res.status(401).json({ message: error.message });
    }
    res.status(500).json({ message: 'Server error', error: error.message });
  }
}