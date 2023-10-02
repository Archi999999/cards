import { TabSwitcher } from '@/components'
import { Decks } from '@/pages/packs-list/decks.tsx'

export const TabSwitcherPacks = () => {
  const tabs = [
    { trigger: 'My Packs', content: null },
    { trigger: 'All Packs', content: <Decks /> },
  ]

  return <TabSwitcher label={'Show packs cards'} tabs={tabs} />
}
