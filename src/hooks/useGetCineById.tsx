
import { useEffect, useState } from 'react';
import { ICine } from '../interface/ICines';
import { getCineById } from '../services/cines';
import { AxiosResponse } from 'axios';

export const useGetCineById = (id:number) => {

    const [loading, setLoading] = useState(true);
    const [cine, setCine] = useState<ICine>();

    useEffect(() => {
      getCineById(id).then((response: AxiosResponse<ICine>)=>{
        setCine(response.data);
        setLoading(false);
      })
    }, [])

    return {cine,loading};
  
}
