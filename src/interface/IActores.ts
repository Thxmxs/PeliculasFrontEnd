import { ReactElement } from "react";

export interface ICreacionActor{
    nombre:string;
    fechaNacimiento:string;
    file?:File | undefined;
    biografia:string;
    fotoUrl?:string
}
export interface IEdicionActor{
    id:number;
    nombre:string;
    fechaNacimiento:string | Date ;
    file?:File | undefined;
    biografia:string;
    fotoUrl?:string
}
export interface IActores{
    id:number;
    nombre:string;
    personaje?:string;
    foto:string;
    biografia:string;
    fechaNacimiento:string | Date
}
export interface ITypeAheadActores{
    actores:IActores[]
    onChangePadre(actores:IActores[]):void
    listadoUI(actor:IActores) :ReactElement
}