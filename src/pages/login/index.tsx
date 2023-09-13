import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../../components/Inputs'
import { Button } from '../../components/Button'
import { Logo } from '../../components/Logo'
import { At, LockKey } from '@phosphor-icons/react'
import { ContainerStyled, FormStyled, WrapperStyled } from './login.styled'

const schemaForm = z.object({
  login: z.object({
    email: z.string().email('O e-mail precisa ser válido!'),
    password: z
      .string()
      .min(8, 'A senha precisa ter no mínimo 8 caracteres!')
      .max(16, 'A senha não pode ter mais de 16 caracteres!'),
  }),
})

type FormProps = z.infer<typeof schemaForm>

export function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormProps>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(schemaForm),
    defaultValues: {
      login: {
        email: '',
        password: '',
      },
    },
  })

  function handleFormSubmit(data: FormProps) {
    console.log(data)
  }

  return (
    <ContainerStyled>
      <WrapperStyled>
        <Logo width={120} />
        <FormStyled onSubmit={handleSubmit(handleFormSubmit)}>
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
            <Button text={'Cadastrar'} variation="secundary" type="button" />
          </div>
        </FormStyled>
      </WrapperStyled>
    </ContainerStyled>
  )
}
