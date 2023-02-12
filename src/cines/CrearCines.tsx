import React from 'react'
import { FormularioCines } from './FormularioCines'

export const CrearCines = () => {
  return (
    <>
    <h1>CrearCines</h1>
    <FormularioCines modelo={{nombre:""}}
     onSubmit={valores=>console.log(valores)}/>
    </>
  )
}
