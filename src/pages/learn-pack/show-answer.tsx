import { FC, useState } from 'react'

import styles from './learn-pack.module.scss'

import { Button, RadioGroup, Typography } from '@/components'
type ShowAnswerType = {
  answer: string
  setNewQuestion: (grade: number) => void
}

const ShowAnswer: FC<ShowAnswerType> = ({ answer, setNewQuestion }) => {
  const [value, setValue] = useState('1')
  const options = [
    { id: '1', value: 'Did not know' },
    { id: '2', value: 'Forgot' },
    { id: '3', value: 'A lot of though' },
    { id: '4', value: 'Confused' },
    { id: '5', value: 'Knew the answer' },
  ]
  const onClickNextQuestionButton = () => {
    setNewQuestion(+value)
  }

  return (
    <div className={styles.cardAnswer}>
      <Typography variant={'subtitle_1'}>Answer: </Typography>
      <Typography variant={'h1'} as={'div'}>
        {answer}
      </Typography>
      <Typography variant={'subtitle_1'} className={styles.rate}>
        Rate yourself:{' '}
      </Typography>
      <RadioGroup options={options} className={styles.radioGroup} onValueChange={setValue} />
      <Button variant={'primary'} onClick={onClickNextQuestionButton}>
        Next Question
      </Button>
    </div>
  )
}

export default ShowAnswer
