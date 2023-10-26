import React from 'react'

const Enviado = ({nombre, direccion}) => {
  return (
    <div>
        <h3>Perfecto, {nombre}!</h3>
        <h4>Ya estamos enviando tu pedido a {direccion}</h4>
    </div>
  )
}

export default Enviado