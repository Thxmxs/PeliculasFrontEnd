import React from 'react'
import './selectorMultiple.css'

export const SelectorMultiple:React.FC<selectorMultipleProps> = ({noSeleccionados,seleccionados,onChange}) => {

    function seleccionar(item:selectorMultipleModel){
        const itemsSeleccionados = [...seleccionados,item];
        const itemsNoSeleccionados = noSeleccionados.filter(el =>el !==item)
        onChange(itemsSeleccionados,itemsNoSeleccionados);
    }

    function deseleccionar(item:selectorMultipleModel){
        const itemSeleccionados = seleccionados.filter(el => el!==item);
        const itemNoSeleccionados=[...noSeleccionados,item];
        onChange(itemSeleccionados,itemNoSeleccionados);
    }
    function seleccionarTodo(){
        const itemsSeleccionados =[...seleccionados,...noSeleccionados];
        const itemsNoSeleccionados :selectorMultipleModel[]=[];
        onChange(itemsSeleccionados,itemsNoSeleccionados);
    }
    function deseleccionarTodo(){
        const itemsNoSeleccionados=[...seleccionados,...noSeleccionados];
        const itemsSeleccionados:selectorMultipleModel[]=[];
        onChange(itemsSeleccionados,itemsNoSeleccionados)
    }

  return (
    <div className='selector-multiple'>
        <ul>
           {noSeleccionados.map(el=>
                <li onClick={()=>{seleccionar(el)}} key={el.llave}>{el.valor}</li>
            )} 
        </ul>
        <div className='selector-multiple-botones'>
            <button type='button' onClick={()=>{seleccionarTodo()}}>{'>>'}</button>
            <button type='button' onClick={()=>{deseleccionarTodo()}}>{'<<'}</button>
        </div>
        <ul>
           {seleccionados.map(el=>
                <li onClick={()=>{deseleccionar(el)}} key={el.llave}>{el.valor}</li>
            )} 
        </ul>
    </div>
  )
}
interface selectorMultipleProps{
    seleccionados:selectorMultipleModel[];
    noSeleccionados:selectorMultipleModel[]
    onChange(seleccionados:selectorMultipleModel[], noSeleccionados:selectorMultipleModel[]):void
}
export interface selectorMultipleModel{
    llave:number,
    valor:string
}