const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Supplier',
  },
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  unit: { type: String, required: true, enum: ['kg', 'litre', 'piece'] },
  description: { type: String },
  image: { type: String, default: '/images/placeholder.png' },
  inStock: { type: Boolean, default: true },
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);
module.exports = Product;