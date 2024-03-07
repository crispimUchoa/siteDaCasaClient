import { Button, Container, Nav } from 'reactstrap'
import styles from './styles.module.scss'
import Link from 'next/link'
export default function HeaderNoAuth() {
    return (
       <main className={styles.main}>
        <Container className='d-flex justify-content-between align-items-center py-4'>
            <Link href='/area/home'>
            <img src="/houseLogo.png" alt="logoDaCasa" className='headerLogo'/>
            </Link>
            <div className={styles.headerButtons}>
                <Link href='/login'><Button outline color='success' className={styles.headerBtn}>Entrar</Button></Link>
            </div>
        </Container>
       </main>
    )
}
