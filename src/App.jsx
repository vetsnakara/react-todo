import React from 'react';

import { Badge } from './components/Badge'
import { CategoryList } from './components/CategoryList'
import { AddCategory } from './components/AddCategory'

import db from './db'

db.categories = db.categories.map(cat => {
  const { colorId } = cat
  const color = db.colors.find(color => color.id === colorId)
  return {
    ...cat,
    color: color.hex
  }
})

const activeId = null;

const App = () => {
  return (
    <div className='container'>
      <div className='todo'>
        <div className='todo__sidebar'>
          <Badge
            text='Все задачи'
            iconName='list'
            iconSize={18}
            className='todo__all-tasks-btn'
            active={!activeId}
          />
          <CategoryList
            items={db.categories}
            activeId={activeId}
            className='todo__category-list'
          />
          <AddCategory colors={db.colors} />
        </div>
        <div className='todo__tasks'>
          Tasks
      </div>
      </div>
    </div>
  );
}

export default App;
