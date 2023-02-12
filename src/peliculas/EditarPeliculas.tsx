import React from 'react'
import { generoDTO } from '../generos/generos';
import { FormularioPeliculas } from './FormularioPeliculas';
import { cineDTO } from '../cines/cines';

export const EditarPeliculas = () => {
  const generos:generoDTO[]=[{id:1,nombre:'accion'},{id:2,nombre:'Drama'}]
  const cines:cineDTO[]=[{id:1,nombre:'cinemark'},{id:2,nombre:'cineplanet'}]
  return (
    <div>
        <h3>Editar peliculas</h3>
        <FormularioPeliculas 
        modelo={{
          titulo:'SpiderMan',
          enCines:true,
          trailer:'url',
          fechaLanzamiento: new Date('2019-01-01T00:00:00')
        }}
        onSubmit={valores => console.log(valores)}
        generosNoSeleccionados={generos}
        generosSeleccionados={[]}
        cinesSeleccionados={[]}
        cinesNoSeleccionados={cines}
        actoresSeleccionados={[]}
        />
    </div>
  )
}
