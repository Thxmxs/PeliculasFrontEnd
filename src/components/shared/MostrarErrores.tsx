import { IMostrarErroresProps } from "../../interface/IShared"


export const MostrarErrores : React.FC<IMostrarErroresProps> = ({errores}) => {
  return (
    <div>
        {
            errores ? 
            <ul>
                {
                    errores.map((error,indice) =>{
                        return <li className="text-danger" key={indice}>{error}</li>
                    })
                }
            </ul> :
            null
        }
    </div>
  )
}
