import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { useEffect, useState } from 'react';
//import { FaSearch } from 'react-icons/fa'; // Importar el ícono de búsqueda

import { db } from '../data/database';
import { collection, getDocs } from 'firebase/firestore';

function AppAbout() {

  const [ListadoMunicipios, setMunicipios] = useState([]);
  const [NombreMunicipio, setNombreMun] = useState("");

  const [MostrarSeccion, setMostrarSeccion] = useState(false);
  const [HuboCobertura, setHuboCobertura] = useState(false);

  const [MensajeBusqueda, setMesajeBusqueda] = useState("");

  useEffect(() => {
    GetCobertura();
  }, [])

  const GetCobertura = async () => {
    try {
      const MuniCol = collection(db, 'ZonasCobertura');
      const MuniSnapshot = await getDocs(MuniCol);
      const Munilista = MuniSnapshot.docs.map(doc => doc.data());
      setMunicipios(Munilista);

      //console.log(Munilista);
    } catch (error) {
      setMunicipios([]);
    }
  }

  const HayCobertura = async () => {

    setMostrarSeccion(true);
    try {
      const res = ListadoMunicipios.find(objeto => objeto.Nombre === NombreMunicipio);
      console.log(res.Nombre + " Tiene señal");
      setMesajeBusqueda(res.Nombre + " Tiene Cobertura");
      setHuboCobertura(true);
    } catch (error) {
      console.log("Sin Señal");
      setHuboCobertura(false);
    }
  }


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
              <h3>Consultar Cobertura</h3>
            </div>
            <Form>
              <InputGroup className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Buscar..."
                  style={{ borderRadius: '5px 0 0 5px' }}
                  value={NombreMunicipio}
                  onChange={(e) => {
                    setNombreMun(e.target.value);

                  }}
                />
                <Button variant="primary" type="button" style={{ borderRadius: '0 5px 5px 0' }} onClick={() => {
                  HayCobertura()
                }}>
                  {/* <FaSearch /> */}
                </Button>
              </InputGroup>
            </Form>
          </Col>
        </Row>


        {
          MostrarSeccion ?

            HuboCobertura ?
              <div className='container text-center'>
                <h1 className='text-success'>{MensajeBusqueda}</h1>
              </div>
              :
              <div className='container text-center'>
                <h1 className='text-danger'>Sin Cobertura</h1>
                <h6 className='text-danger'>¿Escribio bien el nombre?</h6>
              </div>

            :
            <div className='container text-center'>
              <h1>Sin datos</h1>
            </div>
        }

      </Container>
    </section>
  );
}

export default AppAbout;
