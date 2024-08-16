import React, { useState } from 'react'

import CreateUser from './CreateUser'
import CreateAdmin from './CreateAdmin'

function Create() {
    const [mostrarBotones, setMostrarBotones] = useState(true)
    const [añadirUsuario, setAñadirUsuario] = useState(false)

    return (
        <div className="container border border-2 border-primary bg-light rounded">
            {mostrarBotones ?
                <div className='row p-3 text-center'>
                    <div className='col '>
                        <button className='btn btn-primary' onClick={
                            () => {
                                setMostrarBotones(false);
                                setAñadirUsuario(true);
                            }
                        }>Añadir Usuario</button>
                    </div>
                    <div className='col'>
                        <button className='btn btn-primary' onClick={
                            () => {
                                setMostrarBotones(false);
                                setAñadirUsuario(false);
                            }
                        }>Añadir un administrador</button>
                    </div>
                </div>
                :
                añadirUsuario ?
                    <CreateUser />
                    :
                    <CreateAdmin />
            }
        </div>
    )
}

export default Create
