import { OtroEjemplo } from "./ClassComponent"

const Estudiante = ({nombre, localidad, edad}) => {
    // console.log(props)
  return (
    <>
        <h5>Nombre: {nombre}</h5>
        <h5>Localidad: {localidad}</h5>
        <h5>Edad: {edad}</h5>
        <hr />
    </>
  )
}

export default Estudiante


