import React from 'react'
import cl from './LoginModal.module.css'
import loginImage from '../../images/loginImage.png'
import closeImage from '../../images/close.svg'
import SignUpLink from '../UI/signUpLink/SignUpLink'
import SubmitButton from '../UI/submitButton/SubmitButton'
import Input from '../UI/input/Input'
import { useState } from 'react'
import GoogleButton from '../UI/googleAuth/GoogleButton'

const LoginModal = ({ isVisible = false, onClose }) => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password)
  }

  return !isVisible ? null : (
    <div className={cl.loginModal} onClick={onClose}>
      <div
        className={cl.loginModal__content}
        onClick={(e) => e.stopPropagation()}
      >
        <img alt="image" className={cl.loginModal__image} src={loginImage} />
        <div className={cl.loginModal__right}>
          <img
            className={cl.loginModal__closer}
            src={closeImage}
            onClick={onClose}
          ></img>
          <h3 className={cl.loginModal__title}>Sign In</h3>
          <p className={cl.loginModal__text}>
            Don't have an account yet?{' '}
            <SignUpLink className={cl.loginModal__signUp}>
              Sign up here
            </SignUpLink>
          </p>

          <GoogleButton>Sign in with Google</GoogleButton>

          <div className={cl.loginModal__or}>OR</div>

          <form className={cl.loginModal__form} onSubmit={handleSubmit}>
            <Input
              onChange={handleChangeEmail}
              placeholder="Email"
              type="email"
              value={email}
              className={cl.loginModal__input}
            />
            <Input
              onChange={handleChangePassword}
              placeholder="Password"
              type="password"
              value={password}
              className={cl.loginModal__input}
            />
            <a className={cl.loginModal__forgot}>Forgot Password?</a>
            <SubmitButton>Sign in</SubmitButton>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginModal
