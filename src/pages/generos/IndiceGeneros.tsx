
import { Link } from "react-router-dom"
import { useGetGeneros } from "../../hooks/useGetGeneros"
import { Cargando } from "../../components/shared/Cargando";
import { Paginacion } from "../../components/shared/Paginacion";
import { borrarGeneroById } from "../../services/generos";
import { useState } from 'react';
import { confirmar } from "../../helpers/Confirmar";


export const IndiceGeneros = () => {
 const [recallCustomHook, setRecallCustomHook] = useState<boolean>(false); 
 const {loading,generos,totalPaginas,pagina,setPagina} = useGetGeneros(recallCustomHook);

  if(loading) <Cargando/>

  return (
    <div>
        <h3>Generos</h3>
        <Link className="btn btn-primary" to={"/generos/crear"}>Crear Genero</Link>

      <Paginacion cantidadTotalDePaginas={totalPaginas} paginaActual={pagina} onChange={nuevaPagina => setPagina(nuevaPagina)} radio={3}/>

        <table className="table table-striped">
          <thead>
            <tr>
              <th></th>
              <th>Nombre</th>
            </tr>
          </thead>
          <tbody>
            {generos?.map(genero =><tr key={genero.id}>
              <td>
                <Link className="btn btn-success" to={`/generos/editar/${genero.id}`}>Editar</Link>
                <button className="btn btn-danger" onClick={async () =>confirmar(() => borrarGeneroById(genero.id).then(() => setRecallCustomHook(!recallCustomHook)).catch(err => console.log(err)))}>Borrar</button>
              </td>
              <td>
                {genero.nombre}
              </td>
            </tr>)}
          </tbody>
        </table>
    </div>
  )
}
