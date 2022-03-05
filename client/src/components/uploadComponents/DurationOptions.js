import React, { Component } from 'react'
import Select from 'react-select'

const options = [
  { value: 'mins', label: 'mins' },
  { value: 'hours', label: 'hours' },
  { value: 'days', label: 'days' },
  { value: 'weeks', label: 'weeks' },
  { value: 'months', label: 'months' }
]

const DurationOptions = () => (
  <Select options={options} 
    defaultValue={[options[1]]}
  />
)

export default DurationOptions;