import React from 'react'

import { Badge } from '../Badge'

import './styles.scss'

export const CategoryList = ({
  items,
  activeId,
  ...props
}) => {
  return (
    <ul
      className='category-list'
      {...props}
    >
      {items.map(({ id, name, color }) => (
        <li
          key={id}
          className='category-list__item'
        >
          <Badge
            text={name}
            pinColor={color}
            pinSize={10}
            active={id === activeId}
            removable
          />
        </li>
      ))}
    </ul>
  )
}