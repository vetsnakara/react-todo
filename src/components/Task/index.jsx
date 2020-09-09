import React, { useState, useRef } from 'react'
import cn from 'classnames'

import {
  Checkbox,
  SvgIcon
} from '..'

import './styles.scss'

export const Task = ({
  task: {
    id,
    text: taskText,
    completed,
  },
  onToggleComplete,
  onRemove,
  onTextChange
}) => {
  const [editable, setEditable] = useState(false)
  const [text, setText] = useState(taskText)

  const inputRef = useRef()

  const classes = cn(
    'task',
    { 'task--completed': completed }
  )

  const handleTextChange = ({ target: { value } }) => setText(value)

  const handleSubmit = e => {
    e.preventDefault()
    inputRef.current.blur()
    onTextChange({ id, text })
  }

  const handleFocus = () => {
    setEditable(true)
  }

  const handleBlur = id => {
    setEditable(false)
    onTextChange({ id, text })
  }

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

      <form
        className='task__form'
        onSubmit={handleSubmit}
      >
        {/* use Input component: reuse code!!! */}
        <input
          ref={inputRef}
          className='task__input'
          type='text'
          value={text}
          onChange={handleTextChange}
          readOnly={!editable}
          onFocus={handleFocus}
          onBlur={() => handleBlur(id)}
        />
      </form>

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