import React from 'react'
import { useParams } from 'react-router-dom'
import { FormularioGeneros } from './FormularioGeneros';

export const EditarGenero = () => {

  const {id} :any = useParams();

  return (
    <div>
      <h3>Editar genero</h3>
      <FormularioGeneros modelo={{nombre:'Accion'}}
        onSubmit={async valores =>{
          await new Promise(r=>setTimeout(r,3000))
          console.log(valores)
        }}/>
    </div>
  )
}
