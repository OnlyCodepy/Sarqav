
import './Climate.css';
import Card from '../components/Card/Card'
import stations from '../constants/stationsData';


function Climate() {
  /*const stations =[
  {  title: "Uchumarca",
    images:[
      '/public/images/uchumarca/uchumarca1.jpg',
      '/public/images/uchumarca/uchumarca2.jpg',
      '/public/images/uchumarca/uchumarca3.jpg'
    ],
    link:"/uchumarca"

  },
  {  title: "Marías",
    images:[
      '/public/images/uchumarca/uchumarca1.jpg',
      '/public/images/uchumarca/uchumarca2.jpg',
      '/public/images/uchumarca/uchumarca3.jpg'
    ],
    link:"/marias"

  },
  {  title: "Bolivar",
    images:[
      '/public/images/uchumarca/uchumarca1.jpg',
      '/public/images/uchumarca/uchumarca2.jpg',
      '/public/images/uchumarca/uchumarca3.jpg'
    ],
    link:"/bolivar"

  }
  ]*/ 
  
  return (
    <div className="climate-container">
      <h1>Estaciones Meteorológicas</h1>
      <div className="climate-grid">
        {stations.map((station, index) => (
          <Card
            key={index}
            title={station.title}
            images={station.images}
            link={station.link}
          />
        ))}
      </div>
    </div>
  );

    
   
}

export default Climate;
