import { ICreacionActor } from "../interface/IActores"

export const convertirActorAFormData=(actor :ICreacionActor) :FormData =>{
    const formData = new FormData();

    formData.append('nombre',actor.nombre);
    if(actor.biografia){
        formData.append('biografia',actor.biografia);
    }
    if(actor.fechaNacimiento){
        formData.append('fechaNacimiento',formatearFecha(actor.fechaNacimiento));
    }
    if(actor.file){
        formData.append("foto",actor.file)
    }

    return formData;
}

const formatearFecha=(date:any)=>{
    date = new Date(date);
    const formato = new Intl.DateTimeFormat("en",{
        year:'numeric',
        month:'2-digit',
        day:'2-digit'
    });

    const[
        {value:month},,
        {value:day},,
        {value:year}
    ] = formato.formatToParts(date);

    return `${year}-${month}-${day}`
}