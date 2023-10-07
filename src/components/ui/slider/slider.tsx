import { FC, useEffect, useState } from 'react'

import { Label } from '@radix-ui/react-label'
import * as RadixSlider from '@radix-ui/react-slider'
import { useDispatch } from 'react-redux'

import s from './slider.module.scss'

import { Typography } from '@/components'
import { WindowSlider } from '@/components/ui/slider/windowSlider.tsx'
import { decksSlice } from '@/services/decks/decks.slice.ts'

type Props = {
  label?: string
  maxValue?: number
}

export const Slider: FC<Props> = ({ maxValue = 1, label }) => {
  const [currentMinValue, setMinValue] = useState(0)
  const [currentMaxValue, setMaxValue] = useState(maxValue)
  const dispatch = useDispatch()

  useEffect(() => {
    setMaxValue(maxValue)
    dispatch(decksSlice.actions.setMaxCardsCount(maxValue))
  }, [maxValue])

  useEffect(() => {
    const timerId = setTimeout(() => {
      dispatch(decksSlice.actions.setMinCardsCount(currentMinValue))
      dispatch(decksSlice.actions.setMaxCardsCount(currentMaxValue))
    }, 500)

    return () => clearTimeout(timerId)
  }, [currentMinValue, currentMaxValue])

  const valueChangeHandler = (value: number[]) => {
    setMinValue(value[0])
    // if (value[0] !== currentMinValue) dispatch(decksSlice.actions.setMinCardsCount(value[0]))
    setMaxValue(value[1])
    // if (value[1] !== currentMaxValue) dispatch(decksSlice.actions.setMaxCardsCount(value[1]))
  }

  return (
    <Label>
      <Typography>{label}</Typography>
      <div className={s.slider}>
        <WindowSlider value={currentMinValue} />
        <RadixSlider.Root
          className={s.sliderRoot}
          max={maxValue}
          step={1}
          value={[currentMinValue, currentMaxValue]}
          onValueChange={value => valueChangeHandler(value)}
        >
          <RadixSlider.Track className={s.sliderTrack}>
            <RadixSlider.Range className={s.sliderRange} />
          </RadixSlider.Track>
          <RadixSlider.Thumb className={s.sliderThumb} aria-label="min" />
          <RadixSlider.Thumb className={s.sliderThumb} aria-label="max" />
        </RadixSlider.Root>
        <WindowSlider value={currentMaxValue} />
      </div>
    </Label>
  )
}
