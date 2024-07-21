import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const servicesData = [
  {
    id: 1,
    icon: 'fas fa-clone',
    title: 'Internet de alta velocidad',
    description: 'Proporcionamos servicios de internet de alta velocidad a comunidades rurales de la Sierra Gorda, asegurando una conexión estable y rápida para todas tus necesidades de navegación, trabajo y entretenimiento.'
  },
  {
    id: 2,
    icon: 'fas fa-snowflake',
    title: 'Soporte técnico',
    description: 'Nuestro equipo de técnicos e ingenieros altamente calificados está disponible para ofrecer soporte técnico oportuno y resolver cualquier problema que puedas enfrentar, garantizando una experiencia sin interrupciones.'
  },
  {
    id: 3,
    icon: 'fas fa-plug',
    title: 'Venta de equipos electronicos',
    description: 'Ofrecemos una amplia gama de equipos electrónicos, incluyendo routers, computadoras y otros dispositivos tecnológicos, para satisfacer todas tus necesidades de conectividad y tecnología.'
  },
  {
    id: 4,
    icon: 'fas fa-desktop',
    title: 'Instalacion de camaras de videovigilancia',
    description: 'Proveemos servicios de instalación de sistemas de videovigilancia de alta calidad para mejorar la seguridad de tu hogar, negocio o comunidad, con la configuración y soporte adecuados.'
  },
  {
    id: 5,
    icon: 'fas fa-trophy',
    title: 'Renta de sillas y mesas',
    description: 'Ofrecemos renta de sillas y mesas para todo tipo de eventos, proporcionando soluciones prácticas y convenientes para tus celebraciones y reuniones.'
  },
  {
    id: 6,
    icon: 'fas fa-life-ring',
    title: 'Venta de tinacos y sisternas',
    description: 'Disponemos de una variedad de tinacos y cisternas de alta calidad para almacenamiento de agua, esenciales para asegurar un suministro constante en áreas rurales y urbanas.'
  }
]

function AppServices() {
  return (
    <section id="services" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Servicios</h2>
          <div className="subtitle">Servicios que brindamos</div>
        </div>
        <Row>
          {
            servicesData.map(services => {
              return (
                <Col sm={4} className='holder' key={services.id}>
                  <div className="icon">
                    <i className={services.icon}></i>
                  </div>
                  <h3>{services.title}</h3>
                  <p>{services.description}</p>
                </Col>
              );
            })
          }
        </Row>
      </Container>
    </section>
  );
}

export default AppServices;