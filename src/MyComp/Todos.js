import React from 'react'
import { TodoItems } from './TodoItems'

export const Todos = ({todos,fnDelete}) => {
  return (
    <div className="container">
    <h3 >Todos List</h3>
   {todos.length===0? "No todos to display" :
    todos.map((a)=> { 
        return (<TodoItems todo = {a} key={a.sno} onDelete = {fnDelete}/>) 
    }) } 
    
    
  </div>
  )
}
