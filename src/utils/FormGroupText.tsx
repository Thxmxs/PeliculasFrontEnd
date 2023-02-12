import React from 'react'
import { Formik, Form ,Field,ErrorMessage} from 'formik';

export const FormGroupText :React.FC<IFormGroupTextProps> = ({campo,label,placeholder}) => {
  return (
    <div className='form-group'>
        {label ? <label htmlFor={campo}>{label}</label> : null}
        <Field name={campo} className="form-control" 
        placeholder={placeholder}/>
        <ErrorMessage name={campo}>{mensaje =>
        <div className='text-danger'>{mensaje}</div>
        }</ErrorMessage>
    </div>
  )
}

interface IFormGroupTextProps{
    campo:string,
    label?:string,
    placeholder?:string
}
