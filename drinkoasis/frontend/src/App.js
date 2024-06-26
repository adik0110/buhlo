import { useState } from 'react'
import cl from './App.module.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import LoginModal from './components/loginModal/LoginModal'
import SignupModal from './components/signupModal/SignupModal'
function App() {
  // вот это переписать более логичным образом!!!!
  const [isLoginModal, setLoginModal] = useState(false)
  const [isSignupModal, setSignupModal] = useState(false)

  const loginActive = () => {
    setLoginModal(true)
  }

  const signupActive = () => {
    setSignupModal(true)
  }

  return (
    <div className={cl.App}>
      <Header loginActive={loginActive} signupActive={signupActive}></Header>
      <LoginModal
        isVisible={isLoginModal}
        onClose={() => setLoginModal(false)}
      ></LoginModal>
      <SignupModal
        isVisible={isSignupModal}
        onClose={() => setSignupModal(false)}
      ></SignupModal>
      <Footer></Footer>
    </div>
  )
}

export default App
