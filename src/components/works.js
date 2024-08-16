import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const worksData = [
  {
    id: 1,
    image: require('../assets/images/img2.jpg'),
  },
  {
    id: 2,
    image: require('../assets/images/img3.jpg'),
  },
  {
    id: 3,
    image: require('../assets/images/img4.jpg'),
  },
  {
    id: 4,
    image: require('../assets/images/img5.jpg'),
  }
];

function AppWorks() {
  const styles = {
    image: {
      width: 'auto', // Mantiene el tamaño original
      height: 'auto',
      maxWidth: '100%', // Asegura que la imagen no se salga del contenedor
      maxHeight: '100%' // Asegura que la imagen no se estire verticalmente más allá del contenedor
    },
    portfolioWrapper: {
      display: 'flex',
      justifyContent: 'center', // Centra la imagen horizontalmente
      alignItems: 'center', // Centra la imagen verticalmente
      height: '100%', // Ocupa toda la altura disponible del contenedor
      overflow: 'hidden' // Oculta cualquier parte de la imagen que se salga del contenedor
    },
    col: {
      padding: '10px', // Añade un poco de espacio entre las imágenes
      display: 'flex',
      justifyContent: 'center', // Centra el contenido horizontalmente
      alignItems: 'center', // Centra el contenido verticalmente
      height: 'auto' // Permite que la altura se ajuste al contenido
    },
    row: {
      margin: '0', // Elimina márgenes para que las columnas se alineen correctamente
    }
  };

  return (
    <section id="manuales-de-usuario" className="block works-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Manual de Usuario</h2>
          <div className="subtitle">our awesome works</div>
        </div>
        <Row className='portfoliolist' style={styles.row}>
          {
            worksData.map(works => {
              return (
                <Col xs={12} sm={6} md={6} lg={6} key={works.id} style={styles.col}>
                  <div className='portfolio-wrapper' style={styles.portfolioWrapper}>
                    <Image 
                      src={works.image} 
                      style={styles.image} // Aplica el estilo
                    />
                  </div>
                </Col>
              );
            })
          }
        </Row>
      </Container>  
    </section>
  );
}

export default AppWorks;
