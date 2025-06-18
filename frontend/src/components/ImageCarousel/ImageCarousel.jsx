import React , {useState} from 'react';
import './ImageCarousel.css'

function ImageCarousel({images}){
    const [currentIndex, setCurrentIndex]=useState(0);//Estado para saber que imagen se esta mostrando

    if(images.length ===0){
        return <div>No hay imágenes disponibles</div>
    }

    const nextImage=()=>{//Suma 1 al índice. Si llegamos al final (images.length), vuelve al principio (circular).
        setCurrentIndex((prevIndex)=>(prevIndex -1)%images.length)//Avanzar una imagen,  volver al inicio si llegamos al final
    }

    const prevImage = () => {//Resta 1 al índice. Si estamos en 0, va al último elemento (circular hacia atrás).
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); // Retroceder una imagen, volver al final si estamos al inicio
      };
      return (
        <div className="carousel-container">
          <img src={images[currentIndex]} alt="District" className="carousel-image" />
    
          <button className="prev-button" onClick={prevImage}>⟵</button>
          <button className="next-button" onClick={nextImage}>⟶</button>
        </div>
      );

}
export default ImageCarousel;
//images[currentIndex]	Muestra la imagen que corresponde al índice actual.
//onClick={prevImage} y onClick={nextImage}	Botones que permiten cambiar la imagen al hacer clic.