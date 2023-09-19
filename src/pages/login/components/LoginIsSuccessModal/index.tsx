import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginIsSuccessModalType } from './loginIsSuccessModalTypes'
import {
  CheckCircle,
  CircleNotch,
  IconContext,
  XCircle,
} from '@phosphor-icons/react'
import {
  ButtonModalStyled,
  ContainerModalStyled,
  ContentWrapperStyled,
  LoadingDivStyled,
} from './loginSuccessModal.styled'

export function LoginIsSuccessModal({
  redirect,
  modalState,
  isOpen,
  onClose,
  errorMsg,
}: LoginIsSuccessModalType) {
  const navigate = useNavigate()

  useEffect(() => {
    let timeOut: number

    if (modalState === 'success' && isOpen) {
      timeOut = window.setTimeout(() => {
        navigate(redirect)
      }, 3000)
    }

    return () => clearTimeout(timeOut)
  }, [modalState, navigate, redirect, isOpen])

  function handleContinueToRedirect() {
    navigate(redirect)
  }

  return (
    <ContainerModalStyled isOpen={isOpen} success={modalState}>
      <ContentWrapperStyled success={modalState}>
        <div className="content">
          <IconContext.Provider
            value={{
              size: 100,
              color: 'currentColor',
              weight: 'regular',
            }}
          >
            {(() => {
              switch (modalState) {
                case 'success':
                  return <CheckCircle className="animate" />
                case 'error':
                  return <XCircle className="animate" />
                default:
                  return (
                    <LoadingDivStyled>
                      <CircleNotch />
                    </LoadingDivStyled>
                  )
              }
            })()}
          </IconContext.Provider>
          <h2>
            {(() => {
              switch (modalState) {
                case 'success':
                  return 'Login Concluído com sucesso!'
                case 'error':
                  return errorMsg || 'Ocorreu um erro!'
                default:
                  return 'Aguarde!'
              }
            })()}
          </h2>
        </div>
        {(() => {
          switch (modalState) {
            case 'success':
              return (
                <ButtonModalStyled
                  $color="success"
                  onClick={handleContinueToRedirect}
                  variation="primary"
                >
                  Continuar
                </ButtonModalStyled>
              )
            case 'error':
              return (
                <ButtonModalStyled
                  $color="error"
                  onClick={onClose}
                  variation="primary"
                >
                  Tente novamente
                </ButtonModalStyled>
              )
          }
        })()}
      </ContentWrapperStyled>
    </ContainerModalStyled>
  )
}
