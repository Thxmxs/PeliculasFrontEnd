import { Link } from 'react-router-dom';

export const IndiceGeneros = () => {
  return (
    <div>
      <h3>Indice Gèneros</h3>
      <Link to={"/generos/crear"}>Crear Genero</Link>
    </div>
  )
}
