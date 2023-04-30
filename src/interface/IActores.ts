import { ReactElement } from "react";

export interface ICreacionActor{
    nombre:string;
    fechaNacimiento:string;
    file?:File | undefined;
    biografia:string
}
export interface IEdicionActor{
    nombre:string;
    fechaNacimiento:string;
    file?:File | undefined;
    biografia:string;
    fotoUrl?:string
}
export interface IActores{
    id:number;
    nombre:string;
    personaje:string;
    foto:string;
}
export interface ITypeAheadActores{
    actores:IActores[]
    onChangePadre(actores:IActores[]):void
    listadoUI(actor:IActores) :ReactElement
}