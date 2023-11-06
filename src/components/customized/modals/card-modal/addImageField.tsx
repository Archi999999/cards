import { ChangeEvent, FC, useRef, useState } from 'react'

import styles from './card-modal.module.scss'

import { Button, Typography } from '@/components'

type Props = {
  type: 'Question' | 'Answer'
  image?: string

  setImageToLearnPage: (image: any) => void
}
export const AddImageField: FC<Props> = ({ type, setImageToLearnPage }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState<File | null>()

  const selectedImage = () => {
    inputRef && inputRef.current?.click()
  }
  const onChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]

      setValue(file)
      const formData = new FormData()

      formData.append('answerImg', file)
      setImageToLearnPage(formData)

      // reader.onloadend = event => {
      //   if (event.target && typeof event.target.result === 'string') {
      //     const binaryData = event.target.result
      //
      //     setImageToLearnPage(binaryData)
      //   }
      // }
      // reader.readAsDataURL(file)
    }
  }

  return (
    <div className={styles.imageField}>
      <div>
        {value ? (
          <img src={URL.createObjectURL(value)} alt={'image'} />
        ) : (
          <Typography variant={'subtitle_1'}>No Image</Typography>
        )}
      </div>
      <div>
        <Typography variant={'subtitle_1'}>Image {type}</Typography>

        <Button onClick={selectedImage} variant={'secondary'}>
          Change cover
        </Button>
        <input
          style={{ display: 'none' }}
          ref={inputRef}
          type="file"
          onChange={onChangeImage}
          accept="*/image, .png, .img, .jpg"
        />
      </div>
    </div>
  )
}
