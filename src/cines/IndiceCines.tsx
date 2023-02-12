import React from 'react'
import { Link } from 'react-router-dom'

export const IndiceCines = () => {
  return (
    <div>
        <h3>Indice Cines</h3>
        <Link to={"/cines/crear"}>crear cines</Link>
    </div>
  )
}
