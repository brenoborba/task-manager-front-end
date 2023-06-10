'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import TaskCard from './components/taskcard'
import { FaPlusCircle } from 'react-icons/fa'

export default function Home() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/Task/`, {
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then((res) => res.json())
      .then((data) => setTasks(data))
  }, [])

  return (
    <div className='py-10 px-32'>
      <div className='py-10 px-32'>
        <div className='text-5xl text-center mb-8 text-slate-100 font-bold underline decoration-sky-500'>
          Task Manager
        </div>
        <button
          type='submit'
          className='flex w-44 mb-4 justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm transition ease-in-out delay-150 bg-zinc-700 hover:-translate-y-1 hover:scale-110 hover:bg-zinc-500 duration-300'
        >
          <div className='flex items-center'>
            <p className='text-xl mr-2'>New Task</p>
            <FaPlusCircle size={20} />
          </div>
        </button>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  )
}
