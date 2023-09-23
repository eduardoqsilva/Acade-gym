import { Meta, StoryObj } from '@storybook/react'
import { DivWrapperInputs } from '../../../.storybook/decorators'
import { Dropdown } from '../../components/Inputs'
import { DropdownType } from '../../components/Inputs/inputsType'

export default {
  title: 'Global-components/Inputs/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  args: {
    itens: ['Item1', 'Item2', 'Item3'],
    label: 'Dropdown',
  },
  decorators: [DivWrapperInputs],
} as Meta<DropdownType>

export const Default: StoryObj<DropdownType> = {
  args: {},
}
