import { Field, useFormikContext } from 'formik';
import React from 'react'
import './FormGroupMarkdown.css'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

export const FormGroupMarkdown : React.FC<formGroupMarkdownProps> = ({campo,label}) => {
  const {values} = useFormikContext<any>();
    return (
    <div className='form-group form-markdown'>
        <div>
            <label>{label}</label>
            <div>
                <Field name={campo} as="textarea" className="form-textarea"/>
            </div>
        </div>
        <div>
            <label>{label} (preview):</label>
            <div className='markdown-container'>
                <ReactMarkdown>{values[campo]}</ReactMarkdown>
            </div>
        </div>
    </div>
  )
}
interface formGroupMarkdownProps{
    campo:string,
    label:string
}
