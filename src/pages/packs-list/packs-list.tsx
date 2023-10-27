import { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'

import s from './pack-list.module.scss'

import { Button, Slider, TextField, Typography } from '@/components'
import { CreatePackModal } from '@/components/customized/modals/pack-modal/create-pack-modal.tsx'
import { TabSwitcherPacks } from '@/components/customized/tab-switcher-packs/tab-switcher-packs.tsx'
import { decksSlice } from '@/services/decks/decks.slice.ts'
import { useGetDecksQuery } from '@/services/decks/decks.ts'
import { Trash } from '@/svg/trash-outline.tsx'

export const PacksList = () => {
  const dispatch = useDispatch()
  const [modal, setModal] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [currentMinValue, setMinValue] = useState(0)
  const [currentMaxValue, setMaxValue] = useState(0)

  const { data } = useGetDecksQuery()
  const maxCardsCount = data?.maxCardsCount

  useEffect(() => {
    if (maxCardsCount) {
      setMaxValue(maxCardsCount)
      dispatch(decksSlice.actions.setMaxCardsCount(maxCardsCount))
    }
  }, [maxCardsCount])

  const valueChangeHandler = (values: number[]) => {
    setMinValue(values[0])
    setMaxValue(values[1])
  }

  useEffect(() => {
    const timerId = setTimeout(() => {
      dispatch(decksSlice.actions.setMinCardsCount(currentMinValue))
      dispatch(decksSlice.actions.setMaxCardsCount(currentMaxValue))
    }, 300)

    return () => clearTimeout(timerId)
  }, [currentMinValue, currentMaxValue])

  const onSearch = (value: string) => {
    dispatch(decksSlice.actions.setSearchByName(value))
  }

  useEffect(() => {
    const timerId = setTimeout(() => {
      onSearch(searchValue)
    }, 500)

    return () => clearTimeout(timerId)
  }, [searchValue])

  const onResetValues = () => {
    dispatch(decksSlice.actions.setMinCardsCount(0))
    setMinValue(0)
    dispatch(decksSlice.actions.setMaxCardsCount(maxCardsCount || 1))
    setMaxValue(maxCardsCount!)
    setSearchValue('')
  }

  return (
    <div className={s.packList}>
      <section className={s.headerSection}>
        <Typography as={'h1'} variant="large">
          Packs list
        </Typography>
        <Button onClick={() => setModal(true)}>Add New Pack</Button>
      </section>
      <section className={s.filterSection}>
        <TextField
          variant={'search'}
          className={s.inputSearch}
          onValueChange={setSearchValue}
          value={searchValue}
        />
        <div className={s.filterSecondSection}>
          <TabSwitcherPacks />
          <Slider
            label={'Count of cards'}
            maxValue={maxCardsCount}
            currentMinValue={currentMinValue}
            currentMaxValue={currentMaxValue}
            valueChangeHandler={valueChangeHandler}
          />
          <Button variant={'secondary'} onClick={onResetValues}>
            <Trash />
            Clear Filter
          </Button>
        </div>
      </section>
      {modal && <CreatePackModal setModal={setModal} />}
    </div>
  )
}
