import { useEffect, useState } from 'react'
import { Logo } from '../Logo'
import { LoadingWrapperStyled } from './loading.styled'
import { LoadingType } from './loadingType'

export function Loading({ load = false }: LoadingType) {
  const [show, setShow] = useState(true)

  useEffect(() => {
    if (!load) {
      setTimeout(() => {
        setShow(false)
      }, 400)
    } else {
      setShow(true)
    }
  }, [load])

  return (
    <LoadingWrapperStyled $load={load} $show={show}>
      <Logo color="1" variation="noText" width={100} />
    </LoadingWrapperStyled>
  )
}
