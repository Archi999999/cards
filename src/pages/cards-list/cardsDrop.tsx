import { Dropdown, DropdownItemWithIcon, Separator } from '@/components/ui/dropdown/dropdown.tsx'
import { Edit2Outline } from '@/svg/edit-2-outline.tsx'
import { PlayCircleOutline } from '@/svg/play-circle-outline.tsx'
import { Trash } from '@/svg/trash-outline.tsx'
import { VerticalOutline } from '@/svg/vertical-outline.tsx'

const CardsDrop = () => {
  return (
    <Dropdown trigger={<VerticalOutline />}>
      <DropdownItemWithIcon icon={<PlayCircleOutline />} text={'Learn'} onClick={() => {}} />
      <Separator />
      <DropdownItemWithIcon
        icon={<Edit2Outline color={'white'} />}
        text={'Edit'}
        onClick={() => {}}
      />
      <Separator />
      <DropdownItemWithIcon icon={<Trash />} text={'Delete'} onClick={() => {}} />
    </Dropdown>
  )
}

export default CardsDrop
