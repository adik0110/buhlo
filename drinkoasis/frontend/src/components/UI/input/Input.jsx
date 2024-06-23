import React from 'react'
import cl from './Input.module.css'

const Input = ({ ...props }) => {
  return (
    <label className={cl.input__container + ' ' + props.className}>
      <input
        onChange={props.onChange}
        value={props.value}
        type={props.type || 'text'}
        className={cl.input}
      ></input>
      <p className={cl.input__placeholder}>{props.placeholder}</p>
    </label>
  )
}

export default Input
