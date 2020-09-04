import React from 'react'
import cn from 'classnames'

import './styles.scss'

export const Input = ({
  type = 'text',
  className,
  ...props
}) => {
  const classes = cn(
    'input',
    className
  )

  return (
    <input
      type={type}
      className={classes}
      {...props}
    />
  )
}