'use client'
import styles from './styles.module.scss'
import HeaderAuth from "@/components/common/headerAuth"
import taskServices, { TaskType } from "@/services/taskServices"
import userServices from "@/services/userServices"
import useSWR from "swr"

export default function Home(){
    const tasks = useSWR('/area/home', taskServices.getTasks)
    const user = useSWR('/user', userServices.getUser)

    return <>
       <main className={styles.main} >
        <HeaderAuth/>
        <img src="/boasPraticas.jpg" alt="boasPraticas" className={styles.clean}/>
       </main>
    </>
}