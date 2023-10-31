import {TableHead} from "@/components/ui/table/table.tsx";
import {FC, ReactNode} from "react";
import s from "./table.module.scss";
import {Arrow} from "@/svg/arrow.tsx";
import {Field} from "@/services/decks/types.ts";

type Props = {
    name: Field
    currentNameSort: string
    direction: string
    children: ReactNode
    className?: string
    callBack: (name: Field)=>void
}

export const TableHeadWithSort:FC<Props> = (
    {
        name,
        currentNameSort,
        children,
        direction,
        callBack,
    }
) => {

    return (
        <TableHead >
            <button onClick={()=>callBack(name)} className={s.headSort} >
                {children}
                <Arrow className={`${s.arrow} ${(currentNameSort===name)? s.active: ''} ${direction==='asc'? s.rotate : ''}`} />
            </button>
        </TableHead>
    );
};
