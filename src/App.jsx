import React, { useState } from 'react';
import cn from 'classnames'

import { Badge } from './components/Badge'
import { CategoryList } from './components/CategoryList'
import { AddCategory } from './components/AddCategory'

import db from './db'

db.categories = db.categories.map(cat => {
  const { colorId } = cat
  const color = db.colors.find(({ id }) => id === colorId)
  return {
    ...cat,
    color: color.hex
  }
})

const App = () => {
  const [categories, setCategories] = useState(db.categories)
  const [categoryId, setCategoryId] = useState(null)

  const selectCategory = id => setCategoryId(id)

  const addCategory = category => {
    const { hex } = db.colors.find(({ id }) => id === category.colorId)
    const categoryId = categories[categories.length - 1].id + 1

    setCategories(categories => ([
      ...categories,
      {
        id: categoryId,
        color: hex,
        ...category
      }
    ]))

    selectCategory(categoryId)
  }

  const removeCategory = categoryId => {
    setCategories(categories => categories.filter(({ id }) => id !== categoryId))
    selectCategory(null)
  }

  return (
    <div className='container'>
      <div className='todo'>
        <div className='todo__sidebar'>
          <Badge
            text='Все задачи'
            iconName='list'
            iconSize={18}
            className={cn(
              'todo__all-tasks-btn',
              { 'active': !categoryId }
            )}
            onClick={() => selectCategory(null)}
          />

          <CategoryList
            items={categories}
            selectedId={categoryId}
            className='todo__category-list'
            onSelect={selectCategory}
            onRemove={removeCategory}
          />

          <AddCategory
            colors={db.colors}
            onAdd={addCategory}
          />
        </div>
        <div className='todo__tasks'>
          Tasks
      </div>
      </div>
    </div>
  );
}

export default App;
