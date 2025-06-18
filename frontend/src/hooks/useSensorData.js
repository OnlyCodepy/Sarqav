import { useState, useEffect } from 'react';

function useSensorData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch('http://localhost:3001/api/sensor_data')
        .then(res => res.json())
        .then(data => {
          const formatted = data
            .map(entry => ({
              ...entry,
              time: new Date(entry.timestamp).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
              })
            }))
            .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

          setData(formatted);
        });
    };

    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, []);

  return data;
}

export default useSensorData;
