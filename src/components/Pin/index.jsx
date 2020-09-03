import React from 'react'
import cn from 'classnames'

import './styles.scss'

export const Pin = ({
  size = 20,
  shape = 'circle',
  color = '#000',
  className
}) => {
  const classes = cn(
    'pin',
    `pin--${shape}`,
    className,
  )

  const styles = {
    width: size,
    height: size,
    backgroundColor: color
  }

  return (
    <span
      style={styles}
      className={classes}
    ></span>
  )
}