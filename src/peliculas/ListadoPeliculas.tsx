import React from 'react'
import { IListadoPeliculas } from './pelicula.model';
import { PeliculaIndividual } from './PeliculaIndividual';
import './ListadoPeliculas.css'
import { Cargando } from '../utils/Cargando';

export const ListadoPeliculas :React.FC<IListadoPeliculas> = ({peliculas}) => {

    if(!peliculas){
        return <Cargando/>
    }else if(peliculas.length ===0){
        return <>No hay elementos para mostrar</>
    }
    return (
        <div className='container-peliculas'>
            {
                peliculas.map(el=>(
                    <PeliculaIndividual {...el} key={el.id}/>
                ))
            }
        </div>
    )
}
