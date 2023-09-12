import React from 'react'
import { Code, IconContext } from '@phosphor-icons/react'
import {
  CheckBoxStyled,
  DropdownStyled,
  ErrorTextStyled,
  InputWrapperStyled,
} from './inputs.styled'
import { CheckBoxType, DropdownInputType, TextInputType } from './inputsType'

export const Input = React.forwardRef<HTMLInputElement, TextInputType>(
  function Input(
    {
      type = 'text',
      label,
      warning,
      msgError,
      variation = '01',
      icon = <Code />,
      ...props
    },
    ref,
  ) {
    return (
      <div>
        <InputWrapperStyled variation={variation} warning={warning}>
          <IconContext.Provider
            value={{
              size: 25,
              weight: 'regular',
              color: 'currentColor',
            }}
          >
            {icon}
          </IconContext.Provider>

          <label htmlFor={label}>{label}</label>
          <input id={label} ref={ref} {...props} type={type} />
        </InputWrapperStyled>
        <ErrorTextStyled warning={warning}>{msgError}</ErrorTextStyled>
      </div>
    )
  },
)

export function Dropdown({
  icon = <Code />,
  label,
  required,
  itens,
  warning,
}: DropdownInputType) {
  return (
    <div>
      <DropdownStyled warning={warning}>
        <IconContext.Provider
          value={{
            color: 'currentColor',
            size: 25,
            weight: 'regular',
          }}
        >
          {icon}
        </IconContext.Provider>

        <label>{label}</label>
        <select name="sexo" required={required}>
          <option value="">--</option>
          {itens.map((i, id) => {
            return (
              <option key={id} value={i}>
                {i}
              </option>
            )
          })}
        </select>
      </DropdownStyled>
    </div>
  )
}

export function CheckBox({ text, name }: CheckBoxType) {
  return (
    <CheckBoxStyled>
      <input type="checkbox" id={name} />
      <label htmlFor={name}>{text}</label>
    </CheckBoxStyled>
  )
}
