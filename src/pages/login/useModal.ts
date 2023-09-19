import { useState } from 'react'
import { LoginModalState } from './types'

export function useModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [modalState, setModalState] = useState<LoginModalState>('loading')
  const [errorMsg, setErrorMsg] = useState<string>()

  function handleCloseModal() {
    setIsOpen(false)
  }
  function openModal() {
    setIsOpen(true)
  }
  function changeModalState(state: LoginModalState) {
    setModalState(state)
  }
  function setModalErrorMsg(text: string) {
    setErrorMsg(text)
  }

  return {
    isOpen,
    errorMsg,
    modalState,
    handleCloseModal,
    changeModalState,
    openModal,
    setModalErrorMsg,
  }
}
