import React from 'react'
import { Ipelicula } from './pelicula.model';
import './PeliculaIndividual.module.css'


export const PeliculaIndividual :React.FC<Ipelicula> = ({id,poster,titulo}) => {

    const construirLink =()=>`/pelicula/${id}`;

  return (
    <div>
        <a href={construirLink()}>
            <img src={poster}/>
        </a>
        <p>
            <a href={construirLink()}>{titulo}</a>
        </p>
    </div>
  )
}
