import { Input } from '../../components/Inputs'
import { At, LockKey } from '@phosphor-icons/react'
import { Logo } from '../../components/Logo'
import { ContainerStyled, FormStyled, WrapperStyled } from './login.styled'
import { Button } from '../../components/Button'

export function Login() {
  return (
    <ContainerStyled>
      <WrapperStyled>
        <Logo width={120} />
        <FormStyled>
          <h2 className="title">Login</h2>
          <Input
            icon={<At />}
            type={'email'}
            label={'E-mail:'}
            placeholder="seuemail@email.com"
            warning={false}
            msgError={''}
            variation="02"
          />
          <Input
            icon={<LockKey />}
            type={'password'}
            label={'Senha:'}
            placeholder="••••••••••••"
            warning={false}
            msgError={''}
            variation="02"
          />
          <div className="buttonsWrapper">
            <Button text={'Entrar'} type="submit" />
            <Button text={'Cadastrar'} variation="secundary" type="button" />
          </div>
        </FormStyled>
      </WrapperStyled>
    </ContainerStyled>
  )
}
