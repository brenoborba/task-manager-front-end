'use client'
import { useEffect, useState } from 'react'
import TaskCard from './components/taskcard'
import { FaPlusCircle } from 'react-icons/fa'
import { fetchTasks, createTask } from './api/api-utils'
import axios from 'axios'

export default function Home() {
  const [tasks, setTasks] = useState([])
  const [taskCount, setTaskCount] = useState<number>()
  const [isVisible, setIsVisible] = useState(false)

  const handleClick = () => {
    setIsVisible(!isVisible)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
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
              <button type='submit'>Create</button>
            </form>
          </div>
        </div>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  )
}
