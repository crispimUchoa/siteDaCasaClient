import { useState } from "react";
import { Collapse, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, Navbar, NavbarBrand } from "reactstrap";
import styles from './style.module.scss'
import Link from "next/link";
import { FaUserCog } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function HeaderAuth(){
    const router = useRouter()
    const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const baseUrl = 'https://site-da-casa.vercel.app'
  const location = typeof window !='undefined' ? window?.location?.href :''
  
    return <>
    <Container>
    <nav className={styles.nav}>
        <div className={styles.linksDiv}>
            <Link  href='/area/home'><img src="/houseLogo.png" alt="homeLogo" className="headerLogo" /></Link>
            <div className={styles.linksSpan}>
            <Link className="links" href='/area/myTasks'><span className={ location === `${baseUrl}/area/myTasks` ?  styles.linkSelected : styles.link }>Minhas tarefas</span></Link>
            <Link className="links" href='/area/allTasks'><span className={ location === `${baseUrl}/area/allTasks` ?  styles.linkSelected : styles.link} >Tarefas</span></Link>
            </div>
        </div>
        <div className={styles.modalDiv}><span className={styles.modalBtn}>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret >
            <FaUserCog color='#22ff22'/>
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={()=>{/* router.push('/area/account') */
                    alert('Função ainda não implementada')
                }}>Ver perfil</DropdownItem>
                    <DropdownItem onClick={()=>{
                        localStorage.clear()
                        router.push('/')
                    }}>Sair</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            </span></div>
</nav>
    </Container>
    </>
}