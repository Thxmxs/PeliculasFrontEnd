import axios from "axios";
import { apiURL } from "../helpers/endpoints";

export const CrearActor = async(formDataActor:FormData)=>{
    const response = await axios({
        method:'post',
        url:`${apiURL}/actores`,
        data:formDataActor,
        headers:{'Content-Type':'multipart/form-data'}
    });
    return response
}

export const getActores = async (pagina :number, recordsPorPagina:number) =>{

    const actoresList = await axios.get(`${apiURL}/actores`,{
          params:{
                pagina,recordsPorPagina
          }
    });
    return actoresList;
}

export const borrarActorById = async(id:number) =>{
    const response = await axios.delete(`${apiURL}/actores/${id}`);
    return response;     
}
export const getActorByID = async(id:number) =>{
    var response = await axios.get(`${apiURL}/actores/${id}`);
    return response;
}

export const editActorById = async(actor:FormData,id:number)=>{
    //const response = await axios.put(`${apiURL}/actores/${id}`,actor);
    const response = await axios({
        method:'put',
        url:`${apiURL}/actores/${id}`,
        data:actor,
        headers:{'Content-Type':'multipart/form-data'}
    });
    return response
}