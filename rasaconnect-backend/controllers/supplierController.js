const Product = require('../models/Product');
const Order = require('../models/Order');
const Supplier = require('../models/Supplier');

// @desc    Get logged in supplier's products
// @route   GET /api/supplier/products
exports.getProducts = async (req, res) => {
  const products = await Product.find({ supplier: req.user._id });
  res.json(products);
};

// @desc    Add a product
// @route   POST /api/supplier/products
exports.addProduct = async (req, res) => {
  const { name, category, price, unit, description, inStock } = req.body;
  const product = new Product({
    supplier: req.user._id,
    name,
    category,
    price,
    unit,
    description,
    inStock,
  });
  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
};

// @desc    Get orders for logged in supplier
// @route   GET /api/supplier/orders
exports.getOrders = async (req, res) => {
  const orders = await Order.find({ supplier: req.user._id }).populate('vendor', 'name ownerName');
  res.json(orders);
};

// @desc    Update order status
// @route   PUT /api/supplier/orders/:id/status
exports.updateOrderStatus = async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    // Ensure the order belongs to this supplier
    if (order.supplier.toString() !== req.user._id.toString()) {
        return res.status(401).json({ message: 'Not authorized to update this order' });
    }
    order.status = req.body.status || order.status;
    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } else {
    res.status(404).json({ message: 'Order not found' });
  }
};

// @desc    Get logged in supplier's profile
// @route   GET /api/supplier/profile
exports.getSupplierProfile = async (req, res) => {
  const supplier = await Supplier.findById(req.user._id).select('-password');
  if(supplier) {
    res.json(supplier);
  } else {
    res.status(404).json({ message: 'Supplier not found' });
  }
};