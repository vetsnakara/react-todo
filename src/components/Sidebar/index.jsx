import React from 'react'
import cn from 'classnames'

import {
  Badge,
  CategoryList,
  AddCategory
} from '..'

import './styles.scss'

export const Sidebar = ({
  categories,
  colors,
  selectedCatergoryId,
  onCategorySelect,
  onCategoryRemove,
  onCatergoryAdd
}) => {
  return (
    <div className='sidebar'>
      <Badge
        text='Все задачи'
        iconName='list'
        iconSize={18}
        className={cn(
          'sidebar__all-tasks-btn',
          { 'active': !selectedCatergoryId }
        )}
        onClick={() => onCategorySelect(null)}
      />

      <CategoryList
        items={categories}
        selectedId={selectedCatergoryId}
        className='sidebar__category-list'
        onSelect={onCategorySelect}
        onRemove={onCategoryRemove}
      />

      <AddCategory
        colors={colors}
        onAdd={onCatergoryAdd}
      />
    </div>
  )
}

