const express = require('express');
const dessertsController = require('../controllers/desserts.controller');
const dessertsRoutes = express.Router();

// GET /products -> lista todos los productos
dessertsRoutes.get('/', dessertsController.getProducts);

// POST /products/:id/purchase -> compra un producto
dessertsRoutes.post('/:id/purchase', dessertsController.purchaseProduct);

module.exports = dessertsRoutes;
