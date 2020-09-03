import React from 'react'

import { SvgIcon } from '../SvgIcon'
import { Pin } from '../Pin'

import './styles.scss'

export const Label = ({
  iconName,
  iconSize,
  iconColor,
  pinColor,
  pinSize,
  children: text
}) => {
  return (
    <div className="label">
      <span className='label__icon' >
        {iconName
          ? (
            <SvgIcon
              name={iconName}
              size={iconSize}
              fill={iconColor}
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