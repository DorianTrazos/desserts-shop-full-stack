const DessertModel = require('../models/dessert.model');

const dessertsController = {};

// Obtener todos los productos
dessertsController.getProducts = async (req, res) => {
  try {
    const products = await DessertModel.find().lean();

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

dessertsController.updateBulkStock = async (req, res) => {
  const cart = req.body.cart;
  console.log(cart);

  if (!Array.isArray(cart) || cart.length === 0) {
    return res.status(400).json({ error: 'Carrito vacío o malformado' });
  }

  try {
    const updatedProducts = [];

    for (const item of cart) {
      const dessert = await DessertModel.findById(item._id);

      if (!dessert) {
        return res
          .status(404)
          .json({ error: `Producto no encontrado: ${item._id}` });
      }

      if (dessert.stock < item.quantity) {
        return res
          .status(400)
          .json({ error: `Stock insuficiente para ${dessert.name}` });
      }

      dessert.stock -= item.quantity;
      await dessert.save();

      updatedProducts.push(dessert);
    }

    const allProducts = await DessertModel.find();

    res.json({
      message: 'Stock actualizado exitosamente',
      updated: updatedProducts,
      products: allProducts
    });
  } catch (error) {
    console.error('Error en actualización de stock:', error);
    res.status(500).json({ error: 'Error al actualizar el stock' });
  }
};

module.exports = dessertsController;
