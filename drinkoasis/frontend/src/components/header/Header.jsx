import React from 'react'
import Burger from '../UI/burger/Burger'
import LoginLink from '../UI/loginLink/LoginLink'
import SignUpLink from '../UI/signUpLink/SignUpLink'
import cl from './Header.module.css'

const Header = ({ ...props }) => {
  return (
    <div className={cl.header}>
      <div className={cl.header__inner}>
        <Burger></Burger>
        <h1>DrinkOasis</h1>
        <div className={cl.info}>
          <LoginLink
            loginActive={props.loginActive}
            className={cl.login__link}
          ></LoginLink>
          <SignUpLink></SignUpLink>
          <div className={cl.search}></div>
          <div className={cl.cart}></div>
        </div>
      </div>
    </div>
  )
}

export default Header
