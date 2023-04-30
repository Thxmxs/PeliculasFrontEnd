import {  Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { IEdicionActor } from '../../interface/IActores';

export const EditarActores = () => {
  //const {id} :any = useParams();

    //const navigate = useNavigate();
    const [imagenBase64, setImagenBase64] = useState<any>();

    const formik = useFormik<IEdicionActor>({
      initialValues:{
        'nombre':'Tokyo Ghoul',
        'fechaNacimiento': '',
        'file':undefined,
        'fotoUrl':'https://otakuteca.com/images/books/cover/5d07c1d52967b.jpg',
        'biografia':'# Thomas Cubillos'
      },
      validationSchema:Yup.object({
        nombre:Yup.string().required('El Nombre es obligatorio').primeraLetraMayuscula(),
        fechaNacimiento:Yup.date().nullable().required('La fecha de nacimiento es obligatoria')
      }),
    
      async onSubmit(values){    
        console.log(values)
      }
    });
    
    const onHandleChangeFile=(e:React.ChangeEvent<HTMLInputElement>)=>{

      if (e.currentTarget.files && e.currentTarget.files.length > 0) {
        formik.setFieldValue("file", e.currentTarget.files[0]);
        aBase64(e.currentTarget.files[0]).then((el) => setImagenBase64(el));
        formik.setFieldValue('fotoUrl',undefined);
      } else {
        formik.setFieldValue("file", '');
      }
    }
    const aBase64 =(file:File)=>{
      return new Promise((resolve,reject)=>{
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (err) => reject(err)
      })
    }
  
    return (
      <div>
        <h3>Crear Actores</h3>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
              <label style={{color:formik.errors.nombre && formik.touched.nombre ? 'red' :'black'}} htmlFor="nombre">{formik.errors.nombre && formik.touched.nombre ? formik.errors.nombre : 'Nombre'}</label>
              <input className="form-control" type="text" placeholder='Ingresa tu nombre' name='nombre' value={formik.values.nombre} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
          </div>
          <div className='form-group'>
            <label style={{color:formik.errors.fechaNacimiento && formik.touched.fechaNacimiento ? 'red' :'black'}} htmlFor="fechaNacimiento">{formik.errors.fechaNacimiento && formik.touched.fechaNacimiento ? formik.errors.fechaNacimiento : 'Fecha Nacimiento'}</label>
            <input type='date' className='form-control' name='fechaNacimiento' onChange={formik.handleChange} value={formik.values.fechaNacimiento.toString()}/>
          </div>

          <div className='form-group'>
            <input type='file' accept='.jgp,.jpeg,.png' name='file' onChange={(e)=>onHandleChangeFile(e)} />
            {
              imagenBase64 ?
              <div style={{marginTop:'10px'}}>
                <img style={{width:'450px'}} src={imagenBase64} alt="img" />
              </div> : null
            }
            {
              formik.values.fotoUrl ?
              <div style={{marginTop:'10px'}}>
                <img style={{width:'450px'}} src={formik.values.fotoUrl} alt="img" />
              </div> : null
            }
          </div>
          <div className='form-group form-markdown'>
            <div>
              <label style={{color:formik.errors.fechaNacimiento && formik.touched.fechaNacimiento ? 'red' :'black'}} htmlFor="biografia">{formik.errors.biografia && formik.touched.biografia ? formik.errors.biografia : 'Biografia'}</label>
              <div>
                <textarea className="form-textarea" name='biografia' value={formik.values.biografia} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
              </div>
            </div>
            <div>
              <label style={{color:formik.errors.biografia && formik.touched.biografia ? 'red' :'black'}} htmlFor="biografia">{formik.errors.biografia && formik.touched.biografia ? formik.errors.biografia : 'Biografia (Preview)'}</label>
              <div className='markdown-container'>
                <ReactMarkdown>{formik.values.biografia}</ReactMarkdown>
              </div>
            </div>
          </div>
          

              <button className="btn btn-primary" disabled={formik.isSubmitting} type='submit'>Ingresar</button>
              <Link to={"/actores"} className="btn btn-secondary">Cancelar</Link>
            </form>
      </div>
    )
}
