const express = require('express');
const dessertsController = require('../controllers/desserts.controller');
const dessertsRoutes = express.Router();

// GET /products -> lista todos los productos
dessertsRoutes.get('/', dessertsController.getProducts);

// PATCH /:id/stock -> actualiza stock después de una compra
dessertsRoutes.patch('/:id/stock', dessertsController.updateStock);

module.exports = dessertsRoutes;
