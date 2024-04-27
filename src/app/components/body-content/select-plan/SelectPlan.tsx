import SubscriptionSwitch from '../../subscription-switch/SubscriptionSwitch'
import styles from './selectPlan.module.scss'
import IconArcade from '../../images/IconArcade'
import IconAdvanced from '../../images/IconAdvanced'
import IconPro from '../../images/IconPro'
import { AVAILABLEPLANS } from '@/app/data/AvailablePlans'
import { useMemo } from 'react'
import { SelectPlanProps } from '@/app/types/types'

const SelectPlan: React.FC<SelectPlanProps> = ({
    isYearly,
    selectedPlan,
    setSelectedPlan,
    handleAnnualChange,
}) => {
    interface IconMapping {
        [key: string]: JSX.Element
    }

    const iconMapping: IconMapping = useMemo(
        () => ({
            Arcade: <IconArcade />,
            Advanced: <IconAdvanced />,
            Pro: <IconPro />,
        }),
        []
    )

    return (
        <div className={styles.planContent}>
            <div className={styles.planContainer}>
                {AVAILABLEPLANS.map((plan) => (
                    <div
                        key={plan.index}
                        className={
                            selectedPlan.id !== plan.index
                                ? styles.plan
                                : styles.selected
                        }
                        onClick={() => {
                            setSelectedPlan({
                                id: plan.index,
                                type: plan.type as
                                    | 'Arcade'
                                    | 'Advanced'
                                    | 'Pro',
                                monthlyAmount: plan.monthlyAmount,
                                yearlyAmount: plan.yearlyAmount,
                            })
                        }}
                    >
                        <div>{iconMapping[plan.type]}</div>
                        <div>
                            <div className={styles.title}>{plan.type}</div>
                            <div className={styles.amount}>
                                {!isYearly
                                    ? '$' + plan.monthlyAmount + '/mo'
                                    : '$' + plan.yearlyAmount + '/yr'}
                            </div>
                            {isYearly && (
                                <div className={styles.free}>2 months free</div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <SubscriptionSwitch
                isYearly={isYearly}
                handleAnnualChange={handleAnnualChange}
            />
        </div>
    )
}

export default SelectPlan
