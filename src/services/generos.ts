import axios, { AxiosResponse } from "axios"
import { apiURL } from "../helpers/endpoints";
import { IGeneroCreacion } from "../interface/IGeneros";


export const getGeneros = async () =>{
    const generoList = await axios.get(`${apiURL}/generos`);
    return generoList;
  }

  export const apiPostGenero = async (genero :IGeneroCreacion) =>{

        var response = await axios.post<AxiosResponse<IGeneroCreacion>>(`${apiURL}/generos`,genero);
        return response

  }
  