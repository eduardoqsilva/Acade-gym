import { Api } from '../../services/api/axiosInstance'
import { FormProps, LoginPost, LoginSubmitProps } from './types'

export function useLoginSubmit({
  changeModalState,
  openModal,
  setModalErrorMsg,
}: LoginSubmitProps) {
  function loginSubmit(data: FormProps) {
    openModal()
    changeModalState('loading')
    Api.post<LoginPost>('/login', {
      email: data.login.email,
      password: data.login.password,
    })
      .then((data) => {
        console.log(data)
        changeModalState('success')
      })
      .catch((err) => {
        setModalErrorMsg(err?.response?.data)
        changeModalState('error')
      })
  }

  return {
    loginSubmit,
  }
}
