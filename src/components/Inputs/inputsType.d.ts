import React from 'react'
import { IconProps } from '@phosphor-icons/react'

export interface TextInputType {
  icon: React.ReactElement<IconProps>
  type: 'email' | 'text' | 'number' | 'date' | 'password'
  placeholder?: string
  label: string
  required?: boolean
  variation?: '01' | '02'
  warning: boolean
  msgError: string
}

export interface DropdownInputType {
  icon: React.ReactElement<IconProps>
  label: string
  requered?: boolean
  itens: string[]
  warning: boolean
}
