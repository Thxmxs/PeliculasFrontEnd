import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import { IGeneroCreacion } from "../../interface/IGeneros";
import { apiPostGenero } from "../../services/generos";
import { useNavigate } from "react-router-dom";
import { MostrarErrores } from "../../components/shared/MostrarErrores";
import { useState } from 'react';
import { AxiosError } from "axios";

export const CrearGenero = () => {
  const navigate = useNavigate();
  const [erroresBackend, setErroresBackend] = useState<string[]>([]);

  const formik = useFormik<IGeneroCreacion>({
    initialValues:{
      'nombre':''
    },
    validationSchema:Yup.object({
      nombre:Yup.string().max(50,'La longitud maxima de caracteres son 50').required('El Nombre es obligatorio').primeraLetraMayuscula()
    }),
  
    async onSubmit(values){
        var submit = await apiPostGenero(values).catch((err :AxiosError<string[]>) => err?.response?.data ? setErroresBackend(err.response?.data) : null);
        
        submit ? navigate('/generos') : null;
        
    }
  });


  return (
    <div>
      <h3>Crear Genero</h3>
      <MostrarErrores errores={erroresBackend}/>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
            <label style={{color:formik.errors.nombre && formik.touched.nombre ? 'red' :'black'}} htmlFor="nombre">{formik.errors.nombre && formik.touched.nombre ? formik.errors.nombre : 'Nombre'}</label>
            <input className="form-control" type="text" placeholder='Ingresa tu nombre' name='nombre' value={formik.values.nombre} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        </div>
            <button className="btn btn-primary" disabled={formik.isSubmitting} type='submit'>Ingresar</button>
            <Link to={"/generos"} className="btn btn-secondary">Cancelar</Link>
          </form>
    </div>
  )
}
