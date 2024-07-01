// LoginModal.jsx
import React, { useState } from 'react'
import axios from 'axios'
import cl from './LoginModal.module.css'
import loginImage from '../../images/loginImage.png'
import closeImage from '../../images/close.svg'
import SignUpLink from '../UI/signUpLink/SignUpLink'
import SubmitButton from '../UI/submitButton/SubmitButton'
import Input from '../UI/input/Input'
import GoogleButton from '../UI/googleAuth/GoogleButton'

const LoginModal = ({ isVisible = false, onClose }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value)
  }

  const getCSRFToken = () => {
    const cookieValue = document.cookie
      .split('; ')
      .find((row) => row.startsWith('csrftoken='))
      ?.split('=')[1]
    return cookieValue || ''
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    try {
      const response = await axios.post(
        'http://localhost:8000/api/login/',
        {
          username: email,
          password,
        },
        {
          headers: {
            'X-CSRFToken': getCSRFToken(),
          },
          withCredentials: true,
        }
      )

      if (response.status === 200) {
        alert('Logged in successfully')
        onClose()
      }
    } catch (error) {
      setError('Invalid email or password')
    } finally {
      setIsLoading(false)
    }
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
            {error && <div className={cl.loginModal__error}>{error}</div>}
            <a className={cl.loginModal__forgot}>Forgot Password?</a>
            <SubmitButton disabled={isLoading}>
              {isLoading ? 'Signing in...' : 'Sign in'}
            </SubmitButton>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginModal
