  
import React from 'react';
import style from './FormsControls.module.css';

export const Textarea = ({input, meta, ...props}) => {
  let hasError = meta.touched && meta.error;
  return (
    <div className = {style.formsControls + ' ' + (hasError ?  style.error : '')}>
      <div className = {style.textarea}>
      <textarea {...input} {...props}></textarea>
      </div>
      <div className = {style.text}>
        {hasError ? <span>{'some error'}</span> : ''}
      </div>
    </div>
  )
}