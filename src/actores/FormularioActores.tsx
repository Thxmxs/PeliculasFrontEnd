import React from 'react'
import { Form, Formik, FormikHelpers } from 'formik';
import { actorCreacionDTO } from './actores';
import { FormGroupText } from '../utils/FormGroupText';
import { Button } from '../utils/Button';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { FormGroupFecha } from '../utils/FormGroupFecha';
import { FormGroupImagen } from '../utils/FormGroupImagen';
import { FormGroupMarkdown } from '../utils/FormGroupMarkdown';

export const FormularioActores :React.FC<formularioActoresProps> = ({modelo,onSubmit}) => {
  return (
    <Formik
        initialValues={modelo}
        onSubmit={onSubmit}
        validationSchema={
            Yup.object({
                nombre:Yup.string().required('Este campo es requerido'),
                fechaNacimiento:Yup.date().nullable().required('Este campo es requerido')
            })
        }
    >
        {(formikProps)=>(
            <Form>
                <FormGroupText campo='nombre' label='nombre'/>
                <FormGroupFecha label='fecha nacimiento' campo='fechaNacimiento'/>
                <FormGroupImagen campo='foto' label='Foto' imagenURL={modelo.fotoURL}/>
                <FormGroupMarkdown campo='biografia' label='Biografia'/>
                <Button disabled={formikProps.isSubmitting}
                type="submit"
                >Guardar</Button>
                <Link className='btn btn-secondary' to={'/actores'}>Cacnelar</Link>
            </Form>
        )}
    </Formik>
  )
}

interface formularioActoresProps{
    modelo:actorCreacionDTO;
    onSubmit(valores:actorCreacionDTO,acciones:FormikHelpers<actorCreacionDTO>) :void
}
