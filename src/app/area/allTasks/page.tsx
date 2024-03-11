'use client'
import HeaderAuth from '@/components/common/headerAuth'
import styles from './styles.module.scss'
import taskServices, { TaskType } from "@/services/taskServices"
import userServices from "@/services/userServices"
import useSWR from "swr"
import { Container } from 'reactstrap'
import TaskCard from '@/components/common/taksCard'
import TaskSection from '@/components/taskSection'
import Loading from '@/components/loading'
import ErrorLoading from '@/components/errorLoading'

export default function AllTasks(){
    const tasks = useSWR('/area/home', taskServices.getTasks)
    const user = useSWR('/user', userServices.getUser)
    const users = useSWR('/users', userServices.getAllUsers)

    if(!users.data) return <Loading loading='todos os usuários'/>
    if(!user.data) return <Loading loading='seus dados'/>
    if(!tasks.data) return <Loading loading='tarefas'/>
    if(users.error) return <ErrorLoading loading='todos os usuários'/>
    if(user.error) return <ErrorLoading loading='seus dados'/>
    if(tasks.error) return <ErrorLoading loading='tarefas'/>
    
    return <>
       <main className={styles.main} >
        <HeaderAuth/>
        <Container>
            <TaskSection user={user.data} users={users.data} allTasks={tasks.data}/>
        </Container>
       </main>
    </>
}