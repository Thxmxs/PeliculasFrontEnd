import { useEffect, useState } from "react";
import { IGenero } from "../interface/IGeneros";
import { getGeneros } from "../services/generos";
import { AxiosResponse} from 'axios';

export const useGetGeneros = () => {

    const [generos, setGeneros] = useState<IGenero[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
      getGeneros().then((response: AxiosResponse<IGenero[]>)=>{
        setGeneros(response.data);
        setLoading(false);
      })
    }, [])

    return {generos,loading};

}
