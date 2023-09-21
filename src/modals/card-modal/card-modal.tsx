import s from './card-modal.module.scss'

import { TextField } from '@/components'
import { Modal } from '@/components/ui/modal'
import { SelectSecond } from '@/components/ui/select/selectSecond.tsx'

type Props = {
  title: string
  confirmButtonName: string
  setModal: (value: boolean) => void
}

export const CardModal: React.FC<Props> = ({ title, setModal, confirmButtonName }) => {
  const options = [
    { id: '', value: 'text' },
    { id: '', value: 'image' },
  ]

  return (
    <Modal
      title={title}
      setModal={setModal}
      confirmButtonName={confirmButtonName}
      onConfirm={() => {}}
    >
      <SelectSecond
        defaultValue={options[0].value}
        label={'Choose a question format'}
        className={s.select}
        options={options}
      />
      <TextField label={'Question'} />
      <TextField label={'Answer'} />
    </Modal>
  )
}
