import { Link } from "react-router-dom"
import { useState } from 'react';
import { useGetCines } from "../../hooks/useGetCines";
import { Cargando } from "../../components/shared/Cargando";
import { Paginacion } from "../../components/shared/Paginacion";
import { confirmar } from "../../helpers/Confirmar";
import { borrarCineById } from "../../services/cines";

export const IndiceCines = () => {
  const [recallCustomHook, setRecallCustomHook] = useState<boolean>(false); 
  const {loading,cines,totalPaginas,pagina,setPagina} = useGetCines(recallCustomHook);
 
   if(loading) <Cargando/>
  
  return (
    <div>
        <h3>Cines</h3>
        <Link to={"/cines/crear"}>Crear Cine</Link>

        <Paginacion cantidadTotalDePaginas={totalPaginas} paginaActual={pagina} onChange={nuevaPagina => setPagina(nuevaPagina)} radio={3}/>

        <table className="table table-striped">
          <thead>
            <tr>
              <th></th>
              <th>Nombre</th>
            </tr>
          </thead>
          <tbody>
            {cines?.map(cine =><tr key={cine.id}>
              <td>
                <Link className="btn btn-success" to={`/cines/editar/${cine.id}`}>Editar</Link>
                <button className="btn btn-danger" onClick={async () =>confirmar(() => borrarCineById(cine.id).then(() => setRecallCustomHook(!recallCustomHook)).catch(err => console.log(err)))}>Borrar</button>
              </td>
              <td>
                {cine.nombre}
              </td>
            </tr>)}
          </tbody>
        </table>
    </div>
  )
}
