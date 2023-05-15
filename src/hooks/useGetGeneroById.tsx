import { useEffect, useState } from "react";
import { IGenero } from "../interface/IGeneros";
import { getGeneroById } from "../services/generos";
import { AxiosResponse} from 'axios';

export const useGetGeneroById = (id:number) => {
    const [loading, setLoading] = useState(true);
    const [genero, setGenero] = useState<IGenero>();

    useEffect(() => {
      getGeneroById(id).then((response: AxiosResponse<IGenero>)=>{
        setGenero(response.data);
        setLoading(false);
      })
    }, [])

    return {genero,loading};

}
