import React, { InputHTMLAttributes, ReactNode } from 'react'
import { IconProps } from '@phosphor-icons/react'

export type InputProps = InputHTMLAttributes<HTMLInputElement>

export interface TextInputType extends Omit<InputProps, 'type'> {
  type: 'number' | 'email' | 'text' | 'date' | 'password'
  icon?: React.ReactElement<IconProps>
  label: string
  variation?: '01' | '02'
  warning: boolean
  msgError: string
}

export interface DropdownInputType {
  icon?: React.ReactElement<IconProps>
  label: string
  required?: boolean
  itens: string[]
  warning: boolean
}

export interface CheckBoxType {
  name: string
  text: ReactNode
}
