import React from 'react'

const Ensaladas = () => {
    const ensaladas = [
        {id: 1, tipo: 'rusa', precio: '$1200', img: ''}
    ]
  return (
    <div>
        {ensaladas.map((ensalada) => <Card plato={ensalada}/>)}
    </div>
  )
}

export default Ensaladas