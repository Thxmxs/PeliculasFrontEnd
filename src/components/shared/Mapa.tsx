import React from 'react'
import { MapContainer, TileLayer,useMapEvent,Marker } from 'react-leaflet'
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import {useState} from 'react';
import { IClickMapaProps, IMapaProps, coordenadaDTO } from '../../interface/IMapa';

let DefaultIcon=L.icon({
    iconUrl:icon,
    shadowUrl:iconShadow,
    iconAnchor:[16,37]
})
L.Marker.prototype.options.icon = DefaultIcon;

export const Mapa :React.FC<IMapaProps> = ({formikEvent,latitud=-33.420398,longitud=-70.631313})  => {
    const [coordenada, setCoordenada] = useState<coordenadaDTO[]>([{lat:latitud,lng:longitud}]);
  return (
    <MapContainer
        center={[latitud, longitud]}
        zoom={14}
        style={{height:'500px'}}
    >
        <TileLayer attribution='React Peliculas' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        <ClickMapa setPunto={coords =>{
            setCoordenada([coords]);
            formikEvent.setFieldValue("latitud", coords.lat);
            formikEvent.setFieldValue("longitud", coords.lng);
        }}/>
        {
            coordenada.map(c => <Marcador key={c.lat+c.lng} lat={c.lat} lng={c.lng} {...coordenada}/>)
        }
    </MapContainer>
  )
}

const ClickMapa: React.FC<IClickMapaProps>=({setPunto})=> {
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

