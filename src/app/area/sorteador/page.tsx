'use client'
import userServices, { UserType } from "@/services/userServices"
import { MouseEvent, MouseEventHandler, useState } from "react"
import useSWR from "swr"
import styles from './styles.module.scss'
import HeaderAuth from "@/components/common/headerAuth"
import { Container } from "reactstrap"
import { useEffect } from "react"
import UserCard from "@/components/sorteador/userCard"
import SorteadorSection from "@/components/sorteador/sorteadorSection"

function generateKey(){
    return Math.floor(Math.random()*10000000)
  }
export default function Sorteador(){
    const [notSelected, SetNotSelected] = useState<UserType[]>([])
    const [selected, SetSelected] = useState<UserType[]>([])
    const users = useSWR('/users', userServices.getAllUsers)
    useEffect(()=>{
      if(users.data){
        SetNotSelected(current=>[...users.data])
      }
    },[users.data])

    function findUser(id: number){
        const findUser = users.data.filter((user:UserType)=>user.id===id)[0]
        return findUser
    }

    function toSelect(event: any){
        const id = +event.currentTarget.id
        const user = findUser(id)
        const index = notSelected.indexOf(user)
        notSelected.splice(index, 1)
        
        SetSelected(selec=>[...selec, user ])
    }

    function toUnSelect(event:any){
        const id = +event.currentTarget?.id
        const user = findUser(id)
        const index = selected.indexOf(user)
        selected.splice(index, 1)
        
        
        SetNotSelected(notSelec=>[...notSelec, user ])
    }

    if(!users.data) return <p>loading...</p>
    if(users.error) return <p>loading...</p>
    return<>
    <main className={styles.main}>
        <HeaderAuth/>
        <Container className={`text-center py-3 mt-3 ${styles.container}`}>
            <header className={styles.header}>
                <h1 className={styles.headerTitle}>Seja bem-vindo ao SORTEADOR DA CASA</h1>
                <p className={styles.headerDescription}>Onde você sorteia o fudido que vai ter que lavar aquela panela que ninguém sujou há 10 anos!(Tá liberado sortear outra merda tbm👍!)</p>
            </header>
            <SorteadorSection selected={selected} notSelected={notSelected} select={toSelect} unSelect={toUnSelect}/>
        </Container>
    </main>
    </>
}