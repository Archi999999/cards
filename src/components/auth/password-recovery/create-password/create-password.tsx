import {Card} from "@/components/ui/card/card.tsx";
import {Button, TextField, Typography} from "@/components";
import s from './create-password.module.scss'

export const CreatePassword = () => {
  return (
    <Card>
      <Typography variant={'large'} as={'h1'} className={s.title}>
        Create new password
      </Typography>
      <TextField variant={'input'} name={'password'} label={'Password'}/>
      <Typography as={'span'} className={s.text}>
        Create new password and we will send you further instructions to email
      </Typography>
      <Button className={s.button}>Create new password</Button>
    </Card>
  );
};
