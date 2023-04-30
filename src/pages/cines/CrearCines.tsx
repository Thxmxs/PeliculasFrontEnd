import { ICreacionCine } from "../../interface/ICines";
import { useFormik } from 'formik';
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import { Mapa } from "../../components/shared/Mapa";


export const CrearCines = () => {

  const formik = useFormik<ICreacionCine>({
    initialValues:{
      nombre:'',
      latitud:-33.420398,
      longitud:-70.631313
    },
    validationSchema:Yup.object({
      nombre:Yup.string().required('El Nombre es obligatorio').primeraLetraMayuscula()
    }),
  
    async onSubmit(values){    
      console.log(values)
    }
  });

  return (
    <div>
        <h3>Crear cine</h3>
      <div>
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
