import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AppContact() {
  return (
    <section id="atencion-al-cliente" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Atención al cliente</h2>
          <div className="subtitle">Ingresa tus datos</div>
        </div>
        <Form className='contact-form'>
          <Row>
            <Col sm={3}>
              <Form.Control type="text" placeholder="Ingresa tu nombre" required />
            </Col>
            <Col sm={3}>
              <Form.Control type="email" placeholder="Ingresa tu correo" required />
            </Col>
            <Col sm={3}>
              <Form.Control type="tel" placeholder="Ingresa tu número" required />
            </Col>
            <Col sm={3}>
              <Form.Control type="text" placeholder="Ingresa tu comunidad" required />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control as="textarea" placeholder="Ingresa tu mensaje" rows={4} required />
            </Col>
          </Row>
          <div className='btn-holder' style={{ marginTop: '20px' }}>
            <Button type="submit">Enviar</Button>
          </div>
        </Form>
      </Container>

      <Container fluid>
        <div className='contact-info' style={{ marginTop: '30px' }}>
          <ul>
            <li>
              <i className="fas fa-envelope"></i> intercov8810@gmail.com
            </li>
            <li>
              <i className="fas fa-phone"></i> 771-260-6369      
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i> Chapulhuacán, Hidalgo, México
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default AppContact;