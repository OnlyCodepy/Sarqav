// Importamos el componente de navegación principal (barra superior)
//import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';

// Importamos el pie de página
import Footer from '../components/Footer';

// Componente funcional que representa el diseño base de toda la app
// Recibe una prop llamada `children` que representa el contenido de cada página
function MainLayout({ children }) {
  return (
    <>
      {/* Navbar: aparece en la parte superior de todas las páginas */}
      <Header />

      {/* Contenedor principal donde se renderiza el contenido de cada ruta */}
      {/* minHeight asegura que al menos ocupe el 70% de la pantalla */}
      <main style={{ minHeight: '70vh' }}>
        {children} {/* Aquí se inyectan dinámicamente las páginas: Home, Graficas, etc. */}
      </main>

      {/* Footer: aparece en la parte inferior de todas las páginas */}
      <Footer />
    </>
  );
}

// Exportamos el componente para que pueda ser usado en App.jsx u otros lugares
export default MainLayout;
