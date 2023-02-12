import React from 'react'
import { FormularioCines } from './FormularioCines'

export const EditarCines = () => {
  return (
    <div>
        <h3>Editar Cines</h3>
        <FormularioCines modelo={{nombre:"cinemark",latitud:33.489585098861454,longitud:70.62948540753689}} onSubmit={(valores)=>console.log(valores)}/>
    </div>
  )
}
