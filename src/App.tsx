import { Button, Header, TextField } from '@/components/ui'
import { Select } from '@/components/ui/select/select.tsx'
import { SelectSecond } from '@/components/ui/select/selectSecond.tsx'

export const people = [
  { value: '1', label: 'Durward Reynolds' },
  { value: '2', label: 'Kenton Towne' },
  { value: '3', label: 'Therese Wunsch' },
  { value: '4', label: 'Benedict Kessler' },
  { value: '5', label: 'Katelyn Rohan' },
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
        <SelectSecond options={people} placeholder={'select'} label={'Select'} />
      </div>
    </div>
  )
}
