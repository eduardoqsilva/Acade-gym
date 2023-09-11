export interface LoginIsSuccessModalType {
  success: 'loading' | 'success' | 'error'
  isOpen: boolean
  onClose: () => void
  redirect: string
  errorMsg?: string
}
