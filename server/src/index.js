const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const connectDB = require('./config/db');
const dessertsRoutes = require('./routes/desserts.routes');

const corsOptions = {
  origin: '*', // Orígenes permitidos (cuando esté en un dominio real, lo cambiaremos por ese dominio)
  methods: ['GET', 'POST', 'PATCH', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'] // Headers permitidos
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/desserts', dessertsRoutes);

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await connectDB();
});
