import React from 'react'
import { IActores, ITypeAheadActores } from '../../interface/IActores';
import { Typeahead } from 'react-bootstrap-typeahead'
import { useState } from 'react';

export const TypeAheadActores : React.FC<ITypeAheadActores> = ({onChangePadre,actores,listadoUI}) => {

    const [elementoArrastrado, setElementoArrastrado] = useState<IActores | undefined>(undefined);

    let opcionesActor :IActores[]=[{
        id:1,
        foto:'https://www.latercera.com/resizer/Yh6IPYzhGmsNT3yAOw1Y7VnHQyA=/arc-anglerfish-arc2-prod-copesa/public/VLIY2K7RARHTZPWKV6XCAI6RDE.jpg',
        nombre:'tom holland',
        personaje:'spiderman'
    },
    {
        id:2,
        foto:'https://www.latercera.com/resizer/Yh6IPYzhGmsNT3yAOw1Y7VnHQyA=/arc-anglerfish-arc2-prod-copesa/public/VLIY2K7RARHTZPWKV6XCAI6RDE.jpg',
        nombre:'tom holland 2',
        personaje:'spiderman 2'
    }];

    const handleDragStart = (actor :IActores) =>{
        setElementoArrastrado(actor);
    }
    const handleDragOver = (actor :IActores) =>{
        if(!elementoArrastrado){
            return;
        }
        if(actor.id !== elementoArrastrado.id){
            const elementoArrastradoIndice = actores.findIndex(x => x.id === elementoArrastrado.id);
            const actorIndice = actores.findIndex(x => x.id === actor.id);

            const actoresAux = [...actores];
            actoresAux[actorIndice] = elementoArrastrado;
            actoresAux[elementoArrastradoIndice] = actor;

            onChangePadre(actoresAux);
        }
    }
  return (
    <div>
        <label>Actores</label>
        <Typeahead
            id="typeahead"
            onChange={actoresType =>{
                if(actores.findIndex(x => x.id === actoresType[0].id) ===-1 && actoresType[0].nombre){
                    onChangePadre([...actores,actoresType[0]])
                }
            }}
            options={opcionesActor}
            labelKey={actor => actor.nombre}
            filterBy={['nombre']}
            placeholder='Buscar actor'
            minLength={2}
            flip={true}
            selected={[]}
            renderMenuItemChildren={actor => (
                <>
                    <img alt="img-actor" src={actor.foto} style={{height:'64px', marginRight:'10px', width:'100px'}}/>
                    <span>{actor.nombre}</span>
                </>
            )}
        />
        <ul className='list-group'>
                {
                    actores.map(actor => (
                    <li className='list-group-item list-group-item-action' key={actor.id} draggable={'true'}
                    onDragStart={()=>handleDragStart(actor)}
                    onDragOver={()=>handleDragOver(actor)}
                    >
                        {listadoUI(actor)}
                        <span className='badge badge-primary badge-pill' style={{marginLeft:'0.5rem',cursor:'pointer'}} 
                        onClick={()=>{
                            const ArraySinActor = actores.filter(x=> x.id !== actor.id);
                            onChangePadre(ArraySinActor);
                        }}>X</span>
                    </li>))
                }
        </ul>
    </div>
  )
}
