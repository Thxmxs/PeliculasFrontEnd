import { useEffect, useState } from "react";
import { IGenero } from "../interface/IGeneros";
import { getGeneros } from "../services/generos";
import { AxiosResponse} from 'axios';

export const useGetGeneros = (reacallCustomHook:boolean) => {

    const [generos, setGeneros] = useState<IGenero[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [totalPaginas, setTotalPaginas] = useState<number>(0);
    const [pagina, setPagina] = useState<number>(1);
    const recordsPorPagina =2;

    useEffect(() => {
      getGeneros(pagina, recordsPorPagina).then((response: AxiosResponse<IGenero[]>)=>{
        const totalRegistros = parseInt(response.headers['cantidadtotalregistros'],10);
        setGeneros(response.data);
        setTotalPaginas(Math.ceil(totalRegistros/recordsPorPagina));
        setLoading(false);
      })
    }, [pagina, recordsPorPagina,reacallCustomHook])

    return {generos,totalPaginas, loading, pagina, setPagina};

}
