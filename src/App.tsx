import { Button } from '@/components/ui'
import Icon from '@/components/ui/icon/icon.tsx'
import { TextField } from '@/components/ui/textField'

export function App() {
  return (
    <div>
      Hello
      <Button variant={'primary'}> Click </Button>
      <Button variant={'secondary'}> Click </Button>
      <Button variant={'tertiary'}> Click </Button>
      <Button variant={'primary'}>
        <Icon id={'calendar-outline'} />
        {'Click'}
      </Button>
      <div>
        <TextField variant={'input'} name={'Input'} />
      </div>
      <div style={{ padding: '10px 0' }}>
        <TextField variant={'inputWithIcon'} name={'name'} error={true} />
      </div>
      <div>
        <TextField variant={'search'} />
      </div>
    </div>
  )
}
