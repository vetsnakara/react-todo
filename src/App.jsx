import React from 'react';

import { SvgIcon } from './Icon'

const App = () => {
  return (
    <div className="container">
      <div className="todo">
        <div className="todo__sidebar">
          <SvgIcon width={40} height={40} name="add" />
          <SvgIcon width={40} height={40} name="check" />
          <SvgIcon width={40} height={40} name="close" />
          <SvgIcon width={40} height={40} name="edit" />
          <SvgIcon width={40} height={40} name="list" />
          <SvgIcon width={40} height={40} name="remove" />
          Sidebar
      </div>
        <div className="todo__tasks">
          Tasks
      </div>
      </div>
    </div>
  );
}

export default App;
