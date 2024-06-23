import React from 'react'
import googleImage from '../../../images/google_icon.svg'
import cl from './GoogleButton.module.css'

const GoogleButton = ({ children }) => {
  return (
    <a className={cl.google}>
      <img src={googleImage} className={cl.google__image}></img>
      {children}
    </a>
  )
}

export default GoogleButton
