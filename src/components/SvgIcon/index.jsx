import React from 'react'

import { icons } from './icons'

export const SvgIcon = ({
  name,
  width,
  height,
  size = 100,
  ...props
}) => {
  const icon = icons[name]
    ? icons[name]
    : null

  if (!icon) return null

  return (
    <svg
      width={width || size}
      height={height || size}
      viewBox={icon.viewBox}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      {icon.el}
    </svg>
  )
}