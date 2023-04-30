export interface mapaProps{
    height?:string;
    coordenadas:coordenadaDTO[];
    manejarClickMapa(coordenadas:coordenadaDTO) :void
}
export interface coordenadaDTO{
    lat:number;
    lng:number;
   
}

export interface IClickMapaProps{
    setPunto(coordenadas:coordenadaDTO):void;
}
export interface IMapaProps{
    formikEvent:any,
    latitud?:number,
    longitud?:number
}
export interface IMapaFormularioProps{
    coordenadas:coordenadaDTO[];
    campoLat:string;
    campoLng:string;
}