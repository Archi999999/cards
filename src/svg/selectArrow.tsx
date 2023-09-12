import { SVGProps } from 'react'

import s from './svg.module.scss'
export const SelectArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="current"
    xmlns="http://www.w3.org/2000/svg"
    className={s.selectArrow}
    {...props}
  >
    <path d="M4.94 5.72656L8 8.7799L11.06 5.72656L12 6.66656L8 10.6666L4 6.66656L4.94 5.72656Z" />
  </svg>
)
