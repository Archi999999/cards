import { FC } from 'react'

import {Link, useNavigate} from 'react-router-dom'

import s from './header.module.scss'

import { Button } from '@/components/ui'
import { UserHeader } from '@/components/ui/header/user-header'
import { Typography } from '@/components/ui/typography/typography.tsx'
// import { useMeQuery } from '@/services/auth/auth.ts'
import { Logo } from '@/svg'
import {useDispatch} from "react-redux";
import {decksSlice} from "@/services/decks/decks.slice.ts";

type Props = {
  data: any
  isLoading: boolean
}

export const Header: FC<Props> = ({ data, isLoading }) => {
  // const { data, isLoading } = useMeQuery()

  // if (isLoading) {
  //   return <>Loading...</>
  // }

  const isAuth = !!data

  const name = data?.name
  const avatar = data?.avatar
  const email = data?.email

  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const backStart = () => {
    dispatch(decksSlice.actions.setCurrentPage(1))
    navigate('/')
  }


  return (
    <header className={`${s.header}`}>
      <button onClick={backStart} className={s.logoButton}>
        <Logo />
      </button>
      {!isAuth || isLoading ? (
        <Button variant={'primary'} as={Link} to={'/'}>
          <Typography>Sign in</Typography>
        </Button>
      ) : (
        <UserHeader name={name} avatar={avatar} email={email}/>
      )}
    </header>
  )
}
