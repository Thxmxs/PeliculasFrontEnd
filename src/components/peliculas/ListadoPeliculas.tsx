
import { PeliculaIndividual } from "./PeliculaIndividual"
import '../../assets/components/peliculas/listadoPeliculas.scss'
import { Cargando } from "../shared/Cargando"
import { IListadoPeliculas } from "../../interface/IPeliculas"


export const ListadoPeliculas :React.FC<IListadoPeliculas> = ({peliculas}) => {

  if(!peliculas){
    return <Cargando/>
  }else if(peliculas.length ===0){
    return <>No hay elementos para mostrar</>
  }

  return (
    <div className="listadoPeliculas">
        {
            peliculas?.map(pelicula => <PeliculaIndividual key={pelicula.id} id={pelicula.id} poster={pelicula.poster} titulo={pelicula.titulo}/>)
        }
    </div>
  )
}
