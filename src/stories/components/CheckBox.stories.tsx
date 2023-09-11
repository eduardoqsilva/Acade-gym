import { Meta, StoryObj } from '@storybook/react'
import { CheckBox } from '../../components/Inputs'
import { CheckBoxType } from '../../components/Inputs/inputsType'

export default {
  title: 'Global-components/Inputs/CheckBox',
  component: CheckBox,
  tags: ['autodocs'],
  args: {
    name: 'check',
    text: (
      <p>
        I read and accept the <a href="#">terms of use</a>
      </p>
    ),
  },
} as Meta<CheckBoxType>

export const Default: StoryObj<CheckBoxType> = {
  args: {},
}
