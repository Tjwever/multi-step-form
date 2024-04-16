import SubscriptionSwitch from '../../subscription-switch/SubscriptionSwitch'
import styles from './selectPlan.module.scss'
import IconArcade from '../../images/IconArcade'
import IconAdvanced from '../../images/IconAdvanced'
import IconPro from '../../images/IconPro'
import { AVAILABLEPLANS } from '@/app/data/AvailablePlans'
import { useMemo } from 'react'

type PlanDetails = {
    id: string
    type: string
    monthlyAmount: number
    yearlyAmount: number
}

type SelectPlanProps = {
    isYearly: boolean
    selectedPlan: PlanDetails
    setSelectedPlan: (plan: PlanDetails) => void
    handleChange: () => void
}
const SelectPlan: React.FC<SelectPlanProps> = ({
    isYearly,
    selectedPlan,
    setSelectedPlan,
    handleChange,
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
                        className={styles.plan}
                        onClick={() => {
                            console.log(
                                'you selected the ' + plan.type + ' plan'
                            )
                            console.log(plan)
                            setSelectedPlan({
                                id: plan.index,
                                type: plan.type as 'Arcade' |
                                    'Advanced' |
                                    'Pro',
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
                handleChange={handleChange}
            />
        </div>
    )
}

export default SelectPlan
