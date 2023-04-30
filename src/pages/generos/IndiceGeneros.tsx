
import { Link } from "react-router-dom"
import { useGetGeneros } from "../../hooks/useGetGeneros"
import { Cargando } from "../../components/shared/Cargando";


export const IndiceGeneros = () => {
  
const {loading,generos} = useGetGeneros();

  if(loading) <Cargando/>

  return (
    <div>
        <h3>Generos</h3>
        {
          generos.map(genero =><p>{genero.nombre}</p>)
        }

        <Link className="btn btn-primary" to={"/generos/crear"}>Crear Genero</Link>
    </div>
  )
}
