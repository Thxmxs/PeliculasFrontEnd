import { Link } from "react-router-dom"
import { Paginacion } from "../../components/shared/Paginacion"
import { useState } from "react";
import { Cargando } from "../../components/shared/Cargando";
import { confirmar } from "../../helpers/Confirmar";
import { useGetActores } from "../../hooks/useGetActores";
import { borrarActorById } from "../../services/actores";


export const IndiceActores = () => {
  const [recallCustomHook, setRecallCustomHook] = useState<boolean>(false); 
  const {loading,actores,totalPaginas,pagina,setPagina} = useGetActores(recallCustomHook);

  if(loading) <Cargando/>

  return (
    <div>
        <h3>Indice Actores</h3>
        <Link to="/actores/crear">Crear Actor</Link>

      <Paginacion cantidadTotalDePaginas={totalPaginas} paginaActual={pagina} onChange={nuevaPagina => setPagina(nuevaPagina)} radio={3}/>

        <table className="table table-striped">
          <thead>
            <tr>
              <th></th>
              <th>Nombre</th>
            </tr>
          </thead>
          <tbody>
            {actores?.map(actor =><tr key={actor.id}>
              <td>
                <Link className="btn btn-success" to={`/actores/editar/${actor.id}`}>Editar</Link>
                <button className="btn btn-danger" onClick={async () =>confirmar(() => borrarActorById(actor.id).then(() => setRecallCustomHook(!recallCustomHook)).catch(err => console.log(err)))}>Borrar</button>
              </td>
              <td>
                {actor.nombre}
              </td>
            </tr>)}
          </tbody>
        </table>
    </div>
  )
}
