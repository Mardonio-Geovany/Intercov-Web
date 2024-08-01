import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaSearch } from 'react-icons/fa'; // Importar el ícono de búsqueda

function AppAbout() {
  return (
    <section id="zonas-de-cobertura" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Zonas de cobertura</h2>
          <div className="subtitle">Encuentra información sobre nuestros servicios</div>
        </div>
        <Row className="justify-content-center">
          <Col md={6}>
            <div style={{ marginBottom: '20px' }}>
              <h3>Dirección del servicio</h3>
            </div>
            <Form>
              <InputGroup className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Buscar..."
                  style={{ borderRadius: '5px 0 0 5px' }}
                />
                <Button variant="primary" type="submit" style={{ borderRadius: '0 5px 5px 0' }}>
                  <FaSearch />
                </Button>
              </InputGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AppAbout;
