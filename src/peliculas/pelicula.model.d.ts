import { actorPeliculaDTO } from '../actores/actores';
export interface Ipelicula{
    id:number;
    titulo:string;
    poster:string
}

export interface IListadoPeliculas{
    peliculas?:Ipelicula[] 
}

export interface landingPageDTO{
    enCartelera?:Ipelicula[],
    proximosEstrenos?:Ipelicula[]
}

export interface peliculaCreacionDTO{
    titulo:string;
    enCines:boolean;
    trailer:string;
    fechaLanzamiento?:Date;
    poster?:File;
    posterURL?:string;
    generosIds?:number[];
    cinesIds?:number[];
    actores?:actorPeliculaDTO[];
}