'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import TaskCard from './components/taskcard'

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
  console.log(tasks)
  return (
    <div className='py-10 px-32'>
      <div className='py-10 px-32 border-solid border-2 rounded-md border-zinc-700'>
        <div className='text-5xl text-center mb-8 text-slate-100 font-bold underline decoration-sky-500'>
          Task Manager
        </div>
        {tasks.map((task) => (
          <TaskCard key={task[task]} task={task} />
        ))}
      </div>
    </div>
  )
}
