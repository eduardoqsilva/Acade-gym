import { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from '../../components/Inputs'
import { CheckboxType } from '../../components/Inputs/inputsType'

export default {
  title: 'Global-components/Inputs/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: {
    name: 'check',
    text: (
      <p>
        I read and accept the <a href="#">terms of use</a>
      </p>
    ),
  },
} as Meta<CheckboxType>

export const Default: StoryObj<CheckboxType> = {
  args: {},
}
