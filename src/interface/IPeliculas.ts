import { IActores } from './IActores';
import { ICine } from './ICines';
import { IGenero } from './IGeneros';
export interface ICreacionPelicula{
    titulo:string;
    enCines:boolean;
    trailer:string;
    fechaLanzamiento:string;
    poster?:File;
    posterUrl?:string;
    generosSeleccionados:IGenero[];
    generosNoSeleccionados:IGenero[];
    cinesSeleccionados: ICine[];
    cinesNoSeleccionados: ICine[];
    actoresSeleccionados:IActores[]
}
export interface IPeliculas{
    id: number;
    titulo: string;
    poster: string
}

export interface IListadoPeliculas{
    peliculas?: IPeliculas[]
}

export interface IListadoPeliculasDTO{
    enEmision? : IPeliculas[];
    proximosEstrenos?: IPeliculas[];
    cargando:boolean
}