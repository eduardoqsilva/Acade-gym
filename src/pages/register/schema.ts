import { z } from 'zod'

export const schemaForm = z.object({
  register: z
    .object({
      name: z.string().min(3, 'Digite um nome válido!'),
      lastName: z.string().min(3, 'Digite um sobrenome válido!'),
      email: z
        .string()
        .email('O e-mail precisa ser válido!')
        .transform((value) => value.toLowerCase()),
      role: z.string().min(2, 'Você deve escolher uma opção'),
      password: z
        .string()
        .min(8, 'A senha precisa ter no mínimo 8 caracteres!')
        .max(16, 'A senha não pode ter mais de 16 caracteres!'),
      confirmPassword: z.string(),
      terms: z.boolean().refine((value) => value, {
        message: 'Aceite os termos para continuar!',
      }),
    })
    .refine((fields) => fields.password === fields.confirmPassword, {
      path: ['confirmPassword'],
      message: 'As senhas precisam ser iguais!',
    }),
})
