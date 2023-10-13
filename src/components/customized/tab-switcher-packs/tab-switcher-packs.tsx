import { TabSwitcher } from '@/components'
import { Decks } from '@/pages/packs-list/decks.tsx'

export const TabSwitcherPacks = () => {
  const tabs = [
    { trigger: 'My Packs', content: <Decks variant={'myPacks'} /> },
    { trigger: 'All Packs', content: <Decks variant={'allPacks'} /> },
  ]

  return <TabSwitcher label={'Show packs cards'} tabs={tabs} defaultValue={'All Packs'}/>
}
