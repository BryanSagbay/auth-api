const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Tiempo de espera para la conexión
      socketTimeoutMS: 45000, // Tiempo de espera para las operaciones
    });
    console.log("MongoDB conectado");
  } catch (error) {
    console.error("Error al conectar MongoDB:", error);
    process.exit(1); // Detiene la ejecución si hay un error
  }
};

module.exports = connectDB;