
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removedTodo } from '../features/todo/todoSlice';

const Todoes = () => {

  useState(()=>{

  },[])

  const todos = useSelector(state => state.todos)
  console.log(todos);

  const dispatch = useDispatch()

  const handleDelete = (id) => {

    dispatch(removedTodo(id))


  }

  return (
    <>
      <dir>Todos</dir>
      {
        todos.length ? todos.map((todo) => {
          return <div className='relative border px-4 py-2 rounded mt-4 text-white w-[15rem] mx-auto mb-2 bg-zinc-800 ' key={todo.id}>{todo.text} <div onClick={() => handleDelete(todo.id)} className='absolute bg-red-600 right-0 top-0 h-full w-[30px] overflow-hidden flex items-center justify-center'><i className="fa fa-trash text-lg"></i></div> </div>
        }) : "No Todos Yet"
      }

    </>
  )
}

export default Todoes
