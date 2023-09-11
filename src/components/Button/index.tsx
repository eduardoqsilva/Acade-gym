import { ButtonType } from './buttonType'
import { ButtonStyled } from './button.styled'

export function Button({
  text,
  disable,
  type = 'button',
  variation = 'primary',
  radius,
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
