import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '../theme/custom-toast.css'
import { CloseButton } from '../components/toast'

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
    await axios
      .post(
        `${process.env.NEXT_PUBLIC_API_HOST}/api/Task/`,
        requestData,
        config
      )
      .then((res) => {
        if (res.status === 200)
          toast.success('Task created successfully!', {
            pauseOnFocusLoss: false,
            className: 'custom-toast',
            bodyClassName: 'custom-toast-body',
            closeButton: CloseButton,
          })
      })
  } catch (error) {
    toast.error('Error: ' + error)
  }
}

export const updateTask = async (requestData: any, taskId: any) => {
  try {
    await axios
      .put(
        `${process.env.NEXT_PUBLIC_API_HOST}/api/Task/${taskId}`,
        requestData,
        config
      )
      .then((res) => {
        if (res.status === 200)
          toast.success('Task updated successfully!', {
            pauseOnFocusLoss: false,
            className: 'custom-toast',
            bodyClassName: 'custom-toast-body',
            closeButton: CloseButton,
          })
      })
  } catch (error) {
    toast.error('Error: ' + error)
  }
}

export const deleteTask = async (taskId: any) => {
  try {
    await axios
      .delete(`${process.env.NEXT_PUBLIC_API_HOST}/api/Task/${taskId}`)
      .then((res) => {
        if (res.status === 200)
          toast.success('Task deleted successfully!', {
            pauseOnFocusLoss: false,
            className: 'custom-toast',
            bodyClassName: 'custom-toast-body',
            closeButton: CloseButton,
          })
      })
  } catch (error) {
    toast.error('Error: ' + error)
  }
}
