import React from 'react'
import cn from 'classnames'

import { SvgIcon } from '../SvgIcon'
import { Pin } from '../Pin'

import './styles.scss'

export const Label = ({
  iconName,
  iconSize,
  pinColor,
  pinSize,
  children: text,
  className
}) => {
  const classes = cn(
    'label',
    className
  )

  return (
    <div className={classes}>
      <span className='label__icon' >
        {iconName
          ? (
            <SvgIcon
              name={iconName}
              size={iconSize}
            />
          )
          : (
            <Pin
              color={pinColor}
              size={pinSize}
            />
          )
        }
      </span>

      <span className='label__text'>{text}</span>
    </div>
  )
}