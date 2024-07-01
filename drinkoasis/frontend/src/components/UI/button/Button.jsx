import React from 'react'
import cl from './Button.module.css'

const Button = ({ ...props }) => {
  return (
    <button
      className={cl.button + ' ' + props.className}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default Button
