'use client'
import styles from './styles.module.scss'
import HeaderAuth from "@/components/common/headerAuth"
import taskServices, { TaskType } from "@/services/taskServices"
import userServices from "@/services/userServices"
import Link from 'next/link'
import { Button, Container } from 'reactstrap'
import useSWR from "swr"

export default function Home(){
    const tasks = useSWR('/area/home', taskServices.getTasks)
    const user = useSWR('/user', userServices.getUser)

    return <>
       <main className={styles.main} >
        <HeaderAuth/>
        <Container className={styles.container}>
            <div className={styles.apresentationDiv}>
            <h3 className={styles.apresentationTitle}>Acesse</h3>
            <Link href='/area/sorteador'><Button className={styles.apresentationBtn} color='success'>SORTEADOR DA CASA</Button></Link>
            <Link href='/area/myTasks'><Button className={styles.apresentationBtn} color='success'>MINHAS TAREFAS</Button></Link>
            <Link href='/area/allTasks'><Button className={styles.apresentationBtn} color='success'>TODAS TAREFAS</Button></Link>
            </div>

        </Container>
       </main>
    </>
}