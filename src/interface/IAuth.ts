import { ReactElement } from "react-markdown/lib/react-markdown";

export interface IAuthAutorizado{
    autorizado:ReactElement;
    noAutorizado?:ReactElement;
    role?:string
}
export interface IClaim{
    nombre:string;
    valor:string;
}