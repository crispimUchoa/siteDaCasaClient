import styles from './styles.module.scss'
interface props{
    loading: string
}

export default function Loading({loading}:props){
    return <>
    <main className={styles.main}>
        <h1 className={styles.title}>CARREGANDO {loading}</h1>
    </main>
    </>
}