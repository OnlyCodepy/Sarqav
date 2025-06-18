import './Card.css';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import { Link } from 'react-router-dom';

function Card({ title, images, link }) {
  return (
    <div className="card">
      {images.length > 0 ? <ImageCarousel images={images} /> : <p>Sin imágenes</p>}
      <h3>{title}</h3>
      <Link to={link} className="details-button">Ver detalles</Link>
    </div>
  );
}

export default Card;
