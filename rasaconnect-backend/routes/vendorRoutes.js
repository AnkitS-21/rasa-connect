const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  getProducts,
  getSuppliers,
  createOrder,
  getMyOrders,
  getVendorProfile
} = require('../controllers/vendorController');

// All vendor routes are protected
router.use(protect('vendor'));

router.get('/products', getProducts);
router.get('/suppliers', getSuppliers);
router.route('/orders').post(createOrder).get(getMyOrders);
router.get('/profile', getVendorProfile);

module.exports = router;