import { useLayoutEffect, useState } from 'react'
import { ImgBack, SplashWrapper } from './splash.styled'
import { splashType } from './splashType'
import { Logo } from '../../../../components/Logo'

import background from '../../assets/imgs/splash/splash.webp'

export function SplashScreen({ refLogo, width = 120 }: splashType) {
  const [show, setShow] = useState(true)
  const [load, setLoad] = useState(false)
  const [position, setPosition] = useState<number>()

  useLayoutEffect(() => {
    if (refLogo.current) {
      const pos = refLogo.current?.getBoundingClientRect()
      const height = Math.round(pos.height / 2) // metade do logo
      setPosition(Math.round(pos.top) + height) // pegando metade do logo e somando com a distância do topo da pagina até a boda superior da div

      setTimeout(() => {
        setShow(false)
      }, 2500)
    }
  }, [refLogo])

  return (
    <SplashWrapper position={position} $show={show}>
      <ImgBack $load={load}>
        <img
          alt=""
          loading="eager"
          src={background}
          onLoad={() => setLoad(true)}
        />
      </ImgBack>
      <Logo width={width} color={'2'} />
    </SplashWrapper>
  )
}
