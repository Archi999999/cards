import { ChangeEvent, FC, useRef } from 'react'

import styles from './card-modal.module.scss'

import { Button, Typography } from '@/components'

type Props = {
  type?: 'Question' | 'Answer'
  image: Blob | null
  setImageToLearnPage: (image: any) => void
}
export const AddImageField: FC<Props> = ({ type, image, setImageToLearnPage }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const selectedImage = () => {
    inputRef && inputRef.current?.click()
  }
  const onChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]

      setImageToLearnPage(file)
    }
  }

  return (
    <div className={styles.imageField}>
      <div>
        {image ? (
          <img src={URL.createObjectURL(image)} alt={'image'} />
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
