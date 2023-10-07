import { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'

import s from './pack-list.module.scss'

import { Button, Slider, TextField, Typography } from '@/components'
import { PackModal } from '@/components/customized/modals/pack-modal/pack-modal.tsx'
import { TabSwitcherPacks } from '@/components/customized/tab-switcher-packs/tab-switcher-packs.tsx'
import { decksSlice } from '@/services/decks/decks.slice.ts'
import { useGetDecksQuery } from '@/services/decks/decks.ts'
import { Trash } from '@/svg/trash-outline.tsx'

export const PacksList = () => {
  const dispatch = useDispatch()
  const [modal, setModal] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  const { data: { maxCardsCount } = {} } = useGetDecksQuery()

  const onSearch = (value: string) => {
    dispatch(decksSlice.actions.setSearchByName(value))
  }

  useEffect(() => {
    const timerId = setTimeout(() => {
      onSearch(searchValue)
    }, 500)

    return () => clearTimeout(timerId)
  }, [searchValue])

  return (
    <div className={s.packList}>
      <section className={s.headerSection}>
        <Typography as={'h1'} variant="large">
          Packs list
        </Typography>
        <Button onClick={() => setModal(true)}>Add New Pack</Button>
      </section>
      <section className={s.filterSection}>
        <TextField variant={'search'} className={s.inputSearch} onValueChange={setSearchValue} />
        <TabSwitcherPacks />
        <Slider label={'Count of cards'} maxValue={maxCardsCount} />
        <Button variant={'secondary'}>
          <Trash />
          Clear Filter
        </Button>
      </section>
      {modal && (
        <PackModal title={'Add New Pack'} setModal={setModal} confirmButtonName={'Add New Pack'} />
      )}
    </div>
  )
}
