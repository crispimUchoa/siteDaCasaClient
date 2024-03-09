import { UserType } from '@/services/userServices'
import styles from './styles.module.scss'
import UserCard from '../userCard'
import { Button } from 'reactstrap'
import { useState } from 'react'

interface props{
    notSelected: UserType[]
    selected: UserType[]
    select: (event:any)=>void
    unSelect: (event:any)=>void
}

export default function SorteadorSection({notSelected, selected,select, unSelect}:props){
    const [raffled, setRaffled] = useState(false)
    const [lucky, setLucky] = useState<UserType>()

    function toRaffle(){
        const luckyUser = selected.sort((a,b)=>0.5 - Math.random())[0]
        setLucky(luckyUser)
        setRaffled(true)
    }

    return<>
    <section className={styles.section}>
        <div className={styles.cardsSection}>
        {notSelected ? notSelected.map(user=>(
            <UserCard user={user} color='light' outline={true} onClick={select} key={user?.id}/>
            )) : <p>Nenhum usuario encontrado</p>}
        </div>
        <div className={styles.cardsSection}>
        {selected?.length>0 ? selected.map(user=>(
            <UserCard user={user} color='success' outline={false} onClick={unSelect} key={user?.id}/>
        )): <p className={styles.noOneSelected}>Nenhum usuário selecionado</p>}
        </div>
        <Button href={'#luckyName'} color='danger' onClick={toRaffle} className={styles.raffleBtn} disabled={selected.length===0}>{!raffled ? 'Sortear' : 'Sortear novamente'}</Button>
        <div className={styles.luckyDiv} >
            {raffled && lucky ? 
            <>
            <p className={styles.luckyDeclaration}>E o vencedor foi...</p>
            <img src={`/usersPics/${lucky?.name}.png`} alt="foto do sortudo" className={styles.luckyImg}/>
            <p className={styles.luckyName} id='luckyName'>{lucky.name}</p>
            </>
            : <p></p>}
        </div>
    </section>
    </>
}