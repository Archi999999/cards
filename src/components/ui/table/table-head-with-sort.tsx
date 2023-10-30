import {TableHead} from "@/components/ui/table/table.tsx";
import {FC, ReactNode} from "react";
import s from "./table.module.scss";
import {Arrow} from "@/svg/arrow.tsx";

type Props = {
    name: string
    currentNameSort: string
    children: ReactNode
    className?: string
    callBack: (name: string)=>void
}

export const TableHeadWithSort:FC<Props> = (
    {
        name,
        currentNameSort,
        children,
        callBack,
    }
) => {

    return (
        <TableHead >
            <button onClick={()=>callBack(name)} className={s.headSort} >
                {children}
                <Arrow className={`${s.arrow} ${(currentNameSort===name)? s.active: ''}`} />
            </button>
        </TableHead>
    );
};
