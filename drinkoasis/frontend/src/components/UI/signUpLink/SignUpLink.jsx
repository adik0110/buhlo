import React from 'react'
import cl from './SignUpLink.module.css'

const SignUpLink = ({ ...props }) => {
  return <a className={cl.sugnUpLink + ' ' + props.className}>Create account</a>
}

export default SignUpLink
