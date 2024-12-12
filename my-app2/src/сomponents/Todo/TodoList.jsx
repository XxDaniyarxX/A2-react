import React from 'react'
import {TodoItem} from './TodoItem.jsx'

export function TodoList({ data, removeTask }) {
  return (
    <div>
      {data.map((item) => (
        <TodoItem key={item.id} task={item} removeTask={removeTask} />
      ))}
    </div>
  );
}
