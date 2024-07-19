import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function AppHeader(){
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">INTERCOV</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#zonas-de-cobertura">Zonas de Cobertura</Nav.Link>
              <Nav.Link href="#costos">Costos</Nav.Link>
              <Nav.Link href="#donde-realizar-los-pagos">Donde realizar los pagos</Nav.Link>
              <Nav.Link href="#manuales-de-usuario">Manuales de Usuario</Nav.Link>
              <Nav.Link href="#atencion-al-cliente">Atencion al cliente</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        );
}