import { useContext } from 'react'
import { Api } from '../../services/api/axiosInstance'
import { FormProps, LoginPost, LoginResponse, LoginSubmitProps } from './types'
import { AuthContext } from '../../contexts/auth/AuthContext'
import { AxiosResponse } from 'axios'

export function useLoginSubmit({
  changeModalState,
  openModal,
  setModalErrorMsg,
}: LoginSubmitProps) {
  const { login } = useContext(AuthContext)

  function loginSubmit(data: FormProps) {
    openModal()
    changeModalState('loading')

    Api.post<LoginPost, AxiosResponse<LoginResponse>>('/login', {
      email: data.login.email,
      password: data.login.password,
    })
      .then((response) => {
        const data = response.data
        const user = {
          accessToken: data.accessToken,
          user: {
            email: data.user.email,
            id: data.user.id,
          },
        }
        login(user)
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
