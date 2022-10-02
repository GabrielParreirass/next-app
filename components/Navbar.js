import Link from "next/link"
import styles from '../styles/Navbar.module.css'


export default function Navbar() {
    return (
        <ul className={styles.navbar}>

            <li>
                <Link href={'/'}>
                    <a>Home</a>
                </Link>
            </li>

            <li>
                <Link href={'/todos'}>
                    <a>To Do</a>
                </Link>
            </li>

            <li>
                <Link href={'/products'}>
                    <a>Produtos</a>
                </Link>
            </li>

            <li>
                <Link href={'/about'}>
                    <a>Sobre Nós</a>
                </Link>
            </li>

            <li>
                <Link href={'/localization'}>
                    <a>Localização</a>
                </Link>
            </li>
        </ul>
    )
}