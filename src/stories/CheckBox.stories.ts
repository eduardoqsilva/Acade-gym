import { Meta, StoryObj } from '@storybook/react'
import { CheckBox } from '../components/Inputs'
import { CheckBoxType } from '../components/Inputs/inputsType'

export default {
  title: 'Inputs/CheckBox',
  component: CheckBox,
  tags: ['autodocs'],
  args: {
    text: 'I read and accept the ',
    link: ['#', 'terms of use'],
  },
} as Meta<CheckBoxType>

export const Default: StoryObj<CheckBoxType> = {
  args: {},
}
