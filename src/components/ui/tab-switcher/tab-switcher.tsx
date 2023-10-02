import { Label } from '@radix-ui/react-label'
import * as Tabs from '@radix-ui/react-tabs'

import s from './tab-switcher.module.scss'

import { Typography } from '@/components'

type Props = {
  label?: string
  tabs: Tab[]
}

type Tab = {
  trigger: string
  content: React.ReactNode
}

export const TabSwitcher: React.FC<Props> = ({ label, tabs }) => {
  return (
    <Label>
      <Typography>{label}</Typography>
      <Tabs.Root>
        <Tabs.List>
          {tabs.map(tab => (
            <Tabs.Trigger className={s.tabsTrigger} value={tab.trigger} key={tab.trigger}>
              <Typography variant={'body_1'}>{tab.trigger}</Typography>
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {tabs.map(tab => (
          <Tabs.Content key={tab.trigger} value={tab.trigger} className={s.content}>
            {tab.content}
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </Label>
  )
}
