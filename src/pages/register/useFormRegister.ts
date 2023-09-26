import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { FormProps } from './types'
import { schemaForm } from './schema'

export function useFormRegister() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormProps>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(schemaForm),
    defaultValues: {
      register: {
        name: '',
        lastName: '',
        email: '',
        role: '',
        password: '',
        confirmPassword: '',
        terms: true,
      },
    },
  })

  return {
    errors,
    handleSubmit,
    register,
    reset,
  }
}
