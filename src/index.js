const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Conectar a la base de datos
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));

module.exports = server;