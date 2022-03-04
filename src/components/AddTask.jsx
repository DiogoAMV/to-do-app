import React, { useState } from 'react'
import './AddTask.scss'
import Button from './Button'

export default function AddTask({ handleTaskAddition }) {
  const [inputData, setInputData] = useState('')

  const handleInputChange = e => {
    setInputData(e.target.value)
  }

  const handleAddTaskClick = () => {
    handleTaskAddition(inputData)
    setInputData('')
  }

  return (
    <>
      <div className="add-task-container">
        <input
          onChange={handleInputChange}
          value={inputData}
          className="add-task-input"
          type="text"
          placeholder="Adicionar tarefa"
        />
        <div className="add-task-button-container">
          <Button onClick={handleAddTaskClick}>Adicionar</Button>
        </div>
      </div>
    </>
  )
}
