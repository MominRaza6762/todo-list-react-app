import React from 'react';
import { AddTodo } from './AddTodo';
import { Todos } from './Todos';
import { useState } from 'react';
import { useEffect } from 'react';

export const Home = () => {
    let initTodo;
    if (localStorage.getItem("objTodos") === null) {
      initTodo = [];
    }
    else {
      initTodo = JSON.parse(localStorage.getItem("objTodos"))
    }

    const del = (todo) => {
        setObjTodos(
          objTodos.filter(
            (e) => {
              return e !== todo;
            }
          )
        );
        localStorage.setItem("objTodos", JSON.stringify(objTodos));
      }
    
    const fnAddTodo = (t, d) => {
        let sno;
        if (objTodos.length === 0) {
          sno = 0;
        }
        else {
          sno = objTodos[objTodos.length - 1].sno + 1;
        }
    
        const myTodos = {
          sno: sno,
          title: t,
          dis: d,
        }
        setObjTodos([...objTodos, myTodos]);

      }
      const [objTodos, setObjTodos] = useState(initTodo);

  

  useEffect(() => {
    localStorage.setItem("objTodos", JSON.stringify(objTodos));
  }, [objTodos]);


  return (
    <div>
        <AddTodo addTodo={fnAddTodo} />
        <Todos todos={objTodos} fnDelete={del} />
    </div>
  )
}
