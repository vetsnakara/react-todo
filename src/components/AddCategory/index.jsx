import React, { useState } from 'react'
import Color from 'color'

import { Label } from '../Label'
import { Pin } from '../Pin'

import { SvgIcon } from '../SvgIcon'
import { Button } from '../Button'

import './styles.scss'

export const AddCategory = ({
  colors
}) => {
  const [open, setOpen] = useState(true)
  const [colorId, setColorId] = useState(colors[0].id)

  const handleToggleForm = () => setOpen(!open)

  const selecteColorId = 2

  return (
    <div className='add-category'>
      <button
        className='add-category__btn'
        onClick={handleToggleForm}
      >
        <Label
          iconName={open ? 'minus' : 'plus'}
          iconSize={14}
        >
          Добавить категорию
        </Label>
      </button>
      {open && (
        <div className='add-category__popup'>
          <button className="add-category__popup-close-btn">
            <SvgIcon
              name='close'
              size={20}
              fill='#5C5C5C'
            />
          </button>
          <input
            type='text'
            placeholder='Название категории'
            className='add-category__input'
            autoFocus
          />
          <div className='add-category__colors'>
            {colors.map(({ id, hex }) => (
              <button
                className='add-category__color-btn'
                style={{
                  borderColor: id === colorId
                    ? Color(hex).darken(0.5).hex()
                    : 'transparent'
                }}
                onClick={() => setColorId(id)}
              >
                <Pin
                  key={id}
                  color={hex}
                  size={18}
                />
              </button>
            ))}
          </div>
          {/* todo: make Button component */}
          <Button>Добавить</Button>
        </div>
      )
      }
    </div >
  )
}