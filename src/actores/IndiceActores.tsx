import React from 'react'
import { Link } from 'react-router-dom';

export const IndiceActores = () => {
  return (
    <div>
        <h3>Indice Actores</h3>
        <Link to={"/actores/crear"}></Link>
    </div>
  )
}
