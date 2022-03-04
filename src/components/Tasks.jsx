import React from 'react'
import Task from './Task'

export default function Tasks({ tasks, handleTaskClick, handleTaskDeletion }) {
  return (
    <>
      {tasks.map(task => (
        <Task
          task={task}
          handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion}
        />
      ))}
    </>
  )
}
