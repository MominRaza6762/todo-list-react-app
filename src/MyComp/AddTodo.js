import React from 'react'
import { useState } from 'react'

export const AddTodo = ({addTodo}) => {
    const [title , setTitle] = useState("");
    const [disc , setDisc] = useState("");

    const submit = (e) =>{
        e.preventDefault();
        if(!title || !disc)
        {
            alert("title or discription cant be blank");
        }
        else
        {
            addTodo(title,disc);
        setTitle(" ");
        setDisc(" ");

        }
        

    }


    return (
        <div className='container'>
         <h3>Ad Todo</h3>
            <form onSubmit={submit}>
                
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Todo Title</label>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" />
                  
            </div>
            <div className="mb-3">
                <label htmlFor="discp" className="form-label">Discription</label>
                <input type="text" value={disc} onChange={(e)=>setDisc(e.target.value)} className="form-control" id="discp"/>
            </div>
            <div className="mb-3 form-check">
               
            </div>
            <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
        </form>    
    </div>
  )
}
