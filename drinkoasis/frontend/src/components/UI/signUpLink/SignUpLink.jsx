import React from 'react'
import cl from './SignUpLink.module.css'

const SignUpLink = ({ ...props }) => {
  return (
    <a
      className={cl.sugnUpLink + ' ' + props.className}
      onClick={props.signupActive}
    >
      Create account
    </a>
  )
}

export default SignUpLink
