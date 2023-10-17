import './App.css'
import ClassComponent, { OtroEjemplo } from './Components/ClassComponent'
import Estudiante from './Components/Estudiante'
import FuncComponent from './Components/FuncComponent'

function App() {

  const edad = [31, 109, 4]

  return (
    <>
      <Estudiante nombre='Jessica'  localidad='De la tierra' edad={edad[0]}/>
      <Estudiante nombre='Bernardo' localidad='Olavarria' edad={edad[1]}/>
      <Estudiante nombre='Emmanuel' localidad='Indonesia' edad={edad[2]}/>
    </>
  )
}

export default App
