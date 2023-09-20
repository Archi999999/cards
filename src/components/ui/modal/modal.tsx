import s from './modal.module.scss'

import { Button, Typography } from '@/components'
import { Close } from '@/svg'

type Props = {
  title: string
  confirmButtonName: string
  setModal: (value: boolean) => void
  children: React.ReactNode
}
export const Modal: React.FC<Props> = ({ title, setModal, confirmButtonName, children }) => {
  const onCloseModal = () => {
    setModal(false)
  }

  return (
    <section role="dialog" aria-label="Modal Dialog" className={s.modal} onClick={onCloseModal}>
      <div className={s.window} onClick={e => e.stopPropagation()}>
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
          <Button>{confirmButtonName}</Button>
        </footer>
      </div>
    </section>
  )
}
