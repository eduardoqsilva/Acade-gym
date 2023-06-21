import { DefaultTheme } from '../../styles/theme/defaultTheme'
import { ButtonType } from './buttonType'
import { ButtonStyled } from './button.styled'

const { border } = DefaultTheme

export function Button({
  text,
  disable,
  type = 'button',
  variation = 'primary',
  radius = border.buttonBorderRadius,
  click,
}: ButtonType) {
  return (
    <ButtonStyled
      type={type}
      onClick={click}
      variation={variation}
      radius={radius}
      disabled={disable}
    >
      {text}
    </ButtonStyled>
  )
}
