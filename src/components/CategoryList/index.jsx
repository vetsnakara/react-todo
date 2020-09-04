import React from 'react'
import cn from 'classnames'

import { Badge } from '../Badge'

import './styles.scss'

export const CategoryList = ({
  items,
  selectedId,
  onSelect,
  onRemove,
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
            className={cn({ 'active': id === selectedId })}
            removable
            onClick={() => onSelect(id)}
            onRemove={() => onRemove(id)}
          />
        </li>
      ))}
    </ul>
  )
}