import React, { useState, useEffect } from 'react'
import './Todo.css'

const ToDo = () => {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState('')

  const showNotification = (text) => {
    if (Notification.permission === 'granted') {
      new Notification('PWA semana 7', {
        body: text
      })
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          new Notification('PWA semana 7', {
            body: text
          })
        }
      })
    }
  }

  const addTask = () => {
    setTasks([...tasks, input])
    showNotification('Tarea añadida: ' + input)
    setInput('')
  }

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index))
    showNotification('Tarea eliminada ' + tasks[index])
  }

  return (
    <div className='container'>
      {' '}
      <h1>Lista de tareas</h1>{' '}
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Añadir una tarea'
      />{' '}
      <button onClick={addTask}>Añadir tarea</button>{' '}
      <ul>
        {' '}
        {tasks.map((task, index) => (
          <li key={index + '-' + task}>
            {task} <button onClick={() => deleteTask(index)}>X</button>
          </li>
        ))}{' '}
      </ul>{' '}
    </div>
  )
}
export default ToDo
