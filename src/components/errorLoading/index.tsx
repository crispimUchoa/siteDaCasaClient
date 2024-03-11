import styles from './styles.module.scss'
interface props{
    loading: string
}

export default function ErrorLoading({loading}:props){
    return <>
    <main className={styles.main}>
        <h1 className={styles.title}>PROBLEMAS AO CARREGAR {loading}</h1>
    </main>
    </>
}