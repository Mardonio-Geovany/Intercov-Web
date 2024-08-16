import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

const pricingData = [
  {
    id: 1,
    plan: 'Hogar',
    price: '$350',
    features: ['Internet Ilimitado', '5 mbps', 'Soporte y asistencia'],
    link: 'https://wa.me/527712606369'
  },
  {
    id: 2,
    plan: 'Plus',
    price: '$500',
    features: ['Internet Ilimitado', '8 mbps', 'Soporte y asistencia'],
    link: 'https://wa.me/527712606369'
  },
  {
    id: 3,
    plan: 'Empresarial',
    price: '$700',
    features: ['Internet Ilimitado', '10 mbps', 'Soporte y asistencia'],
    link: 'https://wa.me/527712606369'
  }
]

function AppPricing() {
  return (
    <section id="costos" className="block pricing-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Costos</h2>
          <div className="subtitle">Contactanos si requieres paquetes más grandes</div>
        </div>
        <Row>
          {
            pricingData.map(pricing => {
              return (
                <Col sm={4} key={pricing.id}>
                  <div className='heading'>
                    <h3>{pricing.plan}</h3>
                    <span className='price'>{pricing.price}</span>
                  </div>
                  <div className='content'>
                    <ListGroup>
                      {
                        pricing.features.map((feature, index) => {
                          return (
                            <ListGroup.Item key={index}>{feature}</ListGroup.Item>    
                          );
                        })
                      }
                    </ListGroup>
                  </div>
                  <div className='btn-holder'>
                    <a href={pricing.link} className='btn btn-primary'>Ordene ahora</a>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </section>
  )
}

export default AppPricing;
