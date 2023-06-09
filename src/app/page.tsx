'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

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
    <>
      <h1>xd</h1>
    </>
  )
}
