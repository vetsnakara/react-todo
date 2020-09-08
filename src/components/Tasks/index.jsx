import React from 'react'

import {
  Task
} from '..'

import './styles.scss'

export const Tasks = ({
  tasks,
  onTaskToggle,
  onTaskRemove
}) => {
  return (
    <React.Fragment>
      <h2 className='tasks__category-title'>
        <span>Frontend</span>
        {/* <SvgIcon
          name='edit'
          size={15}
        /> */}
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
              onRemove={onTaskRemove}
            />
          </li>
        ))}
      </ul>
    </React.Fragment>
  )
}