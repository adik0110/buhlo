import React from 'react'
import cl from './SubmitButton.module.css'

const SubmitButton = ({ children }) => {
  return (
    <button className={cl.submit} type="submit">
      {children}
    </button>
  )
}

export default SubmitButton
