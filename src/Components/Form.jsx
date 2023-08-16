import React, { useState } from 'react'

const Form = () => {

    const[paciente, setPaciente] = useState ({
        nombre: '',
        obraSocial: ''
    })
    const[show, setShow] = useState(false)
    const[error, setError] = useState(false)

    const handleSubmit = () =>{
        if(paciente.nombre.length>3 && paciente.obraSocial.length > 2){
            setShow(true)
            setError(false)
        } else {
            setError(true)
        }
    }
    console.log(paciente)
  return (
    <div style={{ display: 'flex', alignItems: 'center',color:'pink' }}>
        <label htmlFor="">Nombre del paciente</label>
        <input type="text" value={paciente.nombre} 
            onChange={(event)=> setPaciente({...paciente,nombre: event.target.value})}
        />
        <label htmlFor="">Obra social</label>
        <input type="text" value={paciente.obraSocial} 
            onChange={(event)=> setPaciente({...paciente,obraSocial: event.target.value})} 
        />
        <button onClick={handleSubmit}>Enviar</button>
        {show && <h3>Sacaste turno</h3>}
        {error && <h3 style={{color:'red'}}>Completa los campos</h3>}
    </div>
  )
}

export default Form