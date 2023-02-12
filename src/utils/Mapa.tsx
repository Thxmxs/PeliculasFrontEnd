import React from 'react'
import { MapContainer, TileLayer,useMapEvent,Marker } from 'react-leaflet'
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import { coordenadaDTO } from './coordenadas';
import {useState} from 'react';

let DefaultIcon=L.icon({
    iconUrl:icon,
    shadowUrl:iconShadow,
    iconAnchor:[16,37]
})

export const Mapa:React.FC<mapaProps> = ({height,coordenadas:coordenadasProps,manejarClickMapa})  => {
    const [coordenadas, setCoordenadas] = useState<coordenadaDTO[]>(coordenadasProps);
  return (
    <MapContainer
        center={[-33.492305, -70.651794]}
        zoom={14}
        style={{height:'500px'}}
    >
        <TileLayer attribution='React Peliculas' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        <ClickMapa setPunto={coord=>{
            setCoordenadas([coord])
            manejarClickMapa(coord)
        }}/>
        {
            coordenadas.map(c=>
            <Marcador key={c.lat+c.lng} lat={c.lat} lng={c.lng}/>
            
            )
        }
    </MapContainer>
  )
}

const ClickMapa: React.FC<clickMapaProps>=({setPunto})=> {
    useMapEvent('click',e=>{
        setPunto({lat:e.latlng.lat,lng:e.latlng.lng})
    })
    return null;
}
const Marcador : React.FC<coordenadaDTO>=({lat,lng})=>{
    return (
        <Marker position={[lat,lng]}/>
    )
}
interface clickMapaProps{
    setPunto(coordenadas:coordenadaDTO):void;
}
interface mapaProps{
    height?:string;
    coordenadas:coordenadaDTO[];
    manejarClickMapa(coordenadas:coordenadaDTO) :void
}
