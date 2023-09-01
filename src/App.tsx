import { Button, Header, Typography } from '@/components/ui'
import { TextField } from '@/components/ui/textField'
import { EyeOutline } from '@/svg'

export function App() {
  return (
    <div>
      Hello
      <Header isAuth={false} />
      <Header isAuth={true} />
      <Button variant={'primary'}> Click </Button>
      <Button variant={'secondary'}> Click </Button>
      <Button variant={'tertiary'}> Click </Button>
      <Button variant={'primary'}>
        <EyeOutline />
        <Typography>Click</Typography>
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
