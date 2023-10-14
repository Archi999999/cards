import {Card} from "@/components/ui/card/card.tsx";
import {Button, TextField, Typography} from "@/components";
import {useLogoutMutation, useMeQuery, useUpdateMeMutation} from "@/services/auth/auth.ts";
import {Logout} from "@/svg";
import s from './edit-profile.module.scss'
import {Avatar} from "@/components/ui/avatar/avatar.tsx";
import {Edit2Outline} from "@/svg/edit-2-outline.tsx";
import {KeyboardEvent, useState} from "react";

export const EditProfile = () => {
    const {data} = useMeQuery()
    const {name, email} = data || {};
    const [logout] = useLogoutMutation()
    const [showInput, setShowInput] = useState(false)
    const [newName, setNewName] = useState<string>(name!)

    const [updateMe] = useUpdateMeMutation()
    const renameHandler = () => {
        console.log(newName)
        console.log(data)
        updateMe({name: newName!})
        setShowInput(false)
    }

    const dontRename = () => {
        setShowInput(false)
        setNewName(name!)
    }

    const keyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Escape") dontRename()
        if (event.key === 'Enter') renameHandler()
    }

    return (
        <Card className={s.profile}>
            <Typography variant={'large'} className={s.title}>Personal Information</Typography>
            <div className={s.avatarBlock}>
                <Avatar className={s.avatar}/>
                <button className={`${s.buttonEdit} ${s.buttonEditImage}`}>
                    <Edit2Outline color={'white'}/>
                </button>
            </div>
            {
                !showInput
                    ? <>
                        <div className={s.nameBlock}>
                            <Typography variant={'h1'}>{name}</Typography>
                            <button className={s.buttonEdit} onClick={() => setShowInput(true)}>
                                <Edit2Outline color={'white'}/>
                            </button>
                        </div>
                        <Typography className={s.email}>{email}</Typography>
                        <Button variant={'secondary'} className={s.logoutButton} onClick={() => logout()}>
                            <Logout/>Logout
                        </Button>
                    </>
                    : <>
                        <TextField onValueChange={setNewName} value={newName} label={'Nickname'} className={s.textField}
                                   autoFocus onBlur={dontRename} onKeyDown={keyDownHandler}/>
                        <Button fullWidth className={s.buttonSaveName} onClick={renameHandler} >Save Changes</Button>
                    </>
            }
        </Card>
    );
};
