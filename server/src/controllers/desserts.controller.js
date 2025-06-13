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
dessertsController.updateStock = async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;

  if (!quantity || quantity <= 0) {
    return res.status(400).json({ error: 'Cantidad inválida' });
  }

  try {
    const dessert = await DessertModel.findById(id);
    if (!dessert)
      return res.status(404).json({ error: 'Producto no encontrado' });

    if (dessert.stock < quantity) {
      return res.status(400).json({ error: 'Stock insuficiente' });
    }

    dessert.stock -= quantity;
    await dessert.save();

    res.json({ message: 'Stock actualizado correctamente', product: dessert });
  } catch (err) {
    res.status(500).json({ error: 'Error al actualizar el stock' });
  }
};

module.exports = dessertsController;
