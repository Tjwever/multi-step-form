import styles from './addOnCard.module.scss'
import { ReactNode } from 'react'

type AddOnCardProps = {
    title: string
    description: string
    amount: string
}

const AddOnCard: React.FC<AddOnCardProps> = ({ title, description, amount }) => {
    return (
        <div className={styles.card}>
            <input type='checkbox' />
            <div>
                <div>
                    <div>{title}</div>
                    <div>{description}</div>
                </div>
                <div>{amount}</div>
            </div>
        </div>
    )
}

export default AddOnCard
