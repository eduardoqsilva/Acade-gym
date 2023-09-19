import { Meta, StoryObj } from '@storybook/react'
import { DivWrapperInputs } from '../../../.storybook/decorators'
import { Input } from '../../components/Inputs'
import { InputType } from '../../components/Inputs/inputsType'

export default {
  title: 'Global-components/Inputs/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    label: 'Label:',
    msgError: '',
    placeholder: 'Your placeholder here',
    type: 'text',
  },
  decorators: [DivWrapperInputs],
} as Meta<InputType>

export const Variation01: StoryObj<InputType> = {
  args: {
    variation: '01',
  },
}

export const Variation02: StoryObj<InputType> = {
  args: {
    variation: '02',
  },
}
