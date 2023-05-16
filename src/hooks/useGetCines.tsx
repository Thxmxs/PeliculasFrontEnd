import { useEffect, useState } from "react";
import { IGenero } from "../interface/IGeneros";
import { AxiosResponse} from 'axios';
import { getCines } from "../services/cines";
import { ICine } from "../interface/ICines";

export const useGetCines = (reacallCustomHook:boolean) => {

    const [cines, setCines] = useState<IGenero[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [totalPaginas, setTotalPaginas] = useState<number>(0);
    const [pagina, setPagina] = useState<number>(1);
    const recordsPorPagina =10;

    useEffect(() => {
      getCines(pagina, recordsPorPagina).then((response: AxiosResponse<ICine[]>)=>{
        const totalRegistros = parseInt(response.headers['cantidadtotalregistros'],10);
        setCines(response.data);
        setTotalPaginas(Math.ceil(totalRegistros/recordsPorPagina));
        setLoading(false);
      })
    }, [pagina, recordsPorPagina,reacallCustomHook])

    return {cines,totalPaginas, loading, pagina, setPagina};

}
