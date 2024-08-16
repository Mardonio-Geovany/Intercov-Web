import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function AppServices() {
  return (
    <section id="donde-realizar-los-pagos" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Información de Pagos</h2>
        </div>
        <Row>
          <Col sm={12} className='holder'>
            <p>Estimado Cliente Intercov,</p>
            <p>Con el gusto de saludarle y agradecerle su preferencia a través de este medio me permito informarles que los cobros ya no se harán a domicilio. A partir de ahora, puede pagar el servicio por transferencia electrónica a la cuenta BBVA 4152313607659849 a nombre de Pedro de Jesús Santos Covarrubias o en el domicilio Felipe Ángeles N12, Colonia Centro. Anexo fotografía del lugar. De antemano, muchas gracias.</p>
          </Col>
        </Row>
        <div className='google-map' style={{ marginTop: '30px' }}>
        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7441.747343989319!2d-98.90733841274087!3d21.157425108624622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d6beb77fc7d901%3A0x21588ca11952d80d!2sFelipe%20%C3%81ngeles%2C%2042280%20Chapulhuac%C3%A1n%2C%20Hgo.!5e0!3m2!1ses-419!2smx!4v1721742200034!5m2!1ses-419!2smx" style={{ width: '100%', height: '400px', border: '0' }} allowFullScreen="" loading="lazy"></iframe>
      </div>
      </Container>
    </section>
  );
}

export default AppServices;
