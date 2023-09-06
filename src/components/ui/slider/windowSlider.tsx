import s from './slider.module.scss'

type Props = {
  value: number
}
export const WindowSlider: React.FC<Props> = ({ value }) => {
  return <div className={s.window}>{value}</div>
}
