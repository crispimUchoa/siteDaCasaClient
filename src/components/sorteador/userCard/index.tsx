import { UserType } from '@/services/userServices'
import styles from './styles.module.scss'
import { Button } from 'reactstrap'
import { MouseEventHandler } from 'react'

interface props{
    user: UserType
    color: string
    outline: boolean
    onClick: (event: any) => void
}

export default function UserCard({user, color, outline, onClick}:props){
    return<>
    <Button id={user?.id.toString()} color={color} outline={outline} onClick={onClick} className={styles.userCard}>{user?.name}</Button>
    </>
}