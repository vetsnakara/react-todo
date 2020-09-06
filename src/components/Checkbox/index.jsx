import React from 'react'

import { SvgIcon } from '..'

import './styles.scss'

export const Checkbox = ({ id }) => {
  return (
    <div className='checkbox'>
      <input
        id={id}
        type='checkbox'
      />

      <label
        className='checkbox__label'
        htmlFor={id}
      >
        <SvgIcon
          name='check'
          size={10}
        />
      </label>
    </div>
  )
}