import { Meta, StoryObj } from '@storybook/react'
import { LoginIsSuccessModalType } from '../../../pages/login/components/LoginIsSuccessModal/sucessIndicator'
import { LoginIsSuccessModal } from '../../../pages/login/components/LoginIsSuccessModal'
import { withRouter } from 'storybook-addon-react-router-v6'

export default {
  title: 'pages/login/components/LoginIsSuccessModal',
  component: LoginIsSuccessModal,
  tags: ['autodocs'],
  args: {
    success: 'loading',
    isOpen: true,
    redirect: '#',
  },
  argTypes: {
    onClose: { action: 'close' },
  },
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 500,
      },
    },
  },
  decorators: [withRouter],
} as Meta<LoginIsSuccessModalType>

export const Loading: StoryObj<LoginIsSuccessModalType> = {
  args: {
    success: 'loading',
    isOpen: true,
    redirect: '#',
  },
  argTypes: {
    onClose: { action: 'close' },
  },
}

export const Error: StoryObj<LoginIsSuccessModalType> = {
  args: {
    success: 'error',
    isOpen: true,
    redirect: '#',
  },
  argTypes: {
    onClose: { action: 'close' },
  },
}

export const Success: StoryObj<LoginIsSuccessModalType> = {
  args: {
    success: 'success',
    isOpen: true,
    redirect: '#',
  },
  argTypes: {
    onClose: { action: 'close' },
  },
}
