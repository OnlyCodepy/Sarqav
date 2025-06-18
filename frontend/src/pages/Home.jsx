import { motion } from 'framer-motion';
import { Activity, CloudSun } from 'lucide-react';
import './Home.css';

function Home() {
  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="home-header">
        <CloudSun size={48} />
        <h1>SARQAV</h1>
      </div>

      <p className="home-description">
        Bienvenido al sistema de monitoreo ambiental rural.<br />
        Visualiza y gestiona datos de temperatura, humedad y calidad del aire.
      </p>

      <motion.div
        className="home-feature"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <Activity size={32} />
        <span>Consulta tus sensores en tiempo real</span>
      </motion.div>
    </motion.div>
  );
}

export default Home;
