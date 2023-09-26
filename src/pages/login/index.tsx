import { useRef } from 'react'

import { SplashScreen } from './components/SplashScreen'
import { LoginIsSuccessModal } from './components/LoginIsSuccessModal'
import { Logo } from '../../components/Logo'
import { Input } from '../../components/Inputs'
import { Button } from '../../components/Button'
import { useNavigate } from 'react-router-dom'

import { useFormLogin } from './useFormLogin'
import { useLoginSubmit } from './useLoginSubmit'
import { useModal } from './useModal'

import { ContainerStyled, FormStyled, WrapperStyled } from './login.styled'
import { At, LockKey } from '@phosphor-icons/react'

export function Login() {
  const {
    isOpen,
    modalState,
    errorMsg,
    handleCloseModal,
    changeModalState,
    openModal,
    setModalErrorMsg,
  } = useModal()

  const { loginSubmit } = useLoginSubmit({
    changeModalState,
    openModal,
    setModalErrorMsg,
  })

  const { errors, register, handleSubmit } = useFormLogin()
  const navigate = useNavigate()

  const ref = useRef<HTMLDivElement>(null)

  return (
    <ContainerStyled>
      <SplashScreen refLogo={ref} />
      <LoginIsSuccessModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        modalState={modalState}
        errorMsg={errorMsg}
        redirect="/home"
      />
      <WrapperStyled>
        <div ref={ref}>
          <Logo width={120} />
        </div>
        <FormStyled onSubmit={handleSubmit(loginSubmit)}>
          <h2 className="title">Login</h2>
          <Input
            icon={<At />}
            type={'email'}
            label={'E-mail:'}
            placeholder="seuemail@email.com"
            variation="02"
            {...register('login.email')}
            msgError={errors.login?.email?.message}
          />
          <Input
            icon={<LockKey />}
            type={'password'}
            label={'Senha:'}
            placeholder="••••••••••••"
            variation="02"
            {...register('login.password')}
            msgError={errors.login?.password?.message}
          />
          <div className="buttonsWrapper">
            <Button text={'Entrar'} type="submit" />
            <Button
              text={'Cadastrar'}
              variation="secundary"
              type="button"
              click={() => navigate('/register')}
            />
          </div>
        </FormStyled>
      </WrapperStyled>
    </ContainerStyled>
  )
}
