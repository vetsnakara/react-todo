import React from 'react'
import cn from 'classnames'

import { SvgIcon } from '../SvgIcon'
import { Label } from '../Label'

import './styles.scss'

export const Badge = ({
  text,
  iconName = '',
  iconSize = 10,
  pinSize = 10,
  pinColor = '#000',
  removable = false,
  className,
  onClick = () => { },
  onRemove = () => { }
}) => {
  const classes = cn(
    'badge',
    className
  )

  const labelProps = {
    iconName,
    iconSize,
    pinColor,
    pinSize
  }

  const handleRemove = e => {
    e.stopPropagation()
    onRemove()
  }

  return (
    <div
      className={classes}
      onClick={onClick}
    >
      <Label {...labelProps}>{text}</Label>

      {removable && (
        <button
          className='badge__remove-btn'
          onClick={handleRemove}
        >
          <SvgIcon
            name='remove'
            size={10}
          />
        </button>
      )}
    </div>
  )
}