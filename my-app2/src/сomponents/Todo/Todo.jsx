import React, {useState} from 'react'
import {Form} from './Form.jsx'
import {TodoList} from './TodoList.jsx'
import './Todo.css'

export function Todo() {
  const [tasks, setTasks] = useState([
    { title: 'Azim', completed: true, id: 1 },
    { title: 'Saltanat', completed: false, id: 2 },
    { title: 'Marjan', completed: true, id: 3 },
    { title: 'Beka', completed: false, id: 4 },
  ]);

  const addTask = (title) => {
    const newTask = {
      title,
      completed: false,
      id: tasks.length + 1
    };
    setTasks([...tasks, newTask]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="Todo">
      <Form addTask={addTask} />
      <TodoList data={tasks} removeTask={removeTask} />
    </div>
  );
}
