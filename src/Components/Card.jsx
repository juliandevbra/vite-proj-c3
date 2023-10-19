import React from 'react'
import './Card.css'

const Card = ({plato}) => {

    const { id, img, tipo, precio } = plato

  return ( 
    <div className='card'>
        <img src={img} alt="" className='card-img'/>
        <h3>{tipo}</h3>
        <h4>{precio}</h4>
    </div>
  )
}

export default Card