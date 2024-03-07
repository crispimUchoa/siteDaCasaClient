import taskServices, { TaskType } from "@/services/taskServices";
import styles from './styles.module.scss'
import Link from "next/link";
import userServices, { UserType } from "@/services/userServices";


interface props{
    task: TaskType
    allUsers: UserType[]
    currentUser: UserType
    allTasks?: TaskType[]
}

export default function TaskCard({task, allUsers, currentUser, allTasks}:props){
    
return <>
<Link className="links" href={`/area/task/${task.id}`}>
    <div className={
        (taskServices.getTaskUser(task, allUsers).id === currentUser.id ?
        styles.taskCardYellow :
        (
          currentUser.tasks &&  userServices.checkInTask(task, currentUser.tasks) ? styles.taskCardGreen : styles.taskCardGray
        )
        )
        
    }>

        <h3 className={styles.taskTitle}>Nome: {task.name}</h3>
        <h3 className={styles.taskInfo}>
            {taskServices.getTaskUser(task, allUsers).id === currentUser.id ?
             'Sua vez' :
             (currentUser.tasks &&  userServices.checkInTask(task, currentUser.tasks) ?
             'Vez de: '+ taskServices.getTaskUser(task, allUsers).name: 
             'Você não participa dessa tarefa.'
             )
             }</h3>
    </div>
</Link>
</>
}