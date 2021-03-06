import React from 'react'
import cn from 'classnames'

import './styles.scss'

export const Button = ({
  children,
  variant = 'primary',
  ...props
}) => {
  const classes = cn(
    'button',
    { [`button--${variant}`]: variant }
  )

  return (
    <button
      className={classes}
      {...props}
    >
      {children}
    </button>
  )
}