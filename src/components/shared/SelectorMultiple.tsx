import '../../assets/components/shared/selectorMultiple.scss';
export const SelectorMultiple:React.FC<ISelectorMultiple> = ({seleccionados,noSeleccionados,onChange}) => {

    const seleccionar = (item: selectorMultipleModel)=>{
        const ItemsSeleccionados = [...seleccionados,item];
        const ItemsNoSeleccionados = noSeleccionados.filter(valor => valor !== item)

        onChange(ItemsSeleccionados,ItemsNoSeleccionados);
    }

    const desSeleccionar = (item: selectorMultipleModel)=>{
        const ItemsSeleccionados = seleccionados.filter(valor => valor !== item)
        const ItemsNoSeleccionados = [...noSeleccionados,item];

        onChange(ItemsSeleccionados,ItemsNoSeleccionados);
    }

    const seleccionarTodo = () =>{
        const ItemsSeleccionados = [...seleccionados,...noSeleccionados];
        const ItemsNoSeleccionados :selectorMultipleModel[] = [];
        onChange(ItemsSeleccionados,ItemsNoSeleccionados);
    }
    const desSeleccionarTodo = () =>{
        const ItemsSeleccionados:selectorMultipleModel[] = [];
        const ItemsNoSeleccionados = [...seleccionados,...noSeleccionados];
        onChange(ItemsSeleccionados,ItemsNoSeleccionados);
    }


  return (
    <div className="selector-multiple">
        <ul>
            {
                noSeleccionados.map(item =>
                    <li key={item.llave+item.valor} onClick={()=> seleccionar(item)}>{item.valor}</li>    
                )
            }
        </ul>
        <div className="selector-multiple-botones">
            <button onClick={()=> seleccionarTodo()}>{'>>'}</button>
            <button onClick={()=> desSeleccionarTodo()}>{'<<'}</button>
        </div>
        <ul>
            {
                seleccionados.map(item =>
                    <li key={item.llave+item.valor} onClick={()=>desSeleccionar(item)}>{item.valor}</li>    
                )
            }
        </ul>
    </div>
  )
}

interface ISelectorMultiple{
    seleccionados: selectorMultipleModel[];
    noSeleccionados: selectorMultipleModel[];
    onChange(seleccionados:selectorMultipleModel[],noSeleccionados:selectorMultipleModel[]) : void
}

interface selectorMultipleModel{
    llave:number;
    valor:string;
}