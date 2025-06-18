import { SerialPort, ReadlineParser } from 'serialport';
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

// Conexión a PostgreSQL
const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

db.connect();

// Configuración del puerto serial
const port = new SerialPort({
  path: process.env.SERIAL_PORT,
  baudRate: 9600,
});

// Parseador de líneas del Arduino
const parser = port.pipe(new ReadlineParser({ delimiter: '\n' }));

parser.on('data', async (line) => {
  console.log('Datos recibidos del Arduino:', line.trim());

  // Ejemplo esperado: TEMP:23.5 HUM:48.0
  const match = line.match(/TEMP:(\d+(\.\d+)?)\s+HUM:(\d+(\.\d+)?)/);
  if (match) {
    const temperature = parseFloat(match[1]);
    const humidity = parseFloat(match[3]);

    try {
      await db.query(
        'INSERT INTO sensor_data (temperature, humidity) VALUES ($1, $2)',
        [temperature, humidity]
      );
      console.log('Datos guardados en PostgreSQL ✔️');
    } catch (err) {
      console.error('❌ Error al guardar en la base de datos:', err);
    }
  } else {
    console.warn('⚠️ Línea no válida, ignorada.');
  }
});
