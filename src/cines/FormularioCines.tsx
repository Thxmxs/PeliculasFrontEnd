import React from 'react'
import { cineCreacionDTO } from './cines';
import { FormikHelpers, Formik, Form } from 'formik';
import * as Yup from 'yup';
import { FormGroupText } from '../utils/FormGroupText';
import { Button } from '../utils/Button';
import { Link } from 'react-router-dom';
import { Mapa } from '../utils/Mapa';
import { MapaFormulario } from '../utils/MapaFormulario';
import { coordenadaDTO } from '../utils/coordenadas';

export const FormularioCines :React.FC<formularioCinesProps> = ({modelo,onSubmit}) => {
    function transformarCoordenadas(): coordenadaDTO[] | undefined{
        if(modelo.longitud && modelo.latitud){
            const respuesta :coordenadaDTO={lat:modelo.latitud,lng:modelo.longitud};
            return [respuesta];
        }
        return undefined;
    }
  return (
    <Formik
    initialValues={modelo}
    onSubmit={onSubmit}
    validationSchema={Yup.object({
        nombre:Yup.string().required('Este campo es requerido')
    })}
    >
        {(formikProps)=>(
            <Form>
                <FormGroupText label='nombre' campo='nombre'/>
                <div style={{marginBottom:'1rem'}}>
                    <MapaFormulario campoLat='latitud' campoLng='longitud' coordenadas={transformarCoordenadas()}/>
                </div>
                <Button disabled={formikProps.isSubmitting} type="submit">Guardar</Button>
                <Link to={'/cines'} className="btn btn-secondary">Cancelar</Link>
            </Form>
        )}
    </Formik>
  )
}
interface formularioCinesProps{
    modelo:cineCreacionDTO,
    onSubmit(valores:cineCreacionDTO,acciones:FormikHelpers<cineCreacionDTO>):void
}