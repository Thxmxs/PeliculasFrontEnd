import { IModeloLink, IPaginacion } from "../../interface/IShared"
import { useEffect, useState } from 'react';


export const Paginacion : React.FC<IPaginacion> = ({cantidadTotalDePaginas,onChange,paginaActual,radio}) => {

    const [listadoLinks, setListadoLinks] = useState<IModeloLink[]>([]);

    useEffect(() => {
      
        const paginaAnteriorHabilitada = paginaActual !== 1;
        const paginaAnterior = paginaActual-1;

        const links : IModeloLink[] =[];

        links.push({texto:'Anterior',habilitado:paginaAnteriorHabilitada,pagina:paginaAnterior,activo:false})

        for (let i = 1; i <= cantidadTotalDePaginas; i++) {
            if(i >= paginaActual - radio && i <= paginaActual + radio){
                links.push({texto:`${i}`, activo:paginaActual === i, habilitado:true, pagina:i})
            }
            
        }

        const paginaSiguienteHabilitada = paginaActual !== cantidadTotalDePaginas && cantidadTotalDePaginas > 0;
        const paginaSiguiente = paginaActual + 1;

        links.push({texto:'Siguiente',pagina:paginaSiguiente, habilitado:paginaSiguienteHabilitada,activo:false});

        setListadoLinks(links);

    }, [paginaActual,cantidadTotalDePaginas,radio]);

    const obtenerClase=(link:IModeloLink)=>{
        if(link.activo){
            return "active pointer"
        }
        if(!link.habilitado){
            return "disabled"
        }
        return "pointer"
    }
    
    const seleccionarPagina = (link : IModeloLink) =>{
  
        if(link.pagina === paginaActual){
            return;
        }
        if(!link.habilitado){
            return;
        }
        onChange(link.pagina)
    }

  return (
    <nav>
        <ul className="pagination justify-content-center">
            {
                listadoLinks.map(link => 
                <li key={link.texto}
                onClick={() =>seleccionarPagina(link)}
                className={`page-item cursor ${obtenerClase(link)}`}
                >
                   <span className="page-link">{link.texto}</span> 
                </li>)
            }
        </ul>
    </nav>
  )
}
