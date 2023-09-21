import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { schemaForm } from './schema'
import { FormProps } from './types'

export function useFormLogin() {
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

  return {
    errors,
    register,
    handleSubmit,
  }
}
