import React from "react"; //Esto es necesario para declarar componentes
import PropTypes from "prop-types";// esto permite validad las props que recibe nuestro cmoponente. Ayuda a evitar errores
import "./Copyright.css"; //importa el archivo de estilos locales para que cada componente tenga su propio diseño aislado

//Declaramos el componente funcionale qe recibe los props(en este caso, una prop llamada author)
function Copyright({author="Desarrollador Anónimo"}){
    
    const year = new Date().getFullYear();

    //esto es lo que se renderiza en pantalla/<footer> es el elemento semántico para pie de página
    return(
        <footer>
            <p>Creado por {author}</p>
            <p>© 2024 -{year}</p>
        </footer>
    );
}

Copyright.propTypes = {
    author: PropTypes.string,
};

export default Copyright;