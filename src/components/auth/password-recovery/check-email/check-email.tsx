import {Card} from "@/components/ui/card/card.tsx";
import {Button, Typography} from "@/components";
import s from './check-email.module.scss'
import {CheckEmailIcon} from "@/svg/check-email-icon.tsx";

export const CheckEmail = () => {
  return (
    <Card className={s.card}>
      <Typography variant={'large'} as={'h1'} className={s.title}>
        Check Email
      </Typography>
      <CheckEmailIcon/>
      <Typography className={s.text}>
        We’ve sent an Email with instructions to example@mail.com
      </Typography>
      <Button className={s.button} fullWidth>
        Back to Sign in
      </Button>
    </Card>
  );
};
