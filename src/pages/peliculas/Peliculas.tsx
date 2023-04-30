import { useGetMangas } from '../../hooks/useGetMangas';
import { ListadoPeliculas } from '../../components/peliculas/ListadoPeliculas';
import { IListadoPeliculasDTO } from '../../interface/IPeliculas';


export const Peliculas = () => {
  const { cargando,enEmision,proximosEstrenos } :IListadoPeliculasDTO = useGetMangas();

  if(cargando)(<h3>Cargando</h3>)

  return (
    <>
    <div>
      <h3>En Emision</h3>
      <ListadoPeliculas peliculas={enEmision}/>

      <h3>Proximos estrenos</h3>
      <ListadoPeliculas peliculas={proximosEstrenos}/>
    </div>
    </>
  )
}
