import React from 'react'

export const TodoItems = ({todo,onDelete}) => {
  return (
    <div>
         <h4>
            {todo.title}
        </h4>
        <p>
            
                {todo.dis}
            
        </p>
        <button className="btn btn-danger btn-sm" onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  )
}
