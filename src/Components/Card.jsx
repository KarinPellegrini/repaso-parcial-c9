import React from 'react'

const Card = ({medicooo, setTurno}) => {
  return (
    <div> 
        <h1>Hola {medicooo.nombre}</h1>
        <h3>su especialización es {medicooo.especializacion}</h3>
        <button onClick={()=> setTurno(true)}>Sacar turno</button>
    </div>
  )
}

export default Card