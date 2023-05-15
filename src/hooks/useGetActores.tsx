import { useEffect, useState } from "react";
import { AxiosResponse} from 'axios';
import { IActores } from "../interface/IActores";
import { getActores } from "../services/actores";

export const useGetActores = (reacallCustomHook:boolean) => {

    const [actores, setActores] = useState<IActores[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [totalPaginas, setTotalPaginas] = useState<number>(0);
    const [pagina, setPagina] = useState<number>(1);
    const recordsPorPagina =2;

    useEffect(() => {
        getActores(pagina, recordsPorPagina).then((response: AxiosResponse<IActores[]>)=>{
        const totalRegistros = parseInt(response.headers['cantidadtotalregistros'],10);
        setActores(response.data);
        setTotalPaginas(Math.ceil(totalRegistros/recordsPorPagina));
        setLoading(false);
      })
    }, [pagina, recordsPorPagina,reacallCustomHook])

    return {actores,totalPaginas, loading, pagina, setPagina};

}
