import styles from './plan.module.scss'
import IconArcade from '../images/IconArcade'
import { ReactNode } from 'react'

type PlanProps = {
    icon: ReactNode
    plan: string
    amount: string
    isYearly: boolean
}

const Plan: React.FC<PlanProps> = ({ icon, plan, amount, isYearly }) => {
    return (
        <div className={styles.plan}>
            <div>{icon}</div>
            <div>
                <div className={styles.title}>{plan}</div>
                <div className={styles.amount}>{amount}</div>
                {isYearly ? <div className={styles.free}>2 months free</div> : null}
            </div>
        </div>
    )
}

export default Plan
