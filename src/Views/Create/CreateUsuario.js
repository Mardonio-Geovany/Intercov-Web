import React, { useState } from 'react'
import { fbConection } from '../../../Data/Firebase'
import { useNavigate } from 'react-router-dom'

function CreateUser() {

    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [numero, setNumero] = useState('') // Asegúrate de utilizar esta variable
    const [comunidad, setComunidad] = useState('')
    const [mensaje, setMensaje] = useState('')

    const [seGuardoLaData, setSeGuardoLaData] = useState(false)
    const [errorDeGuardado, setErrorDeGuardado] = useState(false)

    const Navegacion = useNavigate()

    const generateId = (input) => {
        const enc = btoa(input)
        setComunidad(enc)
    }

    const guardarUsuario = () => {
        const datosUsuario = {
            Nombre: nombre,
            Correo: correo,
            Numero: numero, // Incluye `numero` aquí
            Comunidad: comunidad,
            Mensaje: mensaje
        }

        const conn = fbConection.collection('Usuarios')
        conn.add(datosUsuario)
            .then(() => {
                setSeGuardoLaData(true)
                setTimeout(() => {
                    Navegacion('/ControlPanel')
                }, 2000);
            })
            .catch(() => {
                setErrorDeGuardado(true)
            })
    }

    return (
        <div className='p-3'>
            <div className='text-center'>
                <h2>Añadir Usuario</h2>
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
            {/* Formulario */}
            <div>
                <form>
                    <div style={{ height: 30 }}></div>

                    <div>
                        <h4>Nombre</h4>
                        <input
                            className='form-control'
                            type="text"
                            value={nombre}
                            onChange={(e) => {
                                setNombre(e.target.value)
                                generateId(e.target.value)
                            }}
                        />
                    </div>

                    <div style={{ height: 30 }}></div>

                    <div>
                        <h4>Correo</h4>
                        <input
                            className='form-control'
                            type="email"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                        />
                    </div>

                    <div style={{ height: 30 }}></div>

                    <div>
                        <h4>Numero</h4>
                        <input
                            className='form-control'
                            type="text"
                            value={numero}
                            onChange={(e) => setNumero(e.target.value)}
                        />
                    </div>

                    <div style={{ height: 30 }}></div>

                    <div>
                        <h4>Comunidad (automático)</h4>
                        <input
                            className='form-control'
                            type="text"
                            value={comunidad}
                            disabled
                        />
                    </div>

                    <div style={{ height: 30 }}></div>

                    <div>
                        <h4>Mensaje</h4>
                        <textarea
                            className='form-control'
                            value={mensaje}
                            onChange={(e) => setMensaje(e.target.value)}
                        />
                    </div>

                    <div style={{ height: 30 }}></div>

                    <div className='text-center'>
                        <button
                            type='submit'
                            className='btn btn-success'
                            onClick={(e) => {
                                e.preventDefault();
                                guardarUsuario();
                            }}
                        >
                            Guardar Datos
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default CreateUser
