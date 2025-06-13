const DessertModel = require('../models/dessert.model');

const dessertsController = {};

// Obtener todos los productos
dessertsController.getProducts = async (req, res) => {
  try {
    const productsFromDb = await DessertModel.find().lean();

    const products = productsFromDb.map(product => {
      const { _id, ...rest } = product;
      return {
        id: _id.toString(),
        ...rest
      };
    });

    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Error getting products' });
  }
};

// Comprar un producto y reducir el stock
dessertsController.purchaseProduct = async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;

  if (!quantity || quantity <= 0) {
    return res.status(400).json({ error: 'Invalid quantity' });
  }

  try {
    const product = await DessertModel.findById(id);
    if (!product) return res.status(404).json({ error: 'Product not found' });

    if (product.stock < quantity) {
      return res.status(400).json({ error: 'Not enough stock available' });
    }

    product.stock -= quantity;
    await DessertModel.save();

    res.json({ message: 'Purchase successful', product });
  } catch (err) {
    res.status(500).json({ error: 'Error processing purchase' });
  }
};

module.exports = dessertsController;
