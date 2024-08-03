import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { db } from './firebase'; // Ajusta la ruta según corresponda

function AppContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    community: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await db.collection('contacts').add(formData);
      alert('Mensaje enviado correctamente');
      setFormData({
        name: '',
        email: '',
        phone: '',
        community: '',
        message: ''
      });
    } catch (error) {
      console.error('Error al enviar el mensaje: ', error);
      alert('Hubo un error al enviar el mensaje. Inténtalo de nuevo más tarde.');
    }
  };

  return (
    <section id="atencion-al-cliente" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Atención al cliente</h2>
          <div className="subtitle">Ingresa tus datos</div>
        </div>
        <Form className='contact-form' onSubmit={handleSubmit}>
          <Row>
            <Col sm={3}>
              <Form.Control
                type="text"
                placeholder="Ingresa tu nombre"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Col>
            <Col sm={3}>
              <Form.Control
                type="email"
                placeholder="Ingresa tu correo"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Col>
            <Col sm={3}>
              <Form.Control
                type="tel"
                placeholder="Ingresa tu número"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Col>
            <Col sm={3}>
              <Form.Control
                type="text"
                placeholder="Ingresa tu comunidad"
                name="community"
                value={formData.community}
                onChange={handleChange}
                required
              />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control
                as="textarea"
                placeholder="Ingresa tu mensaje"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
              />
            </Col>
          </Row>
          <div className='btn-holder' style={{ marginTop: '20px' }}>
            <Button type="submit">Enviar</Button>
          </div>
        </Form>
      </Container>
      <div className='google-map' style={{ marginTop: '30px' }}>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7441.747343989319!2d-98.90733841274087!3d21.157425108624622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d6beb77fc7d901%3A0x21588ca11952d80d!2sFelipe%20%C3%81ngeles%2C%2042280%20Chapulhuac%C3%A1n%2C%20Hgo.!5e0!3m2!1ses-419!2smx!4v1721742200034!5m2!1ses-419!2smx"
          style={{ width: '100%', height: '400px', border: '0' }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <Container fluid>
        <div className='contact-info' style={{ marginTop: '30px' }}>
          <ul>
            <li>
              <i className="fas fa-envelope"></i> austre007@hotmail.com
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
