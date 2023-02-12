import React, { ChangeEvent, useState } from 'react'
import { useFormikContext } from 'formik';

export const FormGroupImagen :React.FC<formGroupImagen> = ({campo,label,imagenURL}) => {
    
    const divStyle ={marginTop:'10px'};
    const imgStyle={width:'450px'}

    const [imagenbBase64, setImagenbBase64] = useState('');
    const [imagenURLstate, setImagenURLstate] = useState(imagenURL)
    const {values} = useFormikContext<any>();

    const ManejarOnChange=(e:ChangeEvent<HTMLInputElement>)=>{
        if(e.currentTarget.files){
            const archivo = e.currentTarget.files[0];
            archivoaBase64(archivo)
            .then((valor:string)=>setImagenbBase64(valor))
            .catch((error)=>console.log(error))

            values[campo] = archivo;
            setImagenURLstate('');
        }
    }

    const archivoaBase64=(file:File)=>{
        return new Promise<string>((resolve,reject)=>{
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload=()=>resolve(reader.result as string);
            reader.onerror=(error)=>reject(error);
        })
    }
  
    return (
    <div className='form-group'>
        <label>{label}</label>
        <div>
            <input type="file" accept='.jpg,.jpeg,.png'
            onChange={ManejarOnChange} />
        </div>
        {imagenbBase64 ? 
        <div>
            <div style={divStyle}>
                <img style={imgStyle} src={imagenbBase64} alt="imagenSeleccionada" />
            </div>
        </div>: null}

        {imagenURLstate ? 
        <div>
            <div style={divStyle}>
                <img style={imgStyle} src={imagenURL} alt="imagenSeleccionada" />
            </div>
        </div>: null}
    </div>
  )
}
interface formGroupImagen{
    campo:string;
    label:string;
    imagenURL?:string
}
FormGroupImagen.defaultProps={
    imagenURL:''
}
