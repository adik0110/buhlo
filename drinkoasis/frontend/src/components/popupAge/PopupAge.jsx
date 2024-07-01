import React from 'react'
import Button from '../UI/button/Button'
import cl from './PopupAge.module.css'

const PopupAge = ({ isVisible = true, onClose }) => {
  return !isVisible ? null : (
    <div className={cl.popupAge}>
      <div className={cl.popupAge__content}>
        <h3 className={cl.popupAge__title}>Welcome to The Drink Oasis!</h3>
        <p className={cl.popupAge__text}>Please verify your age to continue</p>
        <div className={cl.popupAge__btns}>
          <Button className={cl.popupAge__btn_left}>I am under 21</Button>
          <Button onClick={onClose}>I am over 21</Button>
        </div>
      </div>
    </div>
  )
}
export default PopupAge
