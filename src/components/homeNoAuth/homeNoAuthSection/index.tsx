import Head from 'next/head'
import styles from './styles.module.scss'
import HeaderNoAuth from '../headerNoAuth'
import { Button, Container } from 'reactstrap'
import Link from 'next/link'

export default function HomeNoAuthSection(){
    return <>
    <Head>
        <title>{process.env.SITE_NAME} - Bem-vindo</title>
    </Head>
    <main className={styles.main}>
        <HeaderNoAuth/>
        <Container className='mt-5 '>
            <div className={styles.containerFlex}>
            <div className={styles.homeText}>
            <h1 className={styles.textTitle}>SEJA BEM-VINDO AO SITE DA CASA</h1>
            <p className={styles.textParagraph}>AQUI VOCÊ PODE ORGANIZAR SUAS LISTAS DE TARAFAS, COMO JOGAR O LIXO, COMPRAR ÁGUA E ATÉ DE QUEM É A VEZ DE LAVAR O BANHEIRO</p>
            <p className={styles.textParagraph}>ALÉM DE PODER CHECAR QUANDO A ÚLTIMA PESSOA CUMPRIU A TAREFA DA LISTA E MUITO MAIS</p>
            <div>
            <Link href='/login'><Button outline color='success' className={styles.btn}>ACESSAR AGORA</Button></Link>

            </div>
        </div>
        <div className={styles.imgDiv}>
        <img src="/homeNoAuth/listImg.png" alt="listImg" className={styles.listImg}/>
        </div>
            </div>
        </Container>
    </main>
    </>
}