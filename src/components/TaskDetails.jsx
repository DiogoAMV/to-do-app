import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import './TaskDetails.scss'

import Button from './Button'

export default function TaskDetails() {
  const params = useParams()
  const history = useHistory()

  const handleBackButtonClick = () => {
    history.goBack()
  }

  return (
    <>
      <div className="back-button-container">
        <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
          amet assumenda molestiae eligendi architecto perspiciatis?
        </p>
      </div>
    </>
  )
}
