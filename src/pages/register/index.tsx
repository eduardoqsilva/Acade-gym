import { useFormRegister } from './useFormRegister'

import { Logo } from '../../components/Logo'
import { Checkbox, Dropdown, Input } from '../../components/Inputs'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'

import { ContainerStyled, FormStyled, WrapperStyled } from './register.styled'
import { At, LockKey, User, IdentificationCard } from '@phosphor-icons/react'
import { useRegisterSubmit } from './useRegisterSubmit'

export function Register() {
  const { errors, register, handleSubmit, reset } = useFormRegister()
  const { isSubmitting, registerSubmit } = useRegisterSubmit({ reset })

  return (
    <ContainerStyled>
      <WrapperStyled>
        <Logo width={120} variation="text" />
        <FormStyled onSubmit={handleSubmit(registerSubmit)}>
          <h2 className="title">Cadastro</h2>
          <Input
            icon={<User />}
            type={'text'}
            label={'Nome:'}
            placeholder="nome"
            {...register('register.name')}
            msgError={errors.register?.name?.message}
          />
          <Input
            icon={<User />}
            type={'text'}
            label={'Sobrenome:'}
            placeholder="Sobrenome"
            {...register('register.lastName')}
            msgError={errors.register?.lastName?.message}
          />
          <Input
            icon={<At />}
            type={'email'}
            label={'E-mail:'}
            placeholder="seuemail@email.com"
            {...register('register.email')}
            msgError={errors.register?.email?.message}
          />
          <Dropdown
            icon={<IdentificationCard />}
            itens={{
              text: ['Empresa', 'Personal trainer'],
              value: ['adm', 'trainer'],
            }}
            label={'Essa conta é para:'}
            {...register('register.role')}
            msgError={errors.register?.role?.message}
          />
          <Input
            icon={<LockKey />}
            type={'password'}
            label={'Senha:'}
            placeholder="••••••••••••"
            {...register('register.password')}
            msgError={errors.register?.password?.message}
          />
          <Input
            icon={<LockKey />}
            type={'password'}
            label={'Confirme a senha:'}
            placeholder="••••••••••••"
            {...register('register.confirmPassword')}
            msgError={errors.register?.confirmPassword?.message}
          />
          <Checkbox
            text={
              <>
                Li e concordo com os <Link to={'/'}>termos de uso</Link>
              </>
            }
            {...register('register.terms')}
            msgError={errors.register?.terms?.message}
          />
          <Button disable={isSubmitting} type="submit" text="Cadastrar" />
        </FormStyled>
      </WrapperStyled>
    </ContainerStyled>
  )
}
