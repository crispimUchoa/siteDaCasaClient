import { TaskType } from "@/services/taskServices"
import { UserType } from "@/services/userServices"
import TaskCard from "../common/taksCard"

import styles from './styles.module.scss'

interface props{
    user: UserType
    users: UserType[]
    allTasks?: TaskType[]
}

export default function TaskSection({user, users, allTasks}:props){
    if(!user.tasks) return <p>loading...</p>
    return <>
    <main className={styles.main}>
    {!allTasks ? (user.tasks.length>0 ? user.tasks.map((task:TaskType)=>(
                
                <TaskCard task={task} allUsers={users} key={task.id} currentUser={user}/>
                
            )): (
                <p className={styles.warning}>Você não está em nenhuma lista de tarefas</p>
            )): allTasks.map(task=> (
                <TaskCard task={task} allUsers={users} key={task.id} currentUser={user} allTasks={allTasks}/>
            ))}
    </main>
    </>
}