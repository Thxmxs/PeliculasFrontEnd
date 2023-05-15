import axios, { AxiosResponse } from "axios"
import { apiURL } from "../helpers/endpoints";
import { IGeneroCreacion } from '../interface/IGeneros';


export const getGeneros = async (pagina :number, recordsPorPagina:number) =>{

      const generoList = await axios.get(`${apiURL}/generos`,{
            params:{
                  pagina,recordsPorPagina
            }
      });
      return generoList;
}

export const apiPostGenero = async (genero :IGeneroCreacion) =>{
      var response = await axios.post<AxiosResponse<IGeneroCreacion>>(`${apiURL}/generos`,genero);
      return response
}

export const getGeneroById = async(id:number) =>{
      var response = await axios.get(`${apiURL}/generos/${id}`);
      return response;
}

export const editGeneroById = async(genero:IGeneroCreacion,id:number)=>{
      const response = await axios.put(`${apiURL}/generos/${id}`,genero);
      return response;
}

export const borrarGeneroById = async(id:number) =>{
      const response = await axios.delete(`${apiURL}/generos/${id}`);
      return response;     
}

