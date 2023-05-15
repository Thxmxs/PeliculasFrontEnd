import { useEffect, useState } from "react";
import { IActores } from "../interface/IActores";
import { getActorByID } from "../services/actores";
import { AxiosResponse } from "axios";


export const useGetActorById = (id:number) => {
    const [loading, setLoading] = useState(true);
    const [actor, setActor] = useState<IActores>();


    useEffect(() => {
        getActorByID(id).then((response: AxiosResponse<IActores>)=>{
          setActor(response.data);
          setLoading(false);
        })
      }, [])
  
      return {actor,loading};
}
