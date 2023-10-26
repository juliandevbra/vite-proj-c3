import { useState } from 'react'
import Enviado from './Enviado'

const Formulario = () => {
    const [cliente, setCliente] = useState({
        nombre: '', 
        direccion: ''
    })
    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        if(cliente.nombre.length > 3 && cliente.direccion.length > 5 && cliente.direccion.includes(' ')){
            setShow(true)
            setError(false)
        } else {
            setError(true)
        }
    }
    console.log(cliente)
  return (
    <div>
        {!show && 
            <form onSubmit={handleSubmit}>
                <label >Nombre</label>
                <input type="text" value={cliente.nombre} onChange={(event) => setCliente({...cliente, nombre: event.target.value.trimStart()})}/>
                <label >Dirección</label>
                <input type="text" value={cliente.direccion} onChange={(event) => setCliente({...cliente, direccion: event.target.value.trimStart()})}/>
                <button>Enviar</button>
            </form>
        }
        {show ? 
            <Enviado nombre={cliente.nombre} direccion={cliente.direccion}/>
        :
            null
        }
        {error && <h5 style={{color: 'red'}}>Por favor, verifique que los datos sean correctos</h5>}

    </div>
  )
}

export default Formulario