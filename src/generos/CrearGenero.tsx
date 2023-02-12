import { Formik, Form ,Field,ErrorMessage} from 'formik';
import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { Button } from '../utils/Button';
import * as Yup from 'yup';
import { FormGroupText } from '../utils/FormGroupText';
import { FormularioGeneros } from './FormularioGeneros';


export const CrearGenero = () => {
    // const navigate = useNavigate();
    // <Button type='submit' onClick={()=>navigate('/generos')}>Salvar</Button>
  return (
    <div>
        <h3>Crear genero</h3>
        <FormularioGeneros modelo={{nombre:''}}
        onSubmit={async valores =>{
          await new Promise(r=>setTimeout(r,3000))
          console.log(valores)
        }}/>
    </div>
  )
}
