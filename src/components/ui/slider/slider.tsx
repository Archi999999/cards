import { FC, useState } from 'react'

import * as RadixSlider from '@radix-ui/react-slider'

import s from './slider.module.scss'

import { WindowSlider } from '@/components/ui/slider/windowSlider.tsx'

type Props = {
  minValue: number
  maxValue: number
}

export const Slider: FC<Props> = ({ minValue, maxValue }) => {
  const [currentMinValue, setMinValue] = useState(minValue)
  const [currentMaxValue, setMaxValue] = useState(maxValue)
  const MinValueHandler = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (e.currentTarget.ariaValueNow) setMinValue(+e.currentTarget.ariaValueNow)
  }

  const MaxValueHandler = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (e.currentTarget.ariaValueNow) setMaxValue(+e.currentTarget.ariaValueNow)
  }

  return (
    <div className={s.slider}>
      <WindowSlider value={currentMinValue} />
      <RadixSlider.Root
        className={s.sliderRoot}
        defaultValue={[minValue, maxValue]}
        max={100}
        step={1}
      >
        <RadixSlider.Track className={s.sliderTrack}>
          <RadixSlider.Range className={s.sliderRange} />
        </RadixSlider.Track>
        <RadixSlider.Thumb
          className={s.sliderThumb}
          aria-label="min"
          onClick={e => MinValueHandler(e)}
        />
        <RadixSlider.Thumb
          className={s.sliderThumb}
          aria-label="max"
          onClick={e => MaxValueHandler(e)}
        />
      </RadixSlider.Root>
      <WindowSlider value={currentMaxValue} />
    </div>
  )
}
