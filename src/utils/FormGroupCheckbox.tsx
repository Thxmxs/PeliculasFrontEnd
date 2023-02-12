import { Field } from 'formik'
import React from 'react'

export const FormGroupCheckbox : React.FC<formGroupCheckbox> = ({campo,label}) => {
  return (
    <div className='form-group form-check'>
        <Field className='form-check-input' id={campo} name={campo} type='checkbox'/>
        <label htmlFor={campo}>{label}</label>
    </div>
  )
}
interface formGroupCheckbox{
    label:string,
    campo:string
}
