import React from 'react'
import { FormularioActores } from './FormularioActores'

export const CrearActores = () => {
  return (
    <div>
        <h3>Crear Actores</h3>
        <FormularioActores 
        modelo={{nombre:"",fechaNacimiento:undefined}} 
        onSubmit={valores => console.log(valores)}
          />
    </div>
  )
}
