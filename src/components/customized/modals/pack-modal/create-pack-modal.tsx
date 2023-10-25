import { useState } from 'react'

import { toast, ToastContainer } from 'react-toastify'

import { PackModal } from '@/components/customized/modals/pack-modal/pack-modal.tsx'
import { useCreateDeckMutation } from '@/services/decks/decks.ts'

type Props = {
  setModal: (value: boolean) => void
}

export const CreatePackModal: React.FC<Props> = ({ setModal }) => {
  const [onPrivate, setPrivate] = useState(false)
  const [name, setName] = useState('')
  const [createDeck] = useCreateDeckMutation()

  const changePrivate = () => {
    setPrivate(prev => !prev)
  }

  const onNameChange = (value: string) => {
    setName(value)
  }

  const onConfirm = () => {
    createDeck({ name, isPrivate: onPrivate })
      .unwrap()
      .then(() => {
        setModal(false)
      })
      .catch(() => {
        toast('name must be longer than or equal to 3 characters"')
      })
  }

  //if (isLoading) return <div>...Loading</div>
  //if (isError) return <div>ERROR!!!</div>

  return (
    <>
      <ToastContainer autoClose={2000} position="top-center" limit={2} />
      <PackModal
        title={'Add New Pack'}
        setModal={setModal}
        confirmButtonName={'Add New Pack'}
        onConfirm={onConfirm}
        onNameChange={onNameChange}
        changePrivate={changePrivate}
        onPrivate={onPrivate}
      />
    </>
  )
}
