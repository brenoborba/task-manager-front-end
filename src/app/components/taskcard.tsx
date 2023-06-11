import React from 'react'
import { FaTrashAlt, FaEdit } from 'react-icons/fa'
import { deleteTask } from '../api/api-utils'

export default function TaskCard({ task }) {
  return (
    <>
      <div className='max-w px-6 py-4 mb-4 flex justify-between border-solid border-2 rounded-md border-zinc-700 shadow-lg'>
        <div className='flex'>
          {/* <input
            type='checkbox'
            className='appearence-none checked:bg-blue-600 w-10 mr-4'
          ></input> */}
          <div>
            <div className='text-3xl font-bold text-slate-100'>{task.name}</div>
            <div className='text-xl font-medium text-slate-100'>
              Description: {task.description}
            </div>
            <div className='text-md text-slate-100'>Status: {task.status} </div>
            <div className='text-sm text-slate-100'>Id: {task.id} </div>
          </div>
        </div>

        <div className='my-auto'>
          <button className='w-16 h-16 bg-zinc-700 mr-2 rounded-md transition-colors duration-300 ease-in-out hover:bg-zinc-500'>
            <div className='max-w flex justify-center align-middle'>
              <FaEdit size={24} />
            </div>
          </button>

          <button
            onClick={() => deleteTask(task.id)}
            className='w-16 h-16 bg-zinc-700 rounded-md transition-colors duration-300 ease-in-out hover:bg-zinc-500'
          >
            <div className='max-w flex justify-center align-middle'>
              <FaTrashAlt size={24} />
            </div>
          </button>
        </div>
      </div>
    </>
  )
}
