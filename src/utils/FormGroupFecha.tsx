import { useFormikContext } from 'formik'
import React from 'react'

export const FormGroupFecha : React.FC<formGroupFechaProps> = ({campo,label}) => {
    const {values, validateForm, touched,errors} = useFormikContext<any>();
    return (
    <div className='form-group'>
        <label htmlFor={campo}>{label}</label>+
        <input type="date" className='form-control'
        id={campo}
        name={campo}
        defaultValue={values[campo]?.toLocaleDateString('en-CA')}
        onChange={e=>{
            const fecha = new Date(e.currentTarget.value +'T00:00:00');
            values[campo] = fecha;
            validateForm();
        }}>

        </input>
        {touched[campo] && errors[campo] ?
        <div>{errors[campo]?.toString()}</div> :
        null}
    </div>
  )
}

interface formGroupFechaProps{
    campo:string,
    label:string
}
