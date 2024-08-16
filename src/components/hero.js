import Carousel from 'react-bootstrap/Carousel';

var heroData = [
  {
    id: 1,
    image: require('../assets/images/img-hero1.jpg'),
    title: 'Camaras de Seguridad',
    description: '4 cámaras de alta resolución puedes verlas desde tu celular 📱 desde cualquier parte 🌎graban las 24 hrs🕣. Tienen un grabador con 500 gb de disco duro, las puedes conectar a una tv 📺 con hdmi, tienen visión nocturna  y muy buen alcance.',
    link: 'https://www.google.com'
  },
  {
    id: 2,
    image: require('../assets/images/img-hero2.jpg'),
    title: 'Planes de Internet',
    description: 'Ofrecemos internet de alta velocidad para tu hogar o negocio en comunidades rurales. Disfruta de navegación rápida, soporte técnico especializado, y sin interrupciones.',
    link: 'https://www.facebook.com'
  },
  {
    id: 3,
    image: require('../assets/images/img-hero3.jpg'),
    title: 'Variedad de entretenimiento',
    description: 'Disfruta de tus series, películas y música favoritas en alta calidad y sin interrupciones. Encuentra lo mejor en YouTube y Google para una experiencia única. ¡Haz tu suscripción hoy y mantente conectado con lo que más te gusta!',
    link: 'https://www.twitter.com'
  }
]

function AppHero() {
  return (
    <section id="home" className="hero-block">
       <Carousel>
          {
            heroData.map(hero => {
              return (
                <Carousel.Item key={hero.id}>
                  <img
                    className="d-block w-100"
                    src={hero.image}
                    alt={"slide " + hero.id}
                  />
                  <Carousel.Caption>
                    <h2>{hero.title}</h2>
                    <p>{hero.description}</p>
                    <a className="btn btn-primary" href={hero.link}>Learn More <i className="fas fa-chevron-right"></i></a>
                  </Carousel.Caption>             
                </Carousel.Item>
              );
            })
          }
      </Carousel>
    </section>
  );
}

export default AppHero;