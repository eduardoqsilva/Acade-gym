import { Meta, StoryObj } from '@storybook/react'
import { SuccessIndicatorType } from '../components/SuccessIndicator/sucessIndicator'
import { SuccessIndicator } from '../components/SuccessIndicator'
import { withRouter } from 'storybook-addon-react-router-v6'

export default {
  title: 'Success Indicator/SuccessIndicator',
  component: SuccessIndicator,
  tags: ['autodocs'],
  args: {
    indicate: [null, true],
  },
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 300,
      },
    },
  },
  decorators: [withRouter],
} as Meta<SuccessIndicatorType>

export const Default: StoryObj<SuccessIndicatorType> = {
  args: {},
}

export const Error: StoryObj<SuccessIndicatorType> = {
  args: {
    indicate: [false, true],
  },
}

export const Success: StoryObj<SuccessIndicatorType> = {
  args: {
    indicate: [true, true],
  },
}
