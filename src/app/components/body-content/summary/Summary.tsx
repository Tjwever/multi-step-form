import styles from './summary.module.scss'
import { SummaryProps } from '@/app/types/types'
import { DIRECTION } from '@/app/types/enums'

const Summary: React.FC<SummaryProps> = ({
    handleStepChange,
    isYearly,
    selectedPlan,
    selectedAddOns,
    handleTotalValue,
}) => {
    return (
        <div className={styles.summaryContent}>
            <div className={styles.summary}>
                <div className={styles.row}>
                    <div className={styles.yourChoiceGroup}>
                        <div className={styles.title}>
                            {selectedPlan.type} (
                            {!isYearly ? 'Monthly' : 'Yearly'})
                        </div>
                        <div
                            className={styles.change}
                            onClick={() => handleStepChange(DIRECTION.CHANGE)}
                        >
                            Change
                        </div>
                    </div>
                    <div className={styles.chosenAmount}>
                        {!isYearly
                            ? `$${selectedPlan.monthlyAmount}/mo`
                            : `$${selectedPlan.yearlyAmount}/yr`}
                    </div>
                </div>

                <hr className={styles.hrStyle} />

                {selectedAddOns && Object.values(selectedAddOns).length > 0 ? (
                    Object.values(selectedAddOns).map((addon) => (
                        <div key={addon.title} className={styles.row}>
                            <div className={styles.serviceText}>
                                {addon.title}
                            </div>
                            <div className={styles.serviceAmount}>
                                {!isYearly
                                    ? `+$${addon.value}/mo`
                                    : `+$${addon.value}/yr`}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className={styles.row}>
                        <div className={styles.serviceText}>
                            No extra plans selected
                        </div>
                    </div>
                )}
            </div>

            <div className={styles.totalGroup}>
                <div className={styles.serviceText}>Total (per month)</div>
                <div className={styles.totalAmount}>
                    {!isYearly
                        ? `$${handleTotalValue()}/mo`
                        : `$${handleTotalValue()}/yr`}
                </div>
            </div>
        </div>
    )
}

export default Summary
