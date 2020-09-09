import React from 'react'

import {
  Task,
  Input,
  Button,
  SvgIcon
} from '..'

import './styles.scss'

export const Tasks = ({
  tasks,
  categories,
  categoryId,
  onTaskToggle,
  onTaskRemove,
  onTaskTextChange
}) => {
  const tasksByCategory = categories.reduce((res, category) => {
    const { id: categoryId } = category

    res[categoryId] = {
      category,
      tasks: tasks.filter(t => t.categoryId === categoryId)
    }

    return res
  }, {})

  const categoriesToShow = categoryId
    ? [categoryId]
    : categories
      .filter(c => tasksByCategory[c.id].tasks.length > 0)
      .map(c => c.id)

  return (
    <div className='tasks'>
      {categoriesToShow.map(categoryId => {
        const { category, tasks } = tasksByCategory[categoryId]

        return (
          <div
            key={categoryId}
            className='tasks__category'
          >
            <h2 className='tasks__category-title'>
              <span style={{ color: category.color }}>{category.name}</span>
            </h2>

            <ul className='tasks__list'>
              {tasks.map(task => (
                <li
                  key={task.id}
                  className='tasks__item'
                >
                  <Task
                    task={task}
                    onToggleComplete={onTaskToggle}
                    onTextChange={onTaskTextChange}
                    onRemove={onTaskRemove}
                  />
                </li>
              ))}
            </ul>
            <div className='add-task'>
              <button className='add-task__toggle-btn'>
                <SvgIcon name='plus' size={14} />
                <span>
                  Новая задача
                </span>
              </button>
              <form>
                <Input
                  className='add-task__input'
                />
                <div className='add-task__buttons'>
                  <Button>Добавить задачу</Button>
                  <Button variant="secondary">Отмена</Button>
                </div>
              </form>
            </div>
          </div>
        )
      })}
    </div>
  )
}