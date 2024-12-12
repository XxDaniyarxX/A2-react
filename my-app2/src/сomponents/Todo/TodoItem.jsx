import React from 'react'
import './Todo.css'

export function TodoItem({ task, removeTask }) {
  return (
    <div className='TodoItem'>
      <input type="checkbox" checked={task.completed ? 'true' : false}  />
      <div>{task.title}</div>
      <button className='btn' onClick={() => removeTask(task.id)}>Delete</button>
    </div>
  );
}
