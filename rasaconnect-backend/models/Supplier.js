const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const supplierSchema = mongoose.Schema({
  businessName: { type: String, required: true },
  contactName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  address: { type: String, required: true },
  gstNumber: { type: String },
  rating: { type: Number, default: 4.8 },
  totalOrders: { type: Number, default: 0 },
  description: { type: String },
}, { timestamps: true });

// Hash password before saving
supplierSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Method to compare entered password with hashed password
supplierSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const Supplier = mongoose.model('Supplier', supplierSchema);
module.exports = Supplier;