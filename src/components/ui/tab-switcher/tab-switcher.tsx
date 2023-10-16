import * as Tabs from '@radix-ui/react-tabs'

import s from './tab-switcher.module.scss'

import { Typography } from '@/components'

type Props = {
  label?: string
  tabs: Tab[]
    defaultValue: string
}

type Tab = {
  trigger: string
  content: React.ReactNode
}

export const TabSwitcher: React.FC<Props> = ({ label, tabs, defaultValue }) => {
  return (
    <div>
      <Typography>{label}</Typography>
      <Tabs.Root activationMode={'automatic'} defaultValue={defaultValue}>
        <Tabs.List className={s.tabsList}>
          {tabs.map(tab => (
            <Tabs.Trigger className={s.tabsTrigger} value={tab.trigger} key={tab.trigger}>
              <Typography variant={'body_1'}>{tab.trigger}</Typography>
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {tabs.map((tab, i) => (
          <Tabs.Content key={tab.trigger + i} value={tab.trigger} className={s.content}>
            {tab.content}
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </div>
  )
}
