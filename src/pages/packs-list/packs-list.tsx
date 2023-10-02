import { useState } from 'react'

import s from './pack-list.module.scss'

import { Button, Slider, TextField, Typography } from '@/components'
import { PackModal } from '@/components/customized/modals/pack-modal/pack-modal.tsx'
import { TabSwitcherPacks } from '@/components/customized/tab-switcher-packs/tab-switcher-packs.tsx'
import { Trash } from '@/svg/trash-outline.tsx'

export const PacksList = () => {
  const [modal, setModal] = useState(false)

  return (
    <div className={s.packList}>
      <section className={s.headerSection}>
        <Typography as={'h1'} variant="large">
          Packs list
        </Typography>
        <Button onClick={() => setModal(true)}>Add New Pack</Button>
      </section>
      <section className={s.filterSection}>
        <TextField variant={'search'} className={s.inputSearch} />
        <TabSwitcherPacks />
        <Slider label={'Number of cards'} minValue={0} maxValue={12} />
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
