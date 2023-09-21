import { Label } from '@radix-ui/react-label'
import * as Tabs from '@radix-ui/react-tabs'

import s from './tab-switcher.module.scss'

import { Typography } from '@/components'
import { Decks } from '@/pages/packs-list/decks.tsx'

type Props = {
  label?: string
  content?: Content[]
}
type Content = {
  [propertyName: string]: React.ReactNode
}

export const TabSwitcher: React.FC<Props> = ({
  label,
  // content
}) => {
  return (
    <Label>
      <Typography>{label}</Typography>
      <Tabs.Root>
        <Tabs.List>
          <Tabs.Trigger className={s.tabsTrigger} value={'myCards'}>
            <Typography variant={'body_1'}>My Cards</Typography>
          </Tabs.Trigger>
          <Tabs.Trigger className={s.tabsTrigger} value={'allCards'}>
            <Typography variant={'body_1'}>All Cards</Typography>
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value={'myCards'} className={s.content}>
          <Decks />
        </Tabs.Content>
        <Tabs.Content value={'allCards'}></Tabs.Content>
      </Tabs.Root>
    </Label>
  )
}
