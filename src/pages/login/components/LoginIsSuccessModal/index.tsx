import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginIsSuccessModalType } from './sucessIndicator'
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
} from './successIndicator.styled'

export function LoginIsSuccessModal({
  redirect,
  success,
  isOpen,
  onClose,
  errorMsg,
}: LoginIsSuccessModalType) {
  const navigate = useNavigate()

  useEffect(() => {
    let timeOut: number

    if (success === 'success' && isOpen) {
      timeOut = window.setTimeout(() => {
        navigate(redirect)
      }, 1500)
    }

    return () => clearTimeout(timeOut)
  }, [success, navigate, redirect, isOpen])

  function handleContinueToRedirect() {
    navigate(redirect)
  }

  return (
    <ContainerModalStyled isOpen={isOpen} success={success}>
      <ContentWrapperStyled success={success}>
        <div className="content">
          <IconContext.Provider
            value={{
              size: 100,
              color: 'currentColor',
              weight: 'regular',
            }}
          >
            {(() => {
              switch (success) {
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
              switch (success) {
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
          switch (success) {
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
