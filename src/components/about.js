import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


import img1 from '../assets/images/img1.jpg';

function AppAbout() {
 
  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Sobre Nosotros</h2>
          <div className="subtitle">Historia de la Empresa</div>
        </div>
        <Row>
          <Col sm={6}>
            <Image src={img1} fluid style={{ width: '90%', height: 'auto' }}/>
          </Col>
          <Col sm={6}>
            <p>INTERCOV inicia operaciones en el año 2020 lo cual nos coloca como una empresa joven, pero con gran capacidad de crecimiento y compromiso con nuestros clientes, 
              somos una empresa proveedora de servicios de internet a comunidades rurales de la Sierra Gorda, 
              de igual forma ofrecemos servicios tecnológicos como lo es la instalación de cámaras de video vigilancia, soporte y venta de equipos electrónicos.
              El principal factor de éxito que nos ha consolidado en los últimos años como una de las mejores opciones de proveedores de servicio de internet de la zona es la estabilidad y 
              velocidad que brindamos a nuestros clientes a pesar de las zonas rurales a las que llegamos, contamos con un grupo de técnicos e ingenieros para brindar soporte oportuno en caso de cualquier falla.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AppAbout;