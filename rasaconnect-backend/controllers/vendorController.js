const Product = require('../models/Product');
const Supplier = require('../models/Supplier');
const Order = require('../models/Order');
const Vendor = require('../models/Vendor');

// @desc    Get all products with filtering
// @route   GET /api/vendor/products
exports.getProducts = async (req, res) => {
  const { search, category, supplier } = req.query;
  let query = {};

  if (search) {
    query.name = { $regex: search, $options: 'i' };
  }
  if (category && category !== 'all') {
    query.category = category;
  }
  if (supplier) {
    query.supplier = supplier;
  }

  try {
    const products = await Product.find(query).populate('supplier', 'businessName rating');
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Get all suppliers
// @route   GET /api/vendor/suppliers
exports.getSuppliers = async (req, res) => {
    try {
        const suppliers = await Supplier.find({}).select('-password');
        res.json(suppliers);
    } catch (error) {
        res.status(500).json({ message: 'Server Error'});
    }
};


// @desc    Create a new order
// @route   POST /api/vendor/orders
exports.createOrder = async (req, res) => {
  const { orderItems, supplierId, totalPrice } = req.body;

  if (orderItems && orderItems.length === 0) {
    return res.status(400).json({ message: 'No order items' });
  } else {
    const order = new Order({
      vendor: req.user._id,
      supplier: supplierId,
      orderItems,
      totalPrice,
    });

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  }
};

// @desc    Get logged in vendor's orders
// @route   GET /api/vendor/orders
exports.getMyOrders = async (req, res) => {
  const orders = await Order.find({ vendor: req.user._id }).populate('supplier', 'businessName');
  res.json(orders);
};

// @desc    Get logged in vendor's profile
// @route   GET /api/vendor/profile
exports.getVendorProfile = async (req, res) => {
  const vendor = await Vendor.findById(req.user._id).select('-password');
  if (vendor) {
    res.json(vendor);
  } else {
    res.status(404).json({ message: 'Vendor not found' });
  }
};