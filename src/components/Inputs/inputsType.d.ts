import React, {
  ReactNode,
  InputHTMLAttributes,
  SelectHTMLAttributes,
} from 'react'
import { IconProps } from '@phosphor-icons/react'

export type InputProps = InputHTMLAttributes<HTMLInputElement>

export interface InputType extends Omit<InputProps, 'type'> {
  type: 'number' | 'email' | 'text' | 'date' | 'password'
  icon?: React.ReactElement<IconProps>
  label: string
  variation?: '01' | '02'
  msgError: string | undefined
}

export type DropdownProps = SelectHTMLAttributes<HTMLSelectElement>

export interface DropdownType extends DropdownProps {
  icon?: React.ReactElement<IconProps>
  label: string
  itens: { text: string[]; value: string[] }
  msgError?: string
}

export interface CheckboxType extends Omit<InputProps, 'type'> {
  text: ReactNode
  msgError?: string
}
