import React, { useState } from 'react';

import {
  Sidebar,
  Tasks
} from './components';

import db from './db'

db.categories = db.categories.map(cat => {
  const { colorId } = cat
  const color = db.colors.find(({ id }) => id === colorId)
  return {
    ...cat,
    color: color.hex
  }
})

export const App = () => {
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
    if (!window.confirm('Удалить категорию?')) return
    setCategories(categories => categories.filter(({ id }) => id !== categoryId))
    selectCategory(null)
  }

  return (
    <div className='container'>
      <div className='todo'>
        <aside className='todo__sidebar'>
          <Sidebar
            selectedCatergoryId={categoryId}
            colors={db.colors}
            categories={categories}
            onCategorySelect={selectCategory}
            onCategoryRemove={removeCategory}
            onCatergoryAdd={addCategory}
          />
        </aside>
        <main className='todo__tasks'>
          <Tasks />
        </main>
      </div>
    </div>
  );
}
