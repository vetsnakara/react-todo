import React from 'react'
import cn from 'classnames'

import { SvgIcon } from '../SvgIcon'
import { Label } from '../Label'

import './styles.scss'

const CLASSNAME = 'badge'

export const Badge = ({
  text,
  iconName = '',
  iconSize = 10,
  pinSize = 10,
  pinColor = '#000',
  removable = false,
  active = false,
  className,
  onClick = () => { },
  onRemove = () => { }
}) => {
  const classes = cn(
    CLASSNAME,
    { [`${CLASSNAME}--active`]: active },
    className
  )

  const labelProps = {
    iconName,
    iconSize,
    iconColor: '#7C7C7C',
    pinColor,
    pinSize
  }

  return (
    <div
      className={classes}
      onClick={onClick}
    >
      <Label {...labelProps}>{text}</Label>

      {removable && (
        <button className='badge__remove'>
          <SvgIcon
            name='remove'
            size={10}
            fill='#E3E3E3'
          />
        </button>
      )}
    </div>
  )
}