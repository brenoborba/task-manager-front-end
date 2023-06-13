import React, { useState } from 'react'
import { FaTrashAlt, FaEdit, FaCheckCircle } from 'react-icons/fa'
import { deleteTask, updateTask } from '../api/api-utils'

export default function TaskCard({ task }) {
  const [editedTask, setEditedTask] = useState({
    name: '',
    description: '',
    state: 0,
  })
  const [isEditing, setIsEditing] = useState(false)

  const handleEditClick = () => {
    setIsEditing(true)
    setEditedTask(task.text)
  }

  const handleSaveEdit = (e) => {
    e.preventDefault()
    const data = {
      name: e.target.name.value,
      description: e.target.description.value,
      status: 1,
    }

    const JSONdata = JSON.stringify(data)
    updateTask(JSONdata, task.id)
  }

  return (
    <>
      <div className='max-w px-6 py-4 mb-4 flex justify-between border-solid border-2 rounded-md border-zinc-700 shadow-lg'>
        {isEditing ? (
          <div className='flex'>
            <div>
              <form onSubmit={handleSaveEdit}>
                <div>
                  <label className='text-xl'>Name:</label>
                  <input
                    type='text'
                    name='name'
                    className='bg-zinc-700 ml-2 rounded-sm mb-2'
                  ></input>
                </div>
                <div>
                  <label className='text-xl'>Description:</label>
                  <input
                    type='text'
                    name='description'
                    className='bg-zinc-700 ml-2 rounded-sm mb-2'
                  ></input>
                </div>
                <div>
                  <label className='text-xl'>Status:</label>
                  <input
                    type='number'
                    name='status'
                    className='bg-zinc-700 ml-2 rounded-sm mb-4'
                  ></input>
                </div>
                <div className='flex'>
                  <button
                    onClick={() => setIsEditing(false)}
                    className='flex w-20 mb-4 mr-2 bg-zinc-700 justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm transition-colors duration-300 ease-in-out hover:bg-zinc-500'
                  >
                    Cancel
                  </button>
                  <button
                    type='submit'
                    className='flex w-20 mb-4 bg-zinc-700 justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm transition-colors duration-300 ease-in-out hover:bg-zinc-500'
                  >
                    Save
                    <div className='flex items-center'>
                      <FaCheckCircle className='ml-1' />
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <>
            <div className='flex'>
              <div>
                <div className='text-3xl font-bold text-slate-100'>
                  {task.name}
                </div>
                <div className='text-xl font-medium text-slate-100'>
                  Description: {task.description}
                </div>
                <div className='text-md text-slate-100'>
                  Status: {task.status}{' '}
                </div>
              </div>
            </div>

            <div className='my-auto'>
              <button
                onClick={handleEditClick}
                className='w-16 h-16 bg-zinc-700 mr-2 rounded-md transition-colors duration-300 ease-in-out hover:bg-zinc-500'
              >
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
          </>
        )}
      </div>
    </>
  )
}
