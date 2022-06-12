import React from 'react'

export default function Todo({ todo }) {
  return (
    <div>
        <labe>
            <input type='checkbox' checked={todo.complete} />
            {todo.name}
        </labe>
        {todo.name}
    </div>
  )
}
