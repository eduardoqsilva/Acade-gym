import React, { useEffect, useState } from 'react'
import { Code, IconContext } from '@phosphor-icons/react'
import {
  CheckBoxStyled,
  DropdownStyled,
  ErrorTextStyled,
  InputWrapperStyled,
} from './inputs.styled'
import { CheckboxType, DropdownType, InputType } from './inputsType'

export const Input = React.forwardRef<HTMLInputElement, InputType>(
  function Input(
    {
      type = 'text',
      label,
      msgError,
      variation = '01',
      icon = <Code />,
      ...props
    },
    ref,
  ) {
    const [warning, setWarning] = useState(false)

    useEffect(() => {
      if (msgError) {
        setWarning(true)
      } else {
        setWarning(false)
      }
    }, [msgError])

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
export const Dropdown = React.forwardRef<HTMLSelectElement, DropdownType>(
  function Dropdown(
    { icon = <Code />, label, itens, msgError, ...props },
    ref,
  ) {
    const [warning, setWarning] = useState(false)

    useEffect(() => {
      if (msgError) {
        setWarning(true)
      } else {
        setWarning(false)
      }
    }, [msgError])

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

          <label htmlFor={label}>{label}</label>
          <select id={label} ref={ref} {...props}>
            <option value="">--</option>
            {itens?.text.map((text, index) => {
              return (
                <option key={index} value={itens?.value[index]}>
                  {text}
                </option>
              )
            })}
          </select>
        </DropdownStyled>
        <ErrorTextStyled warning={warning}>{msgError}</ErrorTextStyled>
      </div>
    )
  },
)

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxType>(
  function Checkbox({ text, msgError, ...props }, ref) {
    const [warning, setWarning] = useState(false)

    useEffect(() => {
      if (msgError) {
        setWarning(true)
      } else {
        setWarning(false)
      }
    }, [msgError])

    return (
      <div>
        <CheckBoxStyled>
          <input id={props.name} type="checkbox" ref={ref} {...props} />
          <label htmlFor={props.name}>{text}</label>
        </CheckBoxStyled>
        <ErrorTextStyled warning={warning}>{msgError}</ErrorTextStyled>
      </div>
    )
  },
)
