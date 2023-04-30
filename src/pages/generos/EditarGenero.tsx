import { useParams } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from "react-router-dom";

export const EditarGenero = () => {
  const {id} :any = useParams();
  console.log(id)
  const formik = useFormik({
    initialValues:{
      'nombre':'Shoujo'
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
