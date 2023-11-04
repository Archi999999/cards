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
  const [answer, setAnswer] = useState<File | null>()

  const selectedImage = () => {
    inputRef && inputRef.current?.click()
  }
  const onChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const image = e.target.files[0]

      setAnswer(image)
      setImageToLearnPage(URL.createObjectURL(image))
    }
  }

  return (
    <div className={styles.imageField}>
      <div>
        {answer ? (
          <img src={URL.createObjectURL(answer)} alt={'image'} />
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
