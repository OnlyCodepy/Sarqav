// Importamos los módulos necesarios
import express from 'express';
import cors from 'cors'; // Permite que el frontend (otro puerto) acceda a este backend
import pg from 'pg'; // Cliente para conectarse a PostgreSQL
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3001; // Puerto en el que correrá el backend

// Middleware
app.use(cors()); // Habilita CORS
app.use(express.json()); // Permite recibir datos en formato JSON

// Configuración de la base de datos
const db = new pg.Client({
  user: process.env.DB_USER, // Usuario de PostgreSQL
  host: process.env.DB_HOST, // Servidor local
  database: process.env.DB_NAME, // Nombre de la base de datos
  password: process.env.DB_PASSWORD, // Contraseña del usuario
  port: Number(process.env.DB_PORT) // Puerto por defecto de PostgreSQL --
});

// Conectamos a la base de datos--
db.connect();

// Ruta GET para obtener los últimos 100 registros de temperatura y humedad
app.get('/api/sensor_data', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM sensor_data ORDER BY timestamp DESC LIMIT 100');
    res.json(result.rows); // Enviamos los datos en formato JSON
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
