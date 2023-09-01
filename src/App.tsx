import { Button, Header, TextField } from '@/components/ui'

export function App() {
  return (
    <div>
      Hello
      <Header isAuth={false} />
      <Header isAuth={true} />
      <Button variant={'primary'}> Click </Button>
      <Button variant={'secondary'}> Click </Button>
      <Button variant={'tertiary'}> Click </Button>
      <div>
        <TextField variant={'input'} name={'text'} />
      </div>
      <div style={{ padding: '10px 0' }}>
        <TextField variant={'inputWithIcon'} name={'password'} />
      </div>
      <div>
        <TextField variant={'search'} />
      </div>
    </div>
  )
}
