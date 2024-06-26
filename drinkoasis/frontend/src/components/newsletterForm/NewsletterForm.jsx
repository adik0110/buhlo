import React from 'react'
import { useState } from 'react'
import Button from '../UI/button/Button'
import Input from '../UI/input/Input'
import cl from './NewsletterForm.module.css'

const NewsletterForm = () => {
  const [email, setEmail] = useState('')

  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  return (
    <form className={cl.newsletter}>
      <Input
        value={email}
        placeholder="Company (optional)"
        className={cl.newsletter__input}
        onChange={handleChangeEmail}
        type="email"
      ></Input>
      <Button>Go</Button>
    </form>
  )
}

export default NewsletterForm
