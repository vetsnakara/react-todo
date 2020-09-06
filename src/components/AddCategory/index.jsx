import React, { useState } from 'react'
import cn from 'classnames'
import Color from 'color'

import {
  Label,
  Pin,
  SvgIcon,
  Button,
  Input
} from '..'

import './styles.scss'

export const AddCategory = ({
  colors,
  onAdd
}) => {
  const { id: defaultColorId } = colors[0]

  const [open, setOpen] = useState(false)
  const [colorId, setColorId] = useState(defaultColorId)
  const [name, setName] = useState('')
  const [error, setError] = useState(null)

  /**
   * !!!
   */
  const resetForm = () => {
    setName('')
    setColorId(defaultColorId)
    setError(null)
  }

  const togglePopup = () => {
    setOpen(!open)
  }

  const closePopup = () => {
    resetForm()
    setOpen(false)
  }

  const handleColorIdChange = id => {
    setColorId(id)
  }

  const handleNameChange = ({
    currentTarget: { value: name }
  }) => {
    setName(name)
    setError(null)
  }

  const handleAdd = e => {
    e.preventDefault()

    if (!name) {
      setError('Заполните название категории')
      return
    }

    resetForm()

    onAdd({
      colorId,
      name
    })

    closePopup()
  }

  return (
    <div className='add-category'>
      <button
        className='add-category__btn'
        onClick={togglePopup}
      >
        <Label
          iconName={open ? 'minus' : 'plus'}
          iconSize={14}
        >
          Добавить категорию
        </Label>
      </button>

      {open && (
        <form
          className='add-category__popup'
          onSubmit={handleAdd}
        >
          <button
            type='button'
            className='add-category__popup-close-btn'
            onClick={closePopup}
          >
            <SvgIcon
              name='close'
              size={20}
              fill='#5C5C5C'
            />
          </button>

          <div className='add-category__popup-input'>
            <Input
              value={name}
              onChange={handleNameChange}
              placeholder='Название категории'
              className={cn({ 'error': error })}
              autoFocus
            />
            {error && (
              <span className='add-category__popup-input-error'>
                {error}
              </span>
            )}
          </div>

          <div className='add-category__colors'>
            {colors.map(({ id, hex }) => (
              <button
                type='button'
                key={id}
                className='add-category__color-btn'
                style={{
                  borderColor: id === colorId
                    ? Color(hex).darken(0.5).hex()
                    : 'transparent'
                }}
                onClick={() => handleColorIdChange(id)}
              >
                <Pin
                  key={id}
                  color={hex}
                  size={18}
                />
              </button>
            ))}
          </div>

          <Button type='submit'>Добавить</Button>
        </form>
      )}
    </div >
  )
}