import React, { useState } from 'react'
import { fbConection } from '../../../Data/Firebase'
import { useNavigate } from 'react-router-dom'

function CreateAdmin() {

    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [numero, setNumero] = useState('')
    const [comunidad, setComunidad] = useState('')
    const [mensaje, setMensaje] = useState('')

    const [seGuardoLaData, setSeGuardoLaData] = useState(false)
    const [errorDeGuardado, setErrorDeGuardado] = useState(false)

    const Navegacion = useNavigate()

    // const crearMatricula = () => {
    //     const userLength = nombre.length;
    //     const mul = userLength * 6969;
    //     const iniciales1 = nombre.substring(0, 2)
    //     const string1 = "DFH" + iniciales1 + mul
    //     const string2 = string1.trim()
    //     const mat = string2.substring(0, 8)
    //     setNumero(mat) // Asegúrate de que `numero` sea la variable para la matrícula
    // }

    // const generateId = (input) => {
    //     const enc = btoa(input)
    //     setComunidad(enc) // Asegúrate de que `comunidad` sea la variable para el ID
    // }

    const guardarUsuario = () => {
        const dataAdmin = {
            Nombre: nombre,
            Correo: correo,
            Numero: numero,
            Comunidad: comunidad,
            Mensaje: mensaje
        }
        const ref = fbConection.collection('Credenciales')
        ref.add(dataAdmin)
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
                <h2>Añadir un administrador</h2>
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
                        <h4>Numero (automático)</h4>
                        <input
                            className='form-control'
                            value={numero}
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
                            onChange={(e) => {
                                setNombre(e.target.value);
                                generateId(e.target.value)
                                crearMatricula()
                            }}
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
                        <h4>Contraseña</h4>
                        <input
                            className='form-control'
                            value={mensaje} // Se asume que `mensaje` es la contraseña
                            onChange={(e) => setMensaje(e.target.value)}
                            type="password" />
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
    )
}

export default CreateAdmin
