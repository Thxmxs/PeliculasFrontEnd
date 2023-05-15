export interface IMostrarErroresProps{
    errores?:string[]
}
export interface IPaginacion{
    paginaActual: number;
    cantidadTotalDePaginas:number;
    radio:number;
    onChange(pagina:number) :void;
}

export interface IModeloLink{
    pagina:number;
    habilitado:boolean;
    texto:string;
    activo:boolean;
}