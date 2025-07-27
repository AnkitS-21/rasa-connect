const Vendor = require('../models/Vendor');
const Supplier = require('../models/Supplier');
const jwt = require('jsonwebtoken');

// Utility to generate token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// @desc    Register a new vendor
// @route   POST /api/auth/register/vendor
exports.registerVendor = async (req, res) => {
  const { name, ownerName, email, phone, password, location } = req.body;
  const vendorExists = await Vendor.findOne({ email });

  if (vendorExists) {
    return res.status(400).json({ message: 'Vendor already exists' });
  }

  const vendor = await Vendor.create({ name, ownerName, email, phone, password, location });

  if (vendor) {
    res.status(201).json({
      _id: vendor._id,
      name: vendor.name,
      email: vendor.email,
      token: generateToken(vendor._id),
    });
  } else {
    res.status(400).json({ message: 'Invalid vendor data' });
  }
};

// @desc    Auth vendor & get token
// @route   POST /api/auth/login/vendor
exports.loginVendor = async (req, res) => {
  const { email, password } = req.body;
  const vendor = await Vendor.findOne({ email });

  if (vendor && (await vendor.matchPassword(password))) {
    res.json({
      _id: vendor._id,
      name: vendor.name,
      email: vendor.email,
      token: generateToken(vendor._id),
    });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
};

// @desc    Register a new supplier
// @route   POST /api/auth/register/supplier
exports.registerSupplier = async (req, res) => {
  const { businessName, contactName, email, phone, password, address, gstNumber, description } = req.body;
  const supplierExists = await Supplier.findOne({ email });

  if (supplierExists) {
    return res.status(400).json({ message: 'Supplier already exists' });
  }

  const supplier = await Supplier.create({ businessName, contactName, email, phone, password, address, gstNumber, description });

  if (supplier) {
    res.status(201).json({
      _id: supplier._id,
      name: supplier.businessName,
      email: supplier.email,
      token: generateToken(supplier._id),
    });
  } else {
    res.status(400).json({ message: 'Invalid supplier data' });
  }
};

// @desc    Auth supplier & get token
// @route   POST /api/auth/login/supplier
exports.loginSupplier = async (req, res) => {
  const { email, password } = req.body;
  const supplier = await Supplier.findOne({ email });

  if (supplier && (await supplier.matchPassword(password))) {
    res.json({
      _id: supplier._id,
      name: supplier.businessName,
      email: supplier.email,
      token: generateToken(supplier._id),
    });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
};