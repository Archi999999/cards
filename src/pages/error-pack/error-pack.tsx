import { useNavigate } from 'react-router-dom'

import styles from './error-pack.module.scss'

import { Button, Typography } from '@/components'
import { ErrorClouds } from '@/svg/404/error-clouds.tsx'
import { ErrorFour } from '@/svg/404/error-four.tsx'
import { ErrorPipes } from '@/svg/404/error-pipes.tsx'
import { ErrorRectangle } from '@/svg/404/error-rectangle.tsx'
import { ErrorRod } from '@/svg/404/error-rod.tsx'
import { ErrorStairs } from '@/svg/404/error-stairs.tsx'
import { ErrorWall } from '@/svg/404/error-wall.tsx'
import { ErrorZeroDown } from '@/svg/404/error-zero-down.tsx'
import { ErrorZeroUp } from '@/svg/404/error-zero-up.tsx'

const ErrorPack = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.wrapper}>
      <div className={styles.errorPage}>
        <div className={styles.wallStairs}>
          <ErrorStairs />
          <ErrorWall />
        </div>
        <div className={styles.numbers}>
          <ErrorFour className={styles.firstFour} />
          <div className={styles.zero}>
            <ErrorZeroUp />
            <ErrorZeroDown />
          </div>
          <ErrorFour />
        </div>
        <div className={styles.pipesCloud}>
          <ErrorPipes />
          <ErrorClouds />
        </div>
        <div className={styles.rod}>
          <ErrorRod />
          <ErrorRod />
        </div>
        <div className={styles.ribbon}></div>
        <div className={styles.rectangle}>
          <ErrorRectangle />
        </div>

        <Typography className={styles.string} variant={'body_1'}>
          Sorry! Page not found!
        </Typography>
      </div>
      <Button variant={'primary'} onClick={() => navigate('/')}>
        Back to home page
      </Button>
    </div>
  )
}

export default ErrorPack
