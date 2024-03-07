'use client'
import taskServices, { TaskType } from "@/services/taskServices"
import userServices, { UserType } from "@/services/userServices"
import { useParams } from "next/navigation"
import useSWR from "swr"
import styles from './styles.module.scss'
import HeaderAuth from "@/components/common/headerAuth"
import { Button, Table } from "reactstrap"
import { useEffect, useState } from "react"

export default function TaskPage(){
    const [change, setChange] = useState(false)
    const params = useParams()
    const id = params.id?.toString() || ''

    const [taskUser, setTaskUser] = useState<UserType>()
    const currentUser = useSWR('/user', userServices.getUser)
    const [task, setTask] = useState<TaskType>()

    async function setData() {
        const taskData = await taskServices.getTask(id)
        const taskUserData = taskServices.getTaskUser(taskData, taskData.users)
        return {taskData, taskUserData}    
    }

    useEffect(()=>{
        setTimeout(()=>{
            setChange(false)
        }, 1000*3)
        setData().then(({ taskData, taskUserData})=>{
            setTask(taskData)
            setTaskUser(taskUserData)
        })
    },[change])
  
    console.log({task, currentUser: currentUser.data, taskUser})
    
    if(!currentUser.data || !task ||!taskUser) return <p>loading...</p>
    if(currentUser.error) return <p>loading...</p>

    function checkTaskUser(user:UserType){
        if(!taskUser) return
        if(taskUser.id===user.id){
            return true
        }
        return false
    }

    async function handleDoneTask(){
        if(!checkTaskUser(currentUser.data)) return
        await taskServices.setNextTask(id)
        setChange(true)
    }

    return <>
    <main className={styles.main}>
        <HeaderAuth/>
        <div className={styles.tableDiv}>
            <div className={styles.row}>
                <div className={styles.divInfos}>
                    <span className={styles.spanId}>ID</span>
                    <span className={styles.spanName}>NOME</span>
                </div>
                <span className={styles.spanLucky}>SUA VEZ</span>
                </div>
            
                {task.users!.map((user:UserType)=>(
                    <div className={checkTaskUser(user) ? styles.luckyRow: styles.userRow} key={user.id}>
                        <div className={styles.divInfos}>
                        <span className={styles.spanId}>{user.id}</span>
                        <span className={styles.spanName}>{user.name}</span>
                        </div>
                        <span className={styles.spanLucky}>{checkTaskUser(user) ? 'SIM' : 'NÃO'}</span>
                    </div>
                ))}
                <div className={styles.rowBtn}>
                <Button onClick={handleDoneTask} color="primary" className={styles.doneBtn}
                disabled={!checkTaskUser(currentUser.data)}
                >JÁ REALIZEI ESSA TAREFA</Button>
                </div>
        </div>
    </main>
    </>
}