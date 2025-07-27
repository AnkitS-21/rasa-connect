const jwt = require('jsonwebtoken');
const Vendor = require('../models/Vendor.js');
const Supplier = require('../models/Supplier.js');

const protect = (userType) => async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      if (userType === 'vendor') {
        req.user = await Vendor.findById(decoded.id).select('-password');
      } else if (userType === 'supplier') {
        req.user = await Supplier.findById(decoded.id).select('-password');
      }

      if (!req.user) {
        res.status(401);
        throw new Error('Not authorized, user not found');
      }

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error('Not authorized, token failed');
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
};

module.exports = { protect };