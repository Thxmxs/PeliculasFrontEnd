import { useFormik } from 'formik';
import * as Yup from 'yup';
import { IGenero } from '../../interface/IGeneros';

export const FiltroPeliculas = () => {

  const formik = useFormik({
    initialValues:{
      'titulo':'',
      'generoId':0,
      'proximosEstrenos':false,
      'enCines':false
    },
    validationSchema:Yup.object({
      //nombre:Yup.string().required('El Nombre es obligatorio').primeraLetraMayuscula()
    }),
  
    async onSubmit(values){    
      console.log(values)
    }
  });

  const generos :IGenero[]=[{
    id:1,
    nombre:"Shonen"
  },
  {
    id:2,
    nombre:"Seinen"
  }
]


  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className='form-inline'>
          <div className='form-group mb-2'>
            <input className="form-control" type="text" placeholder='Titulo de la pelicula' name='titulo' value={formik.values.titulo} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
          </div>

          <div className='form-group mx-sm-3 mb-2'>
            <select className='form-control' name='generoId' value={formik.values.generoId} onChange={formik.handleChange} onBlur={formik.handleBlur}>
              <option value={0}>Seleccione un genero</option>
              {
                generos.map(el => <option key={el.id} value={el.id}>{el.nombre}</option> )
              }
            </select>
          </div>
          <div className='form-group mx-sm-3 mb-2'>
            <input className="form-check-input" type="checkbox" name='proximosEstrenos' checked={formik.values.proximosEstrenos} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            <label htmlFor='proximosEstrenos'>Proximos Estrenos</label>
          </div>

          <div className='form-check mx-sm-3 mb-2'>
            <input className="form-check-input" type="checkbox" name='enCines' checked={formik.values.enCines} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            <label className='form-check-label' htmlFor='enCines'>En cines</label>
          </div>

        </div>

            <button className="btn btn-primary" disabled={formik.isSubmitting} type='submit'>Filtrar</button>
            <a className='btn btn-secondary' onClick={() => formik.resetForm()}>Limpiar</a>
            
          </form>
    </div>
  )
}
