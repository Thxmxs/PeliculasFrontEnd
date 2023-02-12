import React from 'react'
import { useEffect, useState } from 'react';
import { landingPageDTO, Ipelicula } from './peliculas/pelicula.model';
import { ListadoPeliculas } from './peliculas/ListadoPeliculas';




export const LandingPage = () => {
const [peliculas, setPeliculas] = useState<landingPageDTO>({});
const peliculasEnCartelera :Ipelicula[]= [{
    id:1,titulo:'SpiderMan',poster:'https://pics.filmaffinity.com/Spider_Man_Lejos_de_casa-339542528-mmed.jpg'
  },
  {
    id:1,titulo:'SpiderMan',poster:'https://pics.filmaffinity.com/Spider_Man_Lejos_de_casa-339542528-mmed.jpg'
  }
];

const proximosEstrenos :Ipelicula[]= [{
  id:1,titulo:'SpiderMan',poster:'https://pics.filmaffinity.com/Spider_Man_Lejos_de_casa-339542528-mmed.jpg'
},
{
  id:1,titulo:'SpiderMan',poster:'https://pics.filmaffinity.com/Spider_Man_Lejos_de_casa-339542528-mmed.jpg'
}
];
useEffect(() => {
    
    const timerId = setTimeout(() => {
      setPeliculas({
        enCartelera:peliculasEnCartelera,
        proximosEstrenos:proximosEstrenos
      })
      
    }, 1000);
    
    return () => clearTimeout(timerId);

  }, [])

  return (
    <div>
        <h3>En cartelera</h3>
        <ListadoPeliculas peliculas={peliculas.enCartelera}/>

        <h3>Proximos estrenos</h3>
        <ListadoPeliculas peliculas={peliculas.proximosEstrenos}/>
    </div>
  )
}
