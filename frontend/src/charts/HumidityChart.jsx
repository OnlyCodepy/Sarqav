import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
  } from 'recharts';
  
  function HumidityChart({ data }) { //gráfica de humedad
    return (
      <>
        <h2>Humedad (%)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 20, right: 30, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="humidity" stroke="#0073ff" name="Humedad" />
          </LineChart>
        </ResponsiveContainer>
      </>
    );
  }
  
  export default HumidityChart;
  