import { FC, useState } from 'react'

import { toast, ToastContainer } from 'react-toastify'

import { PackModal } from '@/components/customized/modals/pack-modal/pack-modal.tsx'
import { useCreateDeckMutation } from '@/services/decks/decks.ts'

type Props = {
  setModal: (value: boolean) => void
}

export const CreatePackModal: FC<Props> = ({ setModal }) => {
  const [onPrivate, setPrivate] = useState<boolean>(false)
  const [name, setName] = useState('')
  const [image, setImage] = useState<Blob | null>(null)
  const [createDeck] = useCreateDeckMutation()

  const changePrivate = () => {
    setPrivate(prev => !prev)
  }

  const onNameChange = (value: string) => {
    setName(value)
  }

  const onConfirm = () => {
    if (name) {
      const formData = new FormData()

      formData.append('name', name)
      formData.append('isPrivate', onPrivate.toString())

      if (image) {
        formData.append('cover', image)
      }

      createDeck(formData)
        .unwrap()
        .then(() => {
          setModal(false)
        })
        .catch(() => {
          toast(
            'name must be longer than or equal to 3 characters and shorter than or equal to 30 characters'
          )
        })
    } else {
      toast.error('name is required field')
    }
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
        image={image}
        setImage={setImage}
      />
    </>
  )
}
