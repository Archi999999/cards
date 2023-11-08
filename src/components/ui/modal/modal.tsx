import { FC, ReactNode, useEffect } from 'react'

import s from './modal.module.scss'

import { Button, Typography } from '@/components'
import { Close } from '@/svg'

type Props = {
  title: string
  confirmButtonName: string
  setModal: (value: boolean) => void
  children: ReactNode
  onConfirm: () => void
}
export const Modal: FC<Props> = ({ title, setModal, confirmButtonName, children, onConfirm }) => {
  const onCloseModal = () => {
    setModal(false)
  }
  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setModal(false)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.addEventListener('keydown', handleKeyPress)
    }
  }, [])

  return (
    <section
      role="dialog"
      aria-label="Modal Dialog"
      className={s.modal}
      // onClick={onCloseModal}
    >
      <div
        className={s.window}
        // onClick={e => e.stopPropagation()}
      >
        <header className={s.header}>
          <Typography as={'h2'} variant={'h2'}>
            {title}
          </Typography>
          <button className={s.buttonClose} onClick={onCloseModal}>
            <Close />
          </button>
        </header>
        <section className={s.content}>{children}</section>
        <footer className={s.footer}>
          <Button variant={'secondary'} onClick={onCloseModal}>
            Cancel
          </Button>
          <Button onClick={onConfirm}>{confirmButtonName}</Button>
        </footer>
      </div>
    </section>
  )
}
