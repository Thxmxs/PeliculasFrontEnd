import React from 'react'
import { Form, Formik, FormikHelpers } from 'formik';
import { peliculaCreacionDTO } from './pelicula.model';
import * as Yup from 'yup';
import { FormGroupText } from '../utils/FormGroupText';
import { FormGroupCheckbox } from '../utils/FormGroupCheckbox';
import { FormGroupFecha } from '../utils/FormGroupFecha';
import { FormGroupImagen } from '../utils/FormGroupImagen';
import { Button } from '../utils/Button';
import { Link } from 'react-router-dom';
import { SelectorMultiple, selectorMultipleModel } from '../utils/SelectorMultiple';
import { generoDTO } from '../generos/generos';
import { useState } from 'react';
import { cineDTO } from '../cines/cines';
import { TypeAheadActores } from '../actores/TypeAheadActores';
import { actorPeliculaDTO } from '../actores/actores';

export const FormularioPeliculas : React.FC<formularioPeliculasProps> = ({modelo,onSubmit,generosNoSeleccionados,generosSeleccionados,cinesSeleccionados,cinesNoSeleccionados,actoresSeleccionados}) => {

    const [itemGenerosSeleccionados, setItemGenerosSeleccionados] = useState(mapear(generosSeleccionados));
    const [itemGenerosNoSeleccionados, setItemGenerosNoSeleccionados] = useState(mapear(generosNoSeleccionados));
    
    const [itemCinesSeleccionados, setItemCinesSeleccionados] = useState(mapear(cinesSeleccionados));
    const [itemCinesNoSeleccionados, setItemCinesNoSeleccionados] = useState(mapear(cinesNoSeleccionados));

    const [itemActoresSeleccionados, setItemActoresSeleccionados] = useState<actorPeliculaDTO[]>(actoresSeleccionados);

    function mapear(arreglo:{id:number,nombre:string}[]):selectorMultipleModel[]{
        return arreglo.map(el=>{
            return {llave:el.id,valor:el.nombre}
        })
    }

    

  return (
    <Formik
        initialValues={modelo}
        onSubmit={(valores,acciones)=>{
            valores.generosIds = itemGenerosSeleccionados.map(el =>el.llave)
            valores.cinesIds=itemCinesSeleccionados.map(el=>el.llave)
            valores.actores=itemActoresSeleccionados
            onSubmit(valores,acciones);
        }}
        validationSchema={Yup.object({
            titulo:Yup.string().required('este campo es requerido')
        })}
    >
        {formikProps=>(
            <Form>
                <FormGroupText label='titulo' campo='titulo'/>
                <FormGroupCheckbox label='en cines' campo='enCines'/>
                <FormGroupText label='Trailer' campo='trailer'/>
                <FormGroupFecha campo='fechaLanzamiento' label='Fecha Lanzamiento'/>
                <FormGroupImagen campo='poster' label='Poster' imagenURL={modelo.posterURL}/>
                <div className='form-group'>
                    <label>Generos</label>
                    <SelectorMultiple seleccionados={itemGenerosSeleccionados} noSeleccionados={itemGenerosNoSeleccionados} onChange={(generosSeleccionados,generosNoSeleccionados)=>{
                        setItemGenerosNoSeleccionados(generosNoSeleccionados);
                        setItemGenerosSeleccionados(generosSeleccionados)
                    }}/>
                </div>

                <div className='form-group'>
                    <label>Cines:</label>
                    <SelectorMultiple seleccionados={itemCinesSeleccionados} noSeleccionados={itemCinesNoSeleccionados} onChange={(seleccionados,noSeleccionados)=>{
                        setItemCinesNoSeleccionados(noSeleccionados);
                        setItemCinesSeleccionados(seleccionados)
                    }}/>
                </div>
                <div className='form-group'>
                    <TypeAheadActores onAdd={actores=>{
                        setItemActoresSeleccionados(actores)
                    }} 
                    onRemove={actor=>{
                        const actores=itemActoresSeleccionados.filter(x=>x !== actor);
                        setItemActoresSeleccionados(actores);
                    }}
                    actores={itemActoresSeleccionados}
                    listadoUI={(actor:actorPeliculaDTO)=>
                    <>
                        {actor.nombre} / <input placeholder='Personaje' type='text' value={actor.personaje}
                        onChange={e =>{
                            const indice = itemActoresSeleccionados.findIndex(x=>x.id===actor.id);
                            const actores = [...itemActoresSeleccionados];
                            actores[indice].personaje = e.currentTarget.value;
                            setItemActoresSeleccionados(actores)
                        }}
                        />
                    </>}
                    />
                </div>
                <Button disabled={formikProps.isSubmitting} type='submit'>Enviar</Button>
                <Link className='btn btn-secondary' to='/'>Cancelar</Link>
            </Form>
        )}
    </Formik>
  )
}

interface formularioPeliculasProps{
    modelo:peliculaCreacionDTO;
    onSubmit(valores: peliculaCreacionDTO, acciones:FormikHelpers<peliculaCreacionDTO>):void,
    generosSeleccionados:generoDTO[];
    generosNoSeleccionados:generoDTO[];
    cinesSeleccionados:cineDTO[];
    cinesNoSeleccionados:cineDTO[];
    actoresSeleccionados:actorPeliculaDTO[];
}