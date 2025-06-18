import { Link } from 'react-router-dom';
import './Navbar.css';
import { useEffect, useState } from 'react';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [menuOpen, setMenuOpen] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${showNavbar ? 'visible' : 'hidden'}`}>
      <div className="navbar-logo">SARQAV</div>

      {/* Botón hamburguesa */}
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      {/* Menú de navegación */}
      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
        <li><Link to="/graficas" onClick={() => setMenuOpen(false)}>Gráficas</Link></li>
        <li><Link to="/climate" onClick={() => setMenuOpen(false)}>Climate</Link></li>
        <li><Link to="/museo" onClick={() => setMenuOpen(false)}>Museo Virtual</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;


/*

useState	---> Crea y gestiona estado reactivo local
useEffect	--->Ejecuta código al montar o actualizar el componente
window.scrollY	--->Detecta la posición vertical del scroll actual
addEventListener('scroll')	---->Escucha el movimiento de scroll del usuario
setLastScrollY	---->Guarda la posición previa del scroll para comparar
className dinámico	--->Aplica clases CSS dependiendo del estado
Link de react-router-dom	---->Permite navegar entre páginas sin recargar

*/ 
