import styles from './summary.module.scss'

type PlanDetails = {
    id: string
    type: string
    monthlyAmount: number
    yearlyAmount: number
}

type SummaryProps = {
    isYearly: boolean,
    selectedPlan: PlanDetails,
}

const Summary: React.FC<SummaryProps> = ({ isYearly, selectedPlan }) => {
    return (
        <div className={styles.summaryContent}>
            <div className={styles.summary}>
                <div className={styles.row}>
                    <div className={styles.yourChoiceGroup}>
                        <div className={styles.title}>{selectedPlan.type} ({!isYearly ? 'Monthly' : 'Yearly'})</div>
                        <div className={styles.change}>Change</div>
                    </div>
                    <div className={styles.chosenAmount}>{!isYearly ? '$9/mo' : '$10/yr'}</div>
                </div>

                <hr className={styles.hrStyle} />
                
                <div className={styles.row}>
                    <div className={styles.serviceText}>Online Service</div>
                    <div className={styles.serviceAmount}>{!isYearly ? '$1/mo' : '$20/yr'}</div>
                </div>
                <div className={styles.row}>
                    <div className={styles.serviceText}>Larger Storage</div>
                    <div className={styles.serviceAmount}>{!isYearly ? '$2/mo' : '$20/yr'}</div>
                </div>
                <div className={styles.row}>
                    <div className={styles.serviceText}>Larger Storage</div>
                    <div className={styles.serviceAmount}>{!isYearly ? '$2/mo' : '$20/yr'}</div>
                </div>
            </div>
            <div className={styles.totalGroup}>
                <div className={styles.serviceText}>Total (per month)</div>
                <div className={styles.totalAmount}>+$12/mo</div>
            </div>
        </div>
    )
}

export default Summary
