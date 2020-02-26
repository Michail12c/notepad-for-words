  
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

export const Textarea2 = ({input, meta, ...props}) => {
  let hasError = meta.touched && meta.error;
  return (
    <div className = {style.formsControls + ' ' + (hasError ?  style.error : '')}>
      <div className = {style.textarea}>
      <textarea className = {style.textarea2} {...input} {...props}></textarea>
      </div>
      <div className = {style.text}>
        {hasError ? <span>{'some error'}</span> : ''}
      </div>
    </div>
  )
}

export const Input = ({input, meta, ...props}) => {
  let hasError = meta.touched && meta.error;
  return (
    <div className = {style.formsControls + ' ' + (hasError ?  style.error : '')}>
      <div className = {style.textarea}>
      <input {...input} {...props}></input>
      </div>
      <div className = {style.text}>
        {hasError ? <span>{'some error'}</span> : ''}
      </div>
    </div>
  )
}


export const Input2= ({input, meta, ...props}) => {
  let hasError = meta.touched && meta.error;
  return (
    <div className = {style.formsControls + ' ' + (hasError ?  style.error : '')}>
      <div >
      <input className = {style.input2} {...input} {...props}></input>
      </div>
      <div className = {style.text}>
        {hasError ? <span>{'some error'}</span> : ''}
      </div>
    </div>
  )
}
export const Input3 = ({input, meta, ...props}) => {
  let hasError = meta.touched && meta.error;
  return (
    <div className = {style.formsControls + ' ' + (hasError ?  style.error : '')}>
      <div >
      <input className = {style.addWords} {...input} {...props}></input>
      </div>
      <div className = {style.text}>
        {hasError ? <span>{'some error'}</span> : ''}
      </div>
    </div>
  )
}

