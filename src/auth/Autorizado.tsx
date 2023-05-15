import { useContext, useEffect, useState } from "react";
import { IAuthAutorizado } from "../interface/IAuth"
import { AuthContext } from "../context/AuthContext";

export const Autorizado :React.FC<IAuthAutorizado> = ({autorizado,noAutorizado,role}) => {
    const [estaAutorizado, setEstaAutorizado] = useState(false);
    const {claims} = useContext(AuthContext);

    useEffect(() => {
        if(role){
            const indice = claims.findIndex(claim =>claim.nombre === 'role' && claim.valor === role);
            setEstaAutorizado(indice > -1);
        }else{
            setEstaAutorizado(claims.length > 0)
        }
    }, [claims, role])
    

  return (
    <div>
        {estaAutorizado ? autorizado : noAutorizado}
    </div>
  )
}
