import { FC } from 'react'

import styles from './learn-pack.module.scss'

import { Button, RadioGroup, Typography } from '@/components'
type ShowAnswerType = {
  answer: string
}

const ShowAnswer: FC<ShowAnswerType> = ({ answer }) => {
  const options = [
    { id: '1', value: 'Did not know' },
    { id: '2', value: 'Forgot' },
    { id: '3', value: 'A lot of though' },
    { id: '4', value: 'Confused' },
    { id: '5', value: 'Knew the answer' },
  ]

  return (
    <div className={styles.cardAnswer}>
      <Typography variant={'subtitle_1'}>Answer: </Typography>
      <Typography variant={'h1'} as={'div'}>
        {answer}
      </Typography>
      <Typography variant={'subtitle_1'} className={styles.rate}>
        Rate yourself:{' '}
      </Typography>
      <RadioGroup options={options} className={styles.radioGroup} />
      <Button variant={'primary'} onClick={() => {}}>
        Next Question
      </Button>
    </div>
  )
}

export default ShowAnswer
