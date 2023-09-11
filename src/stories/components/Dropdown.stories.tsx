import { Meta, StoryObj } from '@storybook/react'
import { DivWrapperInputs } from '../../../.storybook/decorators'
import { Dropdown } from '../../components/Inputs'
import { DropdownInputType } from '../../components/Inputs/inputsType'

export default {
  title: 'Global-components/Inputs/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  args: {
    itens: ['Item1', 'Item2', 'Item3'],
    label: 'Dropdown',
  },
  decorators: [DivWrapperInputs],
} as Meta<DropdownInputType>

export const Default: StoryObj<DropdownInputType> = {
  args: {},
}
