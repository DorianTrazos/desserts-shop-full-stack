const mongoose = require('mongoose');

const dessertSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    title: { type: String },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    imgMobile: String,
    imgTablet: String,
    imgDesktop: String,
    imgThumbnail: String,
    alt: String
  },
  { timestamps: true },
  { collection: 'desserts' }
);

const DessertModel = mongoose.model('Dessert', dessertSchema);

module.exports = DessertModel;
