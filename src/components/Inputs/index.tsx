import { Code, IconContext } from '@phosphor-icons/react'
import {
  CheckBoxStyled,
  DropdownStyled,
  InputWrapperStyled,
  WarningStyled,
} from './inputs.styled'
import { CheckBoxType, DropdownInputType, TextInputType } from './inputsType'

export function Input({
  icon = <Code />,
  type,
  placeholder,
  label,
  required,
  variation = '01',
  warning,
  msgError,
}: TextInputType) {
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

        <label>{label}</label>
        <input placeholder={placeholder} required={required} type={type} />
      </InputWrapperStyled>
      <WarningStyled warning={warning}>{msgError}</WarningStyled>
    </div>
  )
}

export function Dropdown({
  icon = <Code />,
  label,
  requered,
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
        <select name="sexo" required={requered}>
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

export function CheckBox({ text, link }: CheckBoxType) {
  return (
    <CheckBoxStyled>
      <input type="checkbox" id={text} />
      <label htmlFor={text}>
        {text} {link ? <a href={link[0]}>{link[1]}</a> : text}
      </label>
    </CheckBoxStyled>
  )
}
