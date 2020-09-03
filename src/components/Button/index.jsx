import React from 'react'
import cn from 'classnames'

import './styles.scss'

export const Button = ({
  children,
  type = 'primary'
}) => {
  const classes = cn(
    'button',
    { [`button--${type}`]: type }
  )

  return (
    <button
      className={classes}
    >
      {children}
    </button>
  )
}