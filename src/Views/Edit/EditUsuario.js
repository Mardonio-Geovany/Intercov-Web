import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { fbConection } from '../../../Data/Firebase'

function Edit() {
    const location = useLocation()
    const usuario = location.state

    const [nombre, setNombre] = useState(usuario.Nombre)
    const [correo, setCorreo] = useState(usuario.Correo)
    const [numero, setNumero] = useState(usuario.Numero)
    const [comunidad, setComunidad] = useState(usuario.Comunidad)
    const [mensaje, setMensaje] = useState(usuario.Mensaje)
    const [id] = useState(usuario.id)

    const [seGuardoLaData, setSeGuardoLaData] = useState(false)
    const [errorDeGuardado, setErrorDeGuardado] = useState(false)

    const navegacion = useNavigate()

    const actualizarUsuario = () => {
        const nuevosDatosUsuario = {
            Nombre: nombre,
            Correo: correo,
            Numero: numero,
            Comunidad: comunidad,
            Mensaje: mensaje,
            id: id,
        }

        const ref = fbConection.collection('Usuarios')
        const docu = ref.doc(usuario.documentID)
        docu.update(nuevosDatosUsuario)
            .then(() => {
                setSeGuardoLaData(true)
                setTimeout(() => {
                    navegacion('/ControlPanel')
                }, 2000);
            })
            .catch(() => {
                setErrorDeGuardado(true)
            })
    }

    return (
        <div className='container bg-light border border-2 border-primary rounded'>
            <div className='p-3 text-center'>
                <h2>Editar datos de {usuario.Nombre}</h2>
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
            <form onSubmit={e => {
                e.preventDefault();
                actualizarUsuario();
            }}>
                <div className='p-3'>
                    <h4>ID</h4>
                    <input type="text" value={id} className='form-control' disabled />
                </div>
                <div className='p-3'>
                    <h4>Nombre</h4>
                    <input type="text" value={nombre} className='form-control' onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div className='p-3'>
                    <h4>Correo</h4>
                    <input type="email" value={correo} className='form-control' onChange={(e) => setCorreo(e.target.value)} />
                </div>
                <div className='p-3'>
                    <h4>Número</h4>
                    <input type="text" value={numero} className='form-control' onChange={(e) => setNumero(e.target.value)} />
                </div>
                <div className='p-3'>
                    <h4>Comunidad</h4>
                    <input type="text" value={comunidad} className='form-control' onChange={(e) => setComunidad(e.target.value)} />
                </div>
                <div className='p-3'>
                    <h4>Mensaje</h4>
                    <textarea value={mensaje} className='form-control' onChange={(e) => setMensaje(e.target.value)} />
                </div>

                <div className='row'>
                    <div className='text-center col-md-6'>
                        <div className='p-3'>
                            <button
                                type='submit'
                                className='btn btn-success'>Actualizar los datos</button>
                        </div>
                    </div>
                    <div className='text-center col-md-6'>
                        <div className='p-3'>
                            <Link
                                to={'/ControlPanel'}
                                className='btn btn-secondary'>Volver</Link>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Edit
