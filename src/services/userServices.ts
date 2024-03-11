import axios from "axios"
import api from "./api"
import { TaskType } from "./taskServices"

export interface UserType {
    id: number
    name: string
    email: string
    role: string
    createdAt?: Date
    updatedAt?: Date
    tasks?: TaskType[]
}

const userServices = {
    getUser: async()=>{
        const token = localStorage.getItem('house-login')
        
        const res = await api.get('user', {
            headers: {
                Authorization: `Bearer ${token}`
            }}).catch(error=> {
            return error.response
        })
        return res.data
    },
    getAllUsers: async()=>{
        const token = localStorage.getItem('house-login')
        
        const res = await api.get('/users', {
            headers: {
                Authorization: `Bearer ${token}`
            }}).catch(error=> {
            return error.response
        })
        return res.data
    },
    checkInTask: (task: TaskType, myTasks: TaskType[])=>{
        const common = myTasks.filter(taskF=>taskF.id===task.id)
        if (common.length) return true
        return false
    }
}

export default userServices