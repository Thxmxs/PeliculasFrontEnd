import { useState, useEffect } from 'react';
import { IListadoPeliculasDTO, IPeliculas } from '../interface/IPeliculas';


const peliculasTest : IPeliculas[] =[{
    id:1,
    poster:"https://otakuteca.com/images/books/cover/5bc80d3ce44c3.jpg",
    titulo:"Berserk"
  },
  {
    id:2,
    poster:"https://otakuteca.com/images/books/cover/5bc80d3ce44c3.jpg",
    titulo:"Berserk"
  },
  {
    id:3,
    poster:"https://otakuteca.com/images/books/cover/5bc80d3ce44c3.jpg",
    titulo:"Berserk"
  }
]

export const useGetMangas = () => {
 
    const [mangas, setMangas] = useState<IListadoPeliculasDTO>({cargando:true,enEmision:[],proximosEstrenos:[]});

    useEffect(() => {
      setMangas({
        enEmision:peliculasTest,
        proximosEstrenos:peliculasTest,
        cargando:false
      });
    }, [])
    
    return mangas
}
