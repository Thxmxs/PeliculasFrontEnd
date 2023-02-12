import { useFormikContext } from "formik"
import { coordenadaDTO } from "./coordenadas"
import { Mapa } from "./Mapa"

export const MapaFormulario: React.FC<mapaFormularioProps> = ({campoLat,campoLng,coordenadas=[]}) => {
    const {values} = useFormikContext<any>();

    const actualizarCampos=(coordenadas:coordenadaDTO)=>{
        values[campoLat] = coordenadas.lat;
        values[campoLng]=coordenadas.lng;
    }
    console.log(values)
    return (
    <Mapa
     coordenadas={coordenadas}
     manejarClickMapa={actualizarCampos}
    />
  )
}

interface mapaFormularioProps{
    coordenadas?:coordenadaDTO[];
    campoLat:string;
    campoLng:string;
}
MapaFormulario.defaultProps={
    coordenadas:[]
}
