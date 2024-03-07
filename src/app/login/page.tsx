"use client"
import Link from 'next/link';
import styles from './styles.module.scss'
import Head from "next/head";
import { BiArrowFromLeft, BiArrowFromRight } from 'react-icons/bi';
import { IoMdArrowDropleftCircle } from 'react-icons/io';

import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { FormEvent, useEffect } from 'react';
import { authServices } from '@/services/authServices';
import { useRouter } from 'next/navigation';

export default function Login(){
    const router = useRouter()

    useEffect(()=>{
        if(localStorage.getItem('house-login')) {
            router.push('/area/home')
          }
    }, [])

    async function handleLogin(ev:FormEvent<HTMLFormElement>){
        ev.preventDefault()
        const formData = new FormData(ev.currentTarget)
        const email = formData.get('email')!.toString()
        const password = formData.get('password')!.toString()
        const params = {email, password}
        const {status} = await authServices.login(params)
        if (status === 200){
          router.push('/area/home')
        } else {
            alert('login incorreto')
        }
    }
    return (<>
    <Head>
        <title>{process.env.SITE_NAME} - login</title>
    </Head>
    <main className={styles.main}>
        <div className={styles.iconDiv}>
        <Link href='/'><BiArrowFromRight color='green' className={styles.icon}/></Link>
        </div>
            <Form className={styles.form} onSubmit={handleLogin}>
                <FormGroup className={styles.formGroup}>
                    <Label for="email" className={styles.label}>Email</Label>
                    <Input id="email" name="email" type="email" className={styles.input}/>
                </FormGroup>
                <FormGroup className={styles.formGroup}>
                    <Label for="password" className={styles.label}>Senha</Label>
                    <Input id="password" name="password" type="password"  className={styles.input}/>
                </FormGroup>
                <Button className={styles.btn} color='success' type="submit">Entrar</Button>
            </Form>
    </main>
    </>)
}