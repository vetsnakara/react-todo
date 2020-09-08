import React, { useState } from 'react'
import cn from 'classnames'

import {
  Checkbox,
  SvgIcon
} from '..'

import './styles.scss'

export const Task = ({
  task: {
    id,
    text,
    completed,
  },
  onToggleComplete,
  onRemove
}) => {
  const [editable, setEditable] = useState(false)

  const classes = cn(
    'task',
    { 'task--completed': completed }
  )

  return (
    <div
      key={id}
      className={classes}
    >
      <Checkbox
        id={id}
        checked={completed}
        className='task__checkbox'
        onChange={() => onToggleComplete(id)}
      />

      {/* use Input component: reuse code!!! */}
      <input
        className='task__input'
        type='text'
        value={text}
        readOnly={!editable}
        onFocus={() => setEditable(true)}
        onBlur={() => setEditable(false)}
      />

      {/* make component icon button */}
      <button
        className='task__remove-btn'
        onClick={() => onRemove(id)}
      >
        <SvgIcon
          name='remove'
          size={12}
        />
      </button>
    </div>
  )
}