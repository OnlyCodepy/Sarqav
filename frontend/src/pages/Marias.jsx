import { WiDaySunny, WiCloudy, WiRain, WiStrongWind } from 'react-icons/wi';
import { FaTemperatureHigh, FaSmog } from 'react-icons/fa';
import './Detail.css';
import TemperatureChart from '../charts/TemperatureChart';
import HumidityChart from '../charts/HumidityChart';

function Marias() {
  const todayData = [
    { time: "08:00", temperature: 18, humidity: 80 },
    { time: "10:00", temperature: 22, humidity: 75 },
    { time: "12:00", temperature: 26, humidity: 70 },
    { time: "14:00", temperature: 28, humidity: 65 },
    { time: "16:00", temperature: 27, humidity: 68 },
    { time: "18:00", temperature: 24, humidity: 72 },
  ];

  const currentTemperature = 26; // Simulación: temperatura actual
  const currentHumidity = 70;
  const currentWind = 5; // km/h
  const currentAirQuality = "Buena";

  // Para el ícono de clima
  function getWeatherIcon(temp) {
    if (temp > 27) return <WiDaySunny size={48} />;
    if (temp > 20) return <WiCloudy size={48} />;
    return <WiRain size={48} />;
  }

  return (
    <div className="detail-container">
      <h1>Estación Meteorológica - Marías</h1>
      
      {/* Resumen Rápido */}
      <div className="summary-grid">
        <div className="item temperature">
          {getWeatherIcon(currentTemperature)}
          
          <p>{currentTemperature}°C - {currentTemperature > 27 ? "Soleado" : currentTemperature > 20 ? "Nublado" : "Lluvia"}</p>
        </div>

        <div className="item humidity">
          <FaTemperatureHigh size={40} />
          <p>Humedad: {currentHumidity}%</p>
        </div>

        <div className="item wind">
          <WiStrongWind size={40} />
          <p>Viento: {currentWind} km/h</p>
        </div>

        <div className="item iqa">
          <FaSmog size={40} />
          <p>Calidad Aire: {currentAirQuality}</p>
        </div>
      </div>

      {/* Gráficas de datos */}
      <section className="charts-section">
        <TemperatureChart data={todayData} />
        <HumidityChart data={todayData} />
      </section>
    </div>
  );
}

export default Marias;
