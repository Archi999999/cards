import {FC, useEffect, useState} from 'react'

import {Link, useParams} from 'react-router-dom'

import styles from './cards.module.scss'

import {Button, TextField, Typography} from '@/components'
import {CreateCardModal} from '@/components/customized/modals/card-modal/create-card-modal.tsx'
import {CardsTable} from '@/pages/cards-list/cards-table/CardsTable.tsx'
import {useMeQuery} from '@/services/auth/auth.ts'
import {useGetCardsQuery} from '@/services/cards/cards.ts'
import {useGetDeckByIdQuery} from '@/services/decks/decks.ts'
import {ArrowBack} from '@/svg/arrow-back-outline.tsx'
import {useDispatch} from "react-redux";
import {cardsSlice} from "@/services/cards/cards.slice.ts";

type CardsProps = {}
export const Cards: FC<CardsProps> = ({}) => {
    const {deckId} = useParams<{ deckId: string }>()

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(cardsSlice.actions.setDeckID(deckId!))
    }, []);

    const {data: {id: authorId} = {}} = useMeQuery()
    const {data: dataCards} = useGetCardsQuery({
        id: deckId || '',
    })

    const {data: {name: cardName, userId: currentId} = {}} = useGetDeckByIdQuery({
        id: deckId || '',
    })


    const [openModalNewCard, setOpenModalNewCard] = useState(false)

    const isMyCard = currentId === authorId

    const createNewCardButton = () => {
        setOpenModalNewCard(true)
    }

    return (
        <div className={styles.wrapper}>
            <Link className={styles.linkBack} to={`/`}>
                <ArrowBack/>
                <Typography variant={'body_2'}> Back to Packs List</Typography>
            </Link>
            <div className={styles.headerCards}>
                <Typography variant={'large'}>{cardName}</Typography>
                {isMyCard && dataCards?.items.length !== 0 && (
                    <Button variant={'primary'} onClick={createNewCardButton}>
                        Add New Card
                    </Button>
                )}
                {!isMyCard && dataCards?.items.length !== 0 && (
                    <Button variant={'primary'} disabled={dataCards?.items.length === 0}>
                        Learn to Pack
                    </Button>
                )}
            </div>
            <TextField className={styles.inputSearch} variant={'search'}/>
            <CardsTable
                data={dataCards && dataCards.items}
                isMyCard={isMyCard}
                createNewCardButton={createNewCardButton}
            />
            {openModalNewCard && <CreateCardModal setModal={setOpenModalNewCard} deckId={deckId}/>}
        </div>
    )
}
