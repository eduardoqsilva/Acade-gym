import { z } from 'zod'

export const schemaForm = z.object({
  login: z.object({
    email: z.string().email('O e-mail precisa ser válido!'),
    password: z
      .string()
      .min(8, 'A senha precisa ter no mínimo 8 caracteres!')
      .max(16, 'A senha não pode ter mais de 16 caracteres!'),
  }),
})
