import TemperatureChart from '../charts/TemperatureChart';
import HumidityChart from '../charts/HumidityChart';
import useSensorData from '../hooks/useSensorData';



function Graficas() {
  const data = useSensorData();

  return (
    
      <div style={{ padding: '10%' }}>
        <div >hello</div>


      <h1>Estación Meteorológica - Gráficas</h1>

      <TemperatureChart data={data} />
      <HumidityChart data={data} />
    </div>

  
    
  );
}

export default Graficas;
