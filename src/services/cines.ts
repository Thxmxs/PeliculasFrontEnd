import axios, { AxiosResponse } from "axios";
import { ICreacionCine } from "../interface/ICines";
import { apiURL } from "../helpers/endpoints";

export const apiPostCine = async (cine :ICreacionCine) =>{
    var response = await axios.post<AxiosResponse<ICreacionCine>>(`${apiURL}/cines`,cine);
    return response
}

export const getCines = async (pagina :number, recordsPorPagina:number) =>{

    const cinesList = await axios.get(`${apiURL}/cines`,{
          params:{
                pagina,recordsPorPagina
          }
    });
    return cinesList;
}

export const borrarCineById = async(id:number) =>{
    const response = await axios.delete(`${apiURL}/cines/${id}`);
    return response;     
}
export const getCineById = async(id:number) =>{
    var response = await axios.get(`${apiURL}/cines/${id}`);
    return response;
}

export const editCineById = async(cine:ICreacionCine,id:number)=>{
    const response = await axios.put(`${apiURL}/cines/${id}`,cine);
    return response;
}