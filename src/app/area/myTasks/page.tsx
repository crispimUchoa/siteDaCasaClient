'use client'
import HeaderAuth from '@/components/common/headerAuth'
import styles from './styles.module.scss'
import taskServices, { TaskType } from "@/services/taskServices"
import userServices from "@/services/userServices"
import useSWR from "swr"
import { Container } from 'reactstrap'
import TaskCard from '@/components/common/taksCard'
import TaskSection from '@/components/taskSection'

export default function MyTasks(){
    const tasks = useSWR('/area/home', taskServices.getTasks)
    const user = useSWR('/user', userServices.getUser)
    const users = useSWR('/users', userServices.getAllUsers)

    if(!users.data || !user.data || !tasks.data) return <p>loading...</p>
    if(users.error || user.error || tasks.error) return <p>loading...</p>
    
    return <>
       <main className={styles.main} >
        <HeaderAuth/>
        <Container>
            <TaskSection user={user.data} users={users.data}/>
        </Container>
       </main>
    </>
}