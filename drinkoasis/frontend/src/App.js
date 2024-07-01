import { useState, useEffect } from 'react'
import cl from './App.module.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import LoginModal from './components/loginModal/LoginModal'
import SignupModal from './components/signupModal/SignupModal'
import PopupAge from './components/popupAge/PopupAge'
function App() {
  // вот это переписать более логичным образом!!!!
  const [isLoginModal, setLoginModal] = useState(false)
  const [isSignupModal, setSignupModal] = useState(false)
  const [isPopupAge, setPopupAge] = useState(false)

  const loginActive = () => {
    setLoginModal(true)
  }

  const signupActive = () => {
    setSignupModal(true)
  }

  useEffect(() => {
    const timeout = setTimeout(() => setPopupAge(true), 3000)
    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    if (isLoginModal || isSignupModal || isPopupAge) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
    }
  }, [isLoginModal, isSignupModal, isPopupAge])

  return (
    <div className={cl.App}>
      <Header loginActive={loginActive} signupActive={signupActive}></Header>
      <h1>COntent</h1>
      <h1>COntent</h1>
      <h1>COntent</h1>
      <h1>COntent</h1>
      <h1>COntent</h1>
      <h1>COntent</h1>
      <h1>COntent</h1>
      <h1>COntent</h1>
      <h1>COntent</h1>
      <h1>COntent</h1>
      <h1>COntent</h1>
      <h1>COntent</h1>
      <h1>COntent</h1>
      <h1>COntent</h1>
      <h1>COntent</h1>
      <h1>COntent</h1>
      <LoginModal
        isVisible={isLoginModal}
        onClose={() => setLoginModal(false)}
      ></LoginModal>
      <SignupModal
        isVisible={isSignupModal}
        onClose={() => setSignupModal(false)}
      ></SignupModal>
      <Footer></Footer>
      <PopupAge
        isVisible={isPopupAge}
        onClose={() => setPopupAge(false)}
      ></PopupAge>
    </div>
  )
}

export default App
