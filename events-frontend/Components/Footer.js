import Link from "next/link";
import styles from '../styles/Footer.module.css';

export default function Footer()
{
    return(
        <footer className={styles.footer}>
               <p>copywrite &copy;  FemiEvents 2021</p>
               <span><p><Link href="/about">about this project</Link></p></span>
               </footer>
    )}