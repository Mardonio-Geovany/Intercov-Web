import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { fbConection } from '../../Data/Firebase'

function ControlPanel() {
  const [listadoDatos, setListadoDatos] = useState([])
  const [mostrandoUsuarios, setMostrandoUsuarios] = useState(true)
  const [mostrarTablas, setMostrarTablas] = useState(false)

  const [eliminarUsuario, setEliminarUsuario] = useState(false)
  const [usuarioAEliminar, setUsuarioAEliminar] = useState({})

  const obtenerListadoDatos = async () => {
    const datosRef = fbConection.collection('Usuarios') // Cambia 'Usuarios' por el nombre adecuado de la colección en tu base de datos
    const snapshot = await datosRef.get()
    const datosData = snapshot.docs.map((doc) => ({
      documentID: doc.id,
      ...doc.data(),
    }))
    setListadoDatos(datosData)
  }

  const eliminarDato = async (docID) => {
    const ref = fbConection.collection('Usuarios') // Cambia 'Usuarios' por el nombre adecuado de la colección en tu base de datos
    const doc = ref.doc(docID)
    doc.delete()
    .then(() => {
      setEliminarUsuario(false)
      obtenerListadoDatos()
    })
    .catch(() => {
      console.log('Error al eliminar dato')
    })
  }

  return (
    <div className='container'>

      <div className='bg-light p-3 rounded border border-2 border-primary'>
        <h2>Desde aquí puede administrar los datos de la web</h2>
        <div className='row text-center'>
          <div className='col-md-4 p-3'>
            <button className='btn btn-primary' onClick={() => {
              setMostrarTablas(true)
              setMostrandoUsuarios(true)
              obtenerListadoDatos()
            }}>Listado de Usuarios</button>
          </div>

          <div className='col-md-4 p-3'>
            <button className='btn btn-warning'>
              <Link to={'/CreateUser'} className='link-underline link-underline-opacity-0 text-dark'>Añadir un usuario</Link>
            </button>
          </div>
        </div>
      </div>

      <br />

      {mostrarTablas ?
        <div className='bg-light rounded border border-2 border-primary'>
          <div className='p-3'>
            <h2>Listado de datos</h2>
          </div>

          {eliminarUsuario ?
            <div className='p-3'>
              <div className='row alert alert-danger'>
                <div className='p-3 col-md-8'>
                  <h2>¿Desea eliminar el registro de {usuarioAEliminar.nombre}?</h2>
                </div>
                <div className='text-center col-md-4'>
                  <div className='p-3'>
                    <button 
                      className='btn btn-danger'
                      onClick={() => {
                        eliminarDato(usuarioAEliminar.documentID)
                      }}
                    >Eliminar</button>
                  </div>
                </div>
              </div>
            </div>
            :
            <div className='p-3'></div>
          }

          {mostrandoUsuarios ?
            <div className='p-3'>
              <table className='table table-striped'>
                <thead className='bg-primary text-light'>
                  <tr>
                    <th className='p-2'>Nombre</th>
                    <th className='p-2'>Correo</th>
                    <th className='p-2'>Número</th>
                    <th className='p-2'>Comunidad</th>
                    <th className='p-2'>Mensaje</th>
                    <th className='p-2'>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    listadoDatos && listadoDatos.map((usuario) => (
                      <tr key={usuario.documentID}>
                        <td>{usuario.nombre}</td>
                        <td>{usuario.correo}</td>
                        <td>{usuario.numero}</td>
                        <td>{usuario.comunidad}</td>
                        <td>{usuario.mensaje}</td>
                        <td>
                          <div className='row'>
                            <div className='col-md-6 p-2'>
                              <button
                                type='button'
                                className='btn btn-sm btn-danger'
                                onClick={() => {
                                  setEliminarUsuario(true)
                                  setUsuarioAEliminar(usuario)
                                }}
                              >Eliminar</button>
                            </div>
                            <div className='col-md-6 p-2'>
                              <Link to={'/EditUser'} state={usuario} className='btn btn-sm btn-warning'>Editar</Link>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
            :
            <div className='p-3'></div>
          }
        </div>
        :
        <div></div>
      }
    </div>
  )
}

export default ControlPanel
