import { Meta, StoryObj } from '@storybook/react'
import { DivWrapper } from '../../.storybook/decorators'
import { Dropdown } from '../components/Inputs'
import { DropdownInputType } from '../components/Inputs/inputsType'

export default {
  title: 'Inputs/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  args: {
    itens: ['Item1', 'Item2', 'Item3'],
    label: 'Dropdown',
  },
  decorators: [DivWrapper],
} as Meta<DropdownInputType>

export const Default: StoryObj<DropdownInputType> = {
  args: {},
}
