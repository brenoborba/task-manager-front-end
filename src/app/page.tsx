'use client'
import TaskCard from '@/components/taskcard'
import { ToastContainer } from 'react-toastify'
import { useEffect, useState } from 'react'
import { fetchTasks, createTask } from '@/api/api-utils'
import { FaPlusCircle } from 'react-icons/fa'
import { task } from './my-types'
import 'react-toastify/dist/ReactToastify.css'
import '../theme/custom-toast.css'

export default function Home() {
  const [tasks, setTasks] = useState([])
  const [isVisible, setIsVisible] = useState(false)

  const handleClick = () => {
    setIsVisible(!isVisible)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data: task = {
      name: e.target.name.value,
      description: e.target.description.value,
      status: 1,
    }

    const JSONdata = JSON.stringify(data)
    createTask(JSONdata)
  }

  useEffect(() => {
    const fetchTasksData = async () => {
      try {
        const tasksData = await fetchTasks()
        setTasks(tasksData)
      } catch (error) {
        console.error(error)
      }
    }

    fetchTasksData()
  }, [])

  return (
    <div className='py-10 px-32'>
      <ToastContainer />
      <div className='py-10 px-32'>
        <div className='text-5xl text-center mb-8 text-slate-100 font-bold underline decoration-sky-500'>
          Task Manager
        </div>
        <button
          type='submit'
          onClick={handleClick}
          className='flex w-44 mb-4 justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm transition ease-in-out delay-150 bg-zinc-700 hover:-translate-y-1 hover:scale-110 hover:bg-zinc-500 duration-200'
        >
          <div className='flex items-center'>
            <p className='text-xl mr-2'>New Task</p>
            <FaPlusCircle size={20} />
          </div>
        </button>
        <div className={isVisible ? 'block' : 'hidden'}>
          <div className='border-solid border-2 mb-4 rounded-md px-6 py-4 border-zinc-700 shadow-lg'>
            <form onSubmit={handleSubmit}>
              <div>
                <label className='text-xl'>Name:</label>
                <input
                  type='text'
                  name='name'
                  className='bg-zinc-700 ml-2 rounded-sm'
                ></input>
              </div>
              <div>
                <label className='text-xl'>Description:</label>
                <input
                  type='text'
                  name='description'
                  className='bg-zinc-700 ml-2 rounded-sm'
                ></input>
              </div>
              <div className='flex mt-4'>
                <button
                  onClick={() => setIsVisible(false)}
                  className='flex w-20 mr-2 bg-zinc-700 justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm transition-colors duration-300 ease-in-out hover:bg-zinc-500'
                >
                  Cancel
                </button>
                <button
                  type='submit'
                  className='flex w-20 bg-zinc-700 justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm transition-colors duration-300 ease-in-out hover:bg-zinc-500'
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
        {tasks.map((task: task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  )
}
