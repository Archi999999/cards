import { Button, Header, TextField } from '@/components/ui'
import { Select } from '@/components/ui/select/select.tsx'
import { SelectSecond } from '@/components/ui/select/selectSecond.tsx'

export const technologies = [
  { id: '1', value: 'React' },
  { id: '2', value: 'Redux' },
  { id: '3', value: 'HTML' },
  { id: '4', value: 'CSS' },
  { id: '5', value: 'REST API' },
]

export function App() {
  return (
    <div style={{ marginRight: '5px', marginLeft: '10px' }}>
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
      <Select />
      <div>
        <Select />
      </div>
      <div>
        <SelectSecond
          options={technologies}
          placeholder={'technologies'}
          label={'choose technologies'}
        />
      </div>
    </div>
  )
}
