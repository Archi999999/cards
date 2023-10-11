import { useState } from 'react'

import { Slider } from './slider.tsx'

export default {
  title: 'Components/Slider',
  component: Slider,
}
export const CustomValues = () => {
  const [currentMinValue, setCurrentMinValue] = useState(0)
  const [currentMaxValue, setCurrentMaxValue] = useState(90)
  const maxValue = 90

  return (
    <Slider
      maxValue={maxValue}
      currentMaxValue={currentMaxValue}
      currentMinValue={currentMinValue}
      label={'Label Slider'}
      valueChangeHandler={values => {
        setCurrentMinValue(values[0])
        setCurrentMaxValue(values[1])
      }}
    />
  )
}
