import { ICreacionCine } from "../../interface/ICines";
import { useFormik } from 'formik';
import { Link, useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { Mapa } from "../../components/shared/Mapa";
import { apiPostCine } from "../../services/cines";
import { useState } from 'react';



export const CrearCines = () => {
  const navigate = useNavigate();
  const [errores, setErrores] = useState<string[]>([]);
  const formik = useFormik<ICreacionCine>({
    initialValues:{
      nombre:'',
      latitud:0,
      longitud:0
    },
    validationSchema:Yup.object({
      nombre:Yup.string().required('El Nombre es obligatorio').primeraLetraMayuscula()
    }),
  
    async onSubmit(values){    

      apiPostCine(values).then(()=>navigate('/cines')).catch(error =>setErrores(error.response.data));
      
    }
  });

  return (
    <div>
        <h3>Crear cine</h3>
      <div>
        {
          errores && (
            <ul>
              <li>
                {errores.map(error => <li key={error}>{error}</li>)}
              </li>
            </ul>
          )
        }
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
              <label style={{color:formik.errors.nombre && formik.touched.nombre ? 'red' :'black'}} htmlFor="nombre">{formik.errors.nombre && formik.touched.nombre ? formik.errors.nombre : 'Nombre'}</label>
              <input className="form-control" type="text" placeholder='Ingresa tu nombre' name='nombre' value={formik.values.nombre} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
          </div>
          <div style={{marginBottom:'1rem'}}>
            <Mapa formikEvent={formik}/>
          </div>
              <button className="btn btn-primary" disabled={formik.isSubmitting} type='submit'>Ingresar</button>
              <Link to={"/cines"} className="btn btn-secondary">Cancelar</Link>
            </form>
      </div>
    </div>
    
  )
}
