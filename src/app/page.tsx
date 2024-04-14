"use client"

import styles from './page.module.scss'
import Modal from './components/modal/Modal'

export default function Home() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Home</h1>
            <div className={styles.content}>
                <Modal />
            </div>
        </main>
    )
}
