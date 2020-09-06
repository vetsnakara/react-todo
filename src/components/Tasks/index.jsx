import React from 'react'

import { Checkbox } from '..'

import './styles.scss'

export const Tasks = () => {
  return (
    <React.Fragment>
      <h2 className='tasks__category-title'>Фронтенд</h2>
      <Checkbox id={1} />
    </React.Fragment>
  )
}