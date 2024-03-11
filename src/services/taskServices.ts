import axios from "axios"
import api from "./api"
import { UserType } from "./userServices"
import { useParams } from "next/navigation"

export interface TaskType {
    id: number
    name: string
    userId: number
    createdAt?: Date
    updatedAt?: Date
    users?: UserType[]
}

const taskServices = {
    getTasks: async()=>{
        const token = localStorage.getItem('house-login')
        const res = await api.get('tasks', {
            headers: {
                Authorization: `Bearer ${token}`
            }}).catch(error=> {
            return error.response
        })
        return res.data
    },
    getTask: async(id: string | number)=>{
        const token = localStorage.getItem('house-login')
        const res = await api.get(`task/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }}).catch(error=> {
            return error.response
        })
        return res.data
    },
    getTaskUserApi: async(id: string | number)=>{
        const token = localStorage.getItem('house-login')
        const res = await api.get(`/task/${id}/user`, {
            headers: {
                Authorization: `Bearer ${token}`
            }}).catch(error=> {
            return error.response
        })
        return res.data
    },
    getTaskUser: (task: TaskType, users: UserType[]) => {
        const user = users.filter(userFilter => userFilter.id===task.userId)[0]
        return user
    },
    setNextTask: async (id: string | number)=>{
        const token = localStorage.getItem('house-login')

        const res = await api.put(`/task/${id}/next`,{} ,{
            headers: {
                Authorization: `Bearer ${token}`
            }}).catch(error=> {
            return error.response
        })
        return res.data;
    }
}

export default taskServices