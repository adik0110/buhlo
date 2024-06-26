import React, { useState } from 'react'
import cl from './SignupModal.module.css'
import signupImage from '../../images/signupImage.png'
import closeImage from '../../images/close.svg'
import SubmitButton from '../UI/submitButton/SubmitButton'
import Input from '../UI/input/Input'
import GoogleButton from '../UI/googleAuth/GoogleButton'
import LoginLink from '../UI/loginLink/LoginLink'

const SignupModal = ({ isVisible = false, onClose }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleChangeFirstName = (event) => {
    setFirstName(event.target.value)
  }

  const handleChangeLastName = (event) => {
    setLastName(event.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(firstName, lastName, email, password)
  }

  return !isVisible ? null : (
    <div className={cl.signupModal} onClick={onClose}>
      <div
        className={cl.signupModal__content}
        onClick={(e) => e.stopPropagation()}
      >
        <img alt="image" className={cl.signupModal__image} src={signupImage} />
        <div className={cl.signupModal__right}>
          <img
            className={cl.signupModal__closer}
            src={closeImage}
            onClick={onClose}
          ></img>
          <h3 className={cl.signupModal__title}>Create Account</h3>
          <p className={cl.signupModal__text}>
            Already have an account?{' '}
            <LoginLink className={cl.signupModal__login}>Sign in</LoginLink>
          </p>

          <GoogleButton>Sign up with Google</GoogleButton>

          <div className={cl.signupModal__or}>OR</div>

          <form className={cl.signupModal__form} onSubmit={handleSubmit}>
            <div className={cl.signupModal__group}>
              <Input
                onChange={handleChangeFirstName}
                placeholder="First Name"
                type="text"
                value={firstName}
                className={cl.signupModal__input_first}
              />
              <Input
                onChange={handleChangeLastName}
                placeholder="Last Name"
                type="text"
                value={lastName}
                className={cl.signupModal__input}
              />
            </div>

            <Input
              onChange={handleChangeEmail}
              placeholder="Email"
              type="email"
              value={email}
              className={cl.signupModal__input}
            />
            <Input
              onChange={handleChangePassword}
              placeholder="Password"
              type="password"
              value={password}
              className={cl.signupModal__input}
            />
            <a className={cl.signupModal__forgot}>Forgot Password?</a>
            <SubmitButton>Sign Up</SubmitButton>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignupModal
