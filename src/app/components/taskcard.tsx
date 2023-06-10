import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'

export default function TaskCard({ task }) {
  return (
    <>
      <div className='max-w px-6 py-4 flex justify-between border-solid border-2 rounded-md border-zinc-700 shadow-lg'>
        <div className='flex'>
          <input
            type='checkbox'
            className='appearence-none checked:bg-blue-600 w-10 mr-4'
          ></input>
          <div>
            <div className='text-3xl font-bold text-slate-100'>{task.name}</div>
            <div className='text-xl font-medium text-slate-100'>
              Description: {task.description}
            </div>
            <div className='text-md text-slate-100'>Status: {task.status} </div>
          </div>
        </div>

        <div className='w-20 flex justify-center align-middle bg-zinc-700 rounded-md'>
          <button className='w-inherit'>
            <FaTrashAlt size={26} />
          </button>
        </div>
      </div>
    </>
  )
}
