import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

const pricingData = [
  {
    id: 1,
    plan: 'Básica',
    price: '$350',
    features: ['Wireframing', 'Visual Design', '5 mbps', 'Free Hosting', 'Soporte y asistencia'],
    link: 'https://wa.me/527712606369'
  },
  {
    id: 2,
    plan: 'Normal',
    price: '$500',
    features: ['Wireframing', 'Visual Design', '8 mbps', 'Free Hosting', 'Soporte y asistencia'],
    link: 'https://wa.me/527712606369'
  },
  {
    id: 3,
    plan: 'Premium',
    price: '$700',
    features: ['Wireframing', 'Visual Design', '10 mbps', 'Free Hosting', 'Soporte y asistencia'],
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
