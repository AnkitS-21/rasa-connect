const express = require('express');
const router = express.Router();
const {
  registerVendor,
  loginVendor,
  registerSupplier,
  loginSupplier,
} = require('../controllers/authController');

router.post('/register/vendor', registerVendor);
router.post('/login/vendor', loginVendor);
router.post('/register/supplier', registerSupplier);
router.post('/login/supplier', loginSupplier);

module.exports = router;