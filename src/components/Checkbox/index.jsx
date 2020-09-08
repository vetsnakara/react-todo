import React from 'react'
import cn from 'classnames'

import { SvgIcon } from '..'

import './styles.scss'

export const Checkbox = ({
  id,
  className,
  checked = false,
  onChange = () => { }
}) => {
  const classes = cn(
    'checkbox',
    className
  )

  return (
    <div className={classes}>
      <input
        id={id}
        type='checkbox'
        checked={checked}
        onChange={onChange}
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