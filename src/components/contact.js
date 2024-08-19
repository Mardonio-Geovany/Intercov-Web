import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';
import {db} from '../data/database';

function AppContact() {

  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [telf, setTelf] = useState('')
  const [comunidad, setComunidad] = useState('')
  const [mensaje, setMensaje] = useState('')


  const guardarMensaje = () => {
    const MensajeData = {
      Comunidad: comunidad,
      Correo: correo,
      Mensaje: mensaje,
      Nombre: nombre,
      Numero: telf,
    }
    const ref = db.collection('Contacto')
    ref.add(MensajeData)
      .then(() => {
      console.log("Se guardo ALV")
      })
      .catch(() => {
        setErrorDeGuardado(true)
      })

    console.log(MensajeData);
  }

  return (

    <div>
      <div className="title-holder">
        <h2>Atención al cliente</h2>
        <div className="subtitle">Por intercov</div>
      </div>

      <div className='container p-2'>

        {/* Campos */}
        <div className='row row-cols-1 row-cols-md-4'>
          <div className='col p-2'>
            <input type='text' className='form-control' placeholder='Ingresa tu nombre' value={nombre} onChange={(e) => {setNombre(e.target.value)}}></input>
          </div>
          <div className='col p-2'>
            <input type='text' className='form-control' placeholder='Ingresa tu correo' value={correo} onChange={(e)=> {setCorreo(e.target.value)}}></input>
          </div>
          <div className='col p-2'>
            <input type='text' className='form-control' placeholder='Ingresa tu telefono' value={telf} onChange={(e) => {setTelf(e.target.value)}}></input>
          </div>
          <div className='col p-2'>
            <input type='text' className='form-control' placeholder='Ingresa la comunidad' value={comunidad} onChange={(e) => {setComunidad(e.target.value)}}></input>
          </div>
        </div>
        {/* Mensaje */}
        <div className='row'>
          <div className='col'>
            <textarea placeholder='Mensaje' onChange={(e) => {setMensaje(e.target.value)}}></textarea>
          </div>
        </div>
        {/* Boton Hermoso  */}
        <div className='row justify-content-md-center'>
          <div className='col-lg-1'>
            <button className='btn btn-danger' onClick={(e) => {
              e.preventDefault();
              guardarMensaje();
            }}>Enviar</button>
          </div>
        </div>

      </div>

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
    </div>
  );
}

export default AppContact;