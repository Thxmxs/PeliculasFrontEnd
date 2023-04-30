import { useFormik } from "formik"
import { ICreacionPelicula } from "../../interface/IPeliculas";
import * as Yup from 'yup';
import { Link } from "react-router-dom";
import { useState } from "react";
import { SelectorMultiple } from "../../components/shared/SelectorMultiple";
import { IGenero } from "../../interface/IGeneros";
import { ICine } from "../../interface/ICines";
import { TypeAheadActores } from "../../components/actores/TypeAheadActores";
import { IActores } from "../../interface/IActores";

export const CrearPeliculas = () => {

  const [imagenBase64, setImagenBase64] = useState<any>();
  let dataGeneros:IGenero[]=[{
    id:1,
    nombre:"TEST"
  },
{
  id:2,
  nombre:"XD"
}]

let dataCines:ICine[]=[{
id:1,
nombre:"Cinemex"
},{
  id:2,
  nombre:"XD"
}];
  const onHandleChangeFile=(e:React.ChangeEvent<HTMLInputElement>)=>{

    if (e.currentTarget.files && e.currentTarget.files.length > 0) {
      formik.setFieldValue("poster", e.currentTarget.files[0]);
      aBase64(e.currentTarget.files[0]).then((el) => setImagenBase64(el));
    } else {
      formik.setFieldValue("poster", '');
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

  const formik = useFormik<ICreacionPelicula>({
    initialValues:{
      titulo:'',
      enCines:false,
      trailer:'',
      fechaLanzamiento:'',
      poster:undefined,
      posterUrl:undefined,
      generosNoSeleccionados:dataGeneros,
      generosSeleccionados:[],
      cinesNoSeleccionados:dataCines,
      cinesSeleccionados:[],
      actoresSeleccionados:[]

    },
    validationSchema:Yup.object({
      titulo:Yup.string().required('El titulo es obligatorio').primeraLetraMayuscula()
    }),
    async onSubmit(values){
      console.log(values)
    }
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
            <label style={{color:formik.errors.titulo && formik.touched.titulo ? 'red' :'black'}} htmlFor="titulo">{formik.errors.titulo && formik.touched.titulo ? formik.errors.titulo : 'Titulo'}</label>
            <input className="form-control" type="text" placeholder='Ingresa el titulo' name='titulo' value={formik.values.titulo} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        </div>
        <div className='form-group mx-sm-3 mb-2'>
            <input className="form-check-input" type="checkbox" name='enCines' checked={formik.values.enCines} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            <label htmlFor='enCines'>En Cines?</label>
        </div>
        <div className="form-group">
            <label style={{color:formik.errors.trailer && formik.touched.trailer ? 'red' :'black'}} htmlFor="trailer">{formik.errors.trailer && formik.touched.trailer ? formik.errors.trailer : 'Trailer'}</label>
            <input className="form-control" type="text" placeholder='Ingresa el trailer' name='trailer' value={formik.values.trailer} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        </div>
        <div className='form-group'>
            <label style={{color:formik.errors.fechaLanzamiento && formik.touched.fechaLanzamiento ? 'red' :'black'}} htmlFor="fechaLanzamiento">{formik.errors.fechaLanzamiento && formik.touched.fechaLanzamiento ? formik.errors.fechaLanzamiento : 'Fecha Lanzamiento'}</label>
            <input type='date' className='form-control' name='fechaLanzamiento' onChange={formik.handleChange} value={formik.values.fechaLanzamiento.toString()}/>
        </div>
        <div className='form-group'>
            <input type='file' accept='.jgp,.jpeg,.png' name='poster' onChange={(e)=>onHandleChangeFile(e)} />
            {
              imagenBase64 ?
              <div style={{marginTop:'10px'}}>
                <img style={{width:'450px'}} src={imagenBase64} alt="img" />
              </div> : null
            }
            {
              formik.values.posterUrl ?
              <div style={{marginTop:'10px'}}>
                <img style={{width:'450px'}} src={formik.values.posterUrl} alt="img" />
              </div> : null
            }
        </div>
        <div className="form-group">
          <label>Generos:</label>
          <SelectorMultiple 
          seleccionados={formik.values.generosSeleccionados.map(val=>{return {llave:val.id,valor:val.nombre}})}
          noSeleccionados={formik.values.generosNoSeleccionados.map(val=>{return {llave:val.id,valor:val.nombre}})}
          onChange={(se,no)=>{

            formik.setFieldValue('generosSeleccionados',se.map((val)=>{
              return {id:val.llave,nombre:val.valor}
            }));
            formik.setFieldValue('generosNoSeleccionados',no.map((val)=>{
              return {id:val.llave,nombre:val.valor}
            }));
          }}/>
        </div>

        <div className="form-group">
          <label>Cines:</label>
          <SelectorMultiple 
          seleccionados={formik.values.cinesSeleccionados.map(val=>{return {llave:val.id,valor:val.nombre}})}
          noSeleccionados={formik.values.cinesNoSeleccionados.map(val=>{return {llave:val.id,valor:val.nombre}})}
          onChange={(se,no)=>{

            formik.setFieldValue('cinesSeleccionados',se.map((val)=>{
              return {id:val.llave,nombre:val.valor}
            }));
            formik.setFieldValue('cinesNoSeleccionados',no.map((val)=>{
              return {id:val.llave,nombre:val.valor}
            }));
          }}/>
        </div>
        <div className="form-group">
          <TypeAheadActores actores={formik.values.actoresSeleccionados} onChangePadre={(actores:IActores[])=>formik.setFieldValue('actoresSeleccionados',actores)}
          listadoUI={(actor:IActores) =>(
            <>
              {actor.nombre} / <input placeholder="Personaje" type="text" value={actor.personaje} 
              onChange={e=>{
                const indice = formik.values.actoresSeleccionados.findIndex(x =>  x.id === actor.id);

                const actores = [...formik.values.actoresSeleccionados];
                actores[indice].personaje = e.currentTarget.value;

                formik.setFieldValue('actoresSeleccionados',actores);
              }}/>
            </>
          )}
          />

        </div>

            <button className="btn btn-primary" disabled={formik.isSubmitting} type='submit'>Ingresar</button>
            <Link to={"/"} className="btn btn-secondary">Cancelar</Link>
          </form>
    </div>
  )
}
