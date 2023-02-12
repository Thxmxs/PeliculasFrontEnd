import React from 'react'
import { Formik, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { FormGroupText } from '../utils/FormGroupText';
import { Button } from '../utils/Button';
import { Link } from 'react-router-dom';
import { generoCreacionDTO } from './generos';

export const FormularioGeneros : React.FC<formularioGenerosProps> = ({modelo,onSubmit}) => {
  return (
    <Formik 
          initialValues={modelo}
          onSubmit={onSubmit}
          validationSchema={
            Yup.object({
              nombre:Yup.string().required('Este campo es requerido').primeraLetraMayuscula()
            })
          }
        >
          {(formikProps)=>(
          <Form>
            <FormGroupText campo='nombre' label='nombre' placeholder='nombre'/>
            <Button disabled={formikProps.isSubmitting} type='submit' >Salvar</Button>
            <Link className='btn btn-secondary' to={'/generos'}>Cancelar</Link>
          </Form>
          )}
        </Formik>
  )
}

interface formularioGenerosProps{
    modelo:generoCreacionDTO,
    onSubmit(valores:generoCreacionDTO,accion:FormikHelpers<generoCreacionDTO>) :void
}
