import React from 'react'
import '../../assets/components/peliculas/peliculaIndividual.scss'
import { IPeliculas } from '../../interface/IPeliculas'

export const PeliculaIndividual :React.FC<IPeliculas> = ({poster,titulo}) => {
  return (
    <div className='peliculaIndividual'>
        <a href="">
            <img src={poster} alt="Poster" />
        </a>
        <p>
            <a href={poster}>{titulo}</a>
        </p>
    </div>
  )
}
