export interface LoginIsSuccessModalType {
  modalState: 'loading' | 'success' | 'error'
  isOpen: boolean
  onClose: () => void
  redirect: string
  errorMsg?: string
}
