import { Link } from 'react-router-dom';
import { FaPizzaSlice } from "react-icons/fa";
import styles from './Footer.module.scss'


export const Footer = () => {
    return (
        <div className="container footer">
            <nav className={styles.footer_nav}>
                <ul>
                    <li><Link>Головна</Link></li>
                    <li><Link>Каталог</Link></li>
                    <li><Link>Відгуки</Link></li>
                    <li><Link>Як замовити</Link></li>
                    <li><Link>Контакти</Link></li>
                </ul>
            </nav>
            <div>
            <Link><FaPizzaSlice color="white" size={24}/></Link>
            </div>
        </div>
    )
}