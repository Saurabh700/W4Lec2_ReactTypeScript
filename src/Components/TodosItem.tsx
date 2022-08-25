import React from 'react'
import { TodoItems } from './Todos'

const TodosItem = ({id, title, status}: TodoItems) => {
  return (
    <div>
        <span>{id}-{title} - {status ? 'True': 'False'}</span> 
    </div>
  )
}

export default TodosItem