import { useState } from 'react'
import { Api } from '../../services/api/axiosInstance'
import { FormProps, useRegisterSubmitProps } from './types'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export function useRegisterSubmit({ reset }: useRegisterSubmitProps) {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const navigate = useNavigate()

  function registerSubmit(data: FormProps) {
    setIsSubmitting(true)
    const id = toast.loading('Enviando...')

    Api.post<FormProps>('/register', {
      name: data.register.name,
      lastName: data.register.lastName,
      email: data.register.email,
      role: data.register.role,
      password: data.register.password,
    })
      .then((response) => {
        reset()
        console.log(response)
        toast.update(id, {
          render: 'Cadastro efetuado com sucesso!',
          type: 'success',
          isLoading: false,
          autoClose: 5000,
        })
        setTimeout(() => {
          navigate('/')
        }, 1000)
      })
      .catch((err) => {
        console.error(err)
        toast.update(id, {
          render: 'Ocorreu um erro tente novamente!',
          type: 'error',
          isLoading: false,
          autoClose: 5000,
        })
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  return { isSubmitting, registerSubmit }
}
