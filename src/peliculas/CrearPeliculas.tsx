import React from 'react'
import { generoDTO } from '../generos/generos'
import { FormularioPeliculas } from './FormularioPeliculas'
import { cineDTO } from '../cines/cines';

export const CrearPeliculas = () => {
  const generos:generoDTO[]=[{id:1,nombre:'accion'},{id:2,nombre:'Drama'}]
  const cines:cineDTO[]=[{id:1,nombre:'cinemark'},{id:2,nombre:'cineplanet'}]
  return (
    <div>
        <h3>Crear pelicula</h3>
        <FormularioPeliculas 
        modelo={{
          titulo:'',
          enCines:false,
          trailer:''
        }}
        onSubmit={valores => console.log(valores)}
        generosNoSeleccionados={generos}
        generosSeleccionados={[]}
        cinesNoSeleccionados={cines}
        cinesSeleccionados={[]}
        actoresSeleccionados={[]}
        />
    </div>
  )
}
