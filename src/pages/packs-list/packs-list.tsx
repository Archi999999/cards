import s from './pack-list.module.scss'

import { Button, Slider, TabSwitcher, TextField, Typography } from '@/components'
import { Trash } from '@/svg/trash-outline.tsx'

export const PacksList = () => {
  return (
    <div className={s.packList}>
      <section className={s.headerSection}>
        <Typography as={'h1'} variant="large">
          Packs list
        </Typography>
        <Button>Add New Pack</Button>
      </section>
      <section className={s.filterSection}>
        <TextField variant={'search'} className={s.inputSearch} />
        <TabSwitcher label={'Show packs cards'} />
        <Slider label={'Number of cards'} minValue={0} maxValue={12} />
        <Button variant={'secondary'}>
          <Trash />
          Clear Filter
        </Button>
      </section>
    </div>
  )
}
