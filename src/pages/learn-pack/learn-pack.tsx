import { Link, useParams } from 'react-router-dom'

import styles from './learn-pack.module.scss'

import { Typography } from '@/components'
import { Card } from '@/components/ui/card/card.tsx'
import { ArrowBack } from '@/svg/arrow-back-outline.tsx'

export const LearnPack = () => {
  const { deckId } = useParams<{ deckId: string }>()

  return (
    <div className={styles.wrapper}>
      <Link className={styles.linkBack} to={`/`}>
        <ArrowBack />
        <Typography variant={'body_2'}> Back to Packs List</Typography>
      </Link>
      <Card>
        <Typography variant={'large'}>Learn “Pack Name”{deckId}</Typography>
      </Card>
    </div>
  )
}
