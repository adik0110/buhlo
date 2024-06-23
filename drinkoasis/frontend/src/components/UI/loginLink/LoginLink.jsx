import React from 'react'
import cl from './LoginLink.module.css'

const LoginLink = (props) => {
  return (
    <a
      onClick={props.loginActive}
      className={props.className + ' ' + cl.loginLink}
    >
      Log in
    </a>
  )
}

export default LoginLink
