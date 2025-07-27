const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  getProducts,
  addProduct,
  getOrders,
  updateOrderStatus,
  getSupplierProfile
} = require('../controllers/supplierController');

// All supplier routes are protected
router.use(protect('supplier'));

router.route('/products').get(getProducts).post(addProduct);
router.get('/orders', getOrders);
router.put('/orders/:id/status', updateOrderStatus);
router.get('/profile', getSupplierProfile);

module.exports = router;