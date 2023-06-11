import axios from 'axios'

const headers = {
  'Content-Type': 'application/json',
}

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
}

export const fetchTasks = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_HOST}/api/Task/`
    )
    const responseData = await response.json()
    return responseData
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const createTask = async (requestData: any) => {
  try {
    await axios.post(
      `${process.env.NEXT_PUBLIC_API_HOST}/api/Task/`,
      requestData,
      config
    )
  } catch (error) {
    console.log(error)
  }
}

export const deleteTask = async (taskId: any) => {
  try {
    await axios.delete(`${process.env.NEXT_PUBLIC_API_HOST}/api/Task/${taskId}`)
  } catch (error) {
    console.log(error)
  }
}
