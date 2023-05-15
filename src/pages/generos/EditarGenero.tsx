import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from "react-router-dom";
import { useGetGeneroById } from "../../hooks/useGetGeneroById";
import { Cargando } from "../../components/shared/Cargando";
import { editGeneroById } from "../../services/generos";
import { useState } from 'react';


export const EditarGenero = () => {

  const {id} :any = useParams();
  const {genero,loading} = useGetGeneroById(id);
  const navigate = useNavigate();
  const [erorres, setErorres] = useState<string[] | undefined>(undefined);
  
  const formik = useFormik({
    initialValues:{
      'id':genero?.id ?? 0,
      'nombre':genero?.nombre ?? ""
    },
    enableReinitialize:true,
    validationSchema:Yup.object({
      nombre:Yup.string().required('El Nombre es obligatorio').primeraLetraMayuscula()
    }),
  
    async onSubmit(values){

      try {
        await editGeneroById({nombre:values.nombre},id);
        navigate('/generos');
      } catch (error :any) {
        setErorres(error);
      }

    }
  });
  console.log(erorres);

  if(loading){
    return <Cargando/>
  }


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
