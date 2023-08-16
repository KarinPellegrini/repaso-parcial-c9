import { useState } from 'react';
import './App.css'
import Card from './Components/Card';
import Form from './Components/Form';

function App() {

  const [turno, setTurno] = useState(false)

  let listaMedicos = [
    { id: 1, nombre: 'Dr. Juan Pérez', especializacion: 'Cardiología' },
    { id: 2, nombre: 'Dra. María García', especializacion: 'Dermatología' },
    { id: 3, nombre: 'Dr. Carlos Rodríguez', especializacion: 'Oftalmología' }
  ]; 

  return (
    <>
      {listaMedicos.map((medico) => <Card key={medico.id} medicooo={medico} setTurno={setTurno}/>)} 
      {turno && <Form/>} 
      {/* si turno == true que muestre form*/}
      {/* {turno ? <Form/> : null}  Otra forma de escribir la línea 19*/}
    </>
  )
}

export default App
