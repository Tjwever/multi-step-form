import styles from './addOnCard.module.scss'
import { ReactNode } from 'react'

type AddOnCardProps = {
    title: string
    description: string
    amount: string
}

const AddOnCard: React.FC<AddOnCardProps> = ({
    title,
    description,
    amount,
}) => {
    return (
        <div className={styles.card}>
            <div className={styles.outerGroup}>
                <input type='checkbox' />
                <div className={styles.innerGroup}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.description}>{description}</div>
                </div>
            </div>
            <div className={styles.amount}>{amount}</div>
        </div>
    )
}

export default AddOnCard
