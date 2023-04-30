import { Link } from "react-router-dom"

export const IndiceCines = () => {
  return (
    <div>
        <h3>Cines</h3>
        <Link to={"/cines/crear"}>Crear Cine</Link>
    </div>
  )
}
