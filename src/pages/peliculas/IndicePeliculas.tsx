import { Link } from 'react-router-dom'

export const IndicePeliculas = () => {
  return (
    <div>
        <h3>Indice Peliculas</h3>
        <Link to={"/peliculas/crear"}>Crear Pelicula</Link>
    </div>
  )
}
