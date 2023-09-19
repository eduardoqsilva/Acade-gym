import { z } from 'zod'
import { schemaForm } from './schema'

export type FormProps = z.infer<typeof schemaForm>

export type LoginPost = {
  email: string
  password: string
}

export type LoginModalState = 'loading' | 'success' | 'error'

export interface ModalProps {
  modalState: LoginModalState
  isOpenModal: boolean
}

export interface LoginSubmitProps {
  changeModalState: (string: LoginModalState) => void
  openModal: () => void
  setModalErrorMsg: (text: string) => void
}
