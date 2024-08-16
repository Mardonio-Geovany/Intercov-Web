import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { fbConection } from '../../../Data/Firebase'

function EditUser() {
  const location = useLocation()
  const userState = location.state

  const navigate = useNavigate()

  const [nombre, setNombre] = useState(userState.Nombre)
  const [correo, setCorreo] = useState(userState.Correo)
  const [numero, setNumero] = useState(userState.Numero)
  const [comunidad, setComunidad] = useState(userState.Comunidad)
  const [mensaje, setMensaje] = useState(userState.Mensaje)
  const [id] = useState(userState.id)

  const [seGuardoLaData, setSeGuardoLaData] = useState(false)
  const [errorDeGuardado, setErrorDeGuardado] = useState(false)

  const guardarUsuario = () => {
    const dataAdmin = {
        Nombre: nombre,
        Correo: correo,
        Numero: numero,
        Comunidad: comunidad,
        Mensaje: mensaje,
        id: id
    }
    const ref = fbConection.collection('Usuarios')
    const userUpdate = ref.doc(userState.documentID)
    userUpdate.update(dataAdmin)
    .then(() => {
        setSeGuardoLaData(true)
        setTimeout(() => {
            navigate('/ControlPanel')
        }, 2000)
    })
    .catch(() => {
        setErrorDeGuardado(true)
    })
  }

  return (
    <div className='container border border-2 border-primary bg-light rounded'>
      <div className='p-3'>
            <div className='text-center'>
                <h2>Editar datos de {userState.Nombre}</h2>
            </div>
            {
                seGuardoLaData ?
                    <div className='alert alert-success text-center'>
                        <h2>Guardado con éxito</h2>
                    </div>
                    : errorDeGuardado ?
                    <div className='alert alert-danger text-center'>
                        <h2>Error al guardar</h2>
                    </div>
                    :
                    <div></div>
            }
            <form>
                <div>
                    <div style={{ height: 30 }}></div>
                    <div>
                        <h4>ID</h4>
                        <input
                            className='form-control'
                            value={id}
                            disabled
                            type="text" />
                    </div>
                </div>

                <div>
                    <div style={{ height: 30 }}></div>
                    <div>
                        <h4>Nombre</h4>
                        <input
                            className='form-control'
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            type="text" />
                    </div>
                </div>

                <div>
                    <div style={{ height: 30 }}></div>
                    <div>
                        <h4>Correo</h4>
                        <input
                            className='form-control'
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                            type="email" />
                    </div>
                </div>

                <div>
                    <div style={{ height: 30 }}></div>
                    <div>
                        <h4>Número</h4>
                        <input
                            className='form-control'
                            value={numero}
                            onChange={(e) => setNumero(e.target.value)}
                            type="text" />
                    </div>
                </div>

                <div>
                    <div style={{ height: 30 }}></div>
                    <div>
                        <h4>Comunidad</h4>
                        <input
                            className='form-control'
                            value={comunidad}
                            onChange={(e) => setComunidad(e.target.value)}
                            type="text" />
                    </div>
                </div>

                <div>
                    <div style={{ height: 30 }}></div>
                    <div>
                        <h4>Mensaje</h4>
                        <textarea
                            className='form-control'
                            value={mensaje}
                            onChange={(e) => setMensaje(e.target.value)}
                        />
                    </div>
                </div>

                <div className='p-3 text-center'>
                    <button 
                        className='btn btn-success'
                        onClick={(e) => {
                            e.preventDefault()
                            guardarUsuario()
                        }}
                    >
                        Guardar
                    </button>
                </div>

            </form>
        </div>
    </div>
  )
}

export default EditUser
