import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import LoginModal from './components/loginModal/LoginModal'
function App() {
  const [isModal, setModal] = useState(false)

  const loginActive = () => {
    setModal(true)
  }

  return (
    <div className="App">
      <Header loginActive={loginActive}></Header>
      <LoginModal
        isVisible={isModal}
        onClose={() => setModal(false)}
      ></LoginModal>
    </div>
  )
}

export default App
