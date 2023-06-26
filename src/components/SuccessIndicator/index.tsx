import { useEffect } from 'react'
import { DefaultTheme } from '../../styles/theme/defaultTheme'
import { ContainerStyled, LoadingDivStyled } from './successIndicator.styled'
import { useNavigate } from 'react-router-dom'
import { SuccessIndicatorType } from './sucessIndicator'
import {
  CheckCircle,
  CircleNotch,
  IconContext,
  XCircle,
} from '@phosphor-icons/react'

const { colors } = DefaultTheme

export function SuccessIndicator({
  indicate /* success / show */,
  redirect,
}: SuccessIndicatorType) {
  const color = indicate[0] ? colors.green_light : colors.red
  const navigate = useNavigate()

  useEffect(() => {
    let timeOut: number

    if (redirect && indicate[0] && indicate[1]) {
      timeOut = window.setTimeout(() => {
        navigate(redirect)
      }, 1500)
    }

    return () => clearTimeout(timeOut)
  }, [indicate, navigate, redirect])

  return (
    <ContainerStyled show={indicate[1]}>
      <div className="indicator">
        <IconContext.Provider
          value={{
            color: `${color}`,
            size: 100,
            weight: 'regular',
          }}
        >
          {indicate[0] !== null ? (
            indicate[0] ? (
              <CheckCircle className="animate" />
            ) : (
              <XCircle className="animate" />
            )
          ) : (
            <LoadingDivStyled>
              <CircleNotch color={colors.white} />
            </LoadingDivStyled>
          )}
        </IconContext.Provider>

        <h2>
          {indicate[0] !== null
            ? indicate[0]
              ? 'Sucesso'
              : 'Ocorreu um erro!'
            : 'Aguarde!'}
        </h2>
      </div>
    </ContainerStyled>
  )
}
