import { Button } from '@/components/ui'
import { TextField } from '@/components/ui/textField'

export function App() {
  return (
    <div>
      Hello
      <Button variant={'primary'}> Click </Button>
      <Button variant={'secondary'}> Click </Button>
      <Button variant={'tertiary'}> Click </Button>
      <div>
        <TextField variant={'input'} />
      </div>
    </div>
  )
}
