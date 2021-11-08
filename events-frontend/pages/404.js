import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/404.module.css'
export default function NotFoundPage(){
    return(
        <div>
            <Layout title ="Page not found">
                <div className={styles.error}>
                    <h1>404</h1>
                    <h1>Sorry there is nothing here</h1>
                     <Link href="/"> Go back to homepage</Link>
                </div>
            </Layout>
        </div>
    )
}