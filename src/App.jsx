import React, { useState } from 'react';

import {
  Sidebar,
  Tasks
} from './components';

import db from './db.json'

db.categories = db.categories.map(category => {
  const { colorId } = category
  const color = db.colors.find(({ id }) => id === colorId)
  return {
    ...category,
    color: color.hex
  }
})

export const App = () => {
  const [categories, setCategories] = useState(db.categories)
  const [tasks, setTasks] = useState(db.tasks)
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

  const handleTaskToggle = id => {
    setTasks(tasks => tasks.map(t => t.id === id
      ? ({
        ...t,
        completed: !t.completed
      }) : t
    ))
  }

  const handleTaskRemove = id => {
    if (!window.confirm('Удалить задачу?')) return
    setTasks(tasks => tasks.filter(task => task.id !== id))
  }

  const handleTaskTextChange = ({ id, text }) => {
    setTasks(tasks => tasks.map(t => t.id === id ? ({ ...t, text }) : t))
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
          <Tasks
            tasks={tasks}
            categories={categories}
            categoryId={categoryId}
            onTaskToggle={handleTaskToggle}
            onTaskRemove={handleTaskRemove}
            onTaskTextChange={handleTaskTextChange}
          />
        </main>
      </div>
    </div>
  );
}
