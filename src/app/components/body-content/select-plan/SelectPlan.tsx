import SubscriptionSwitch from '../../subscription-switch/SubscriptionSwitch'
import styles from './selectPlan.module.scss'
import IconArcade from '../../images/IconArcade'
import IconAdvanced from '../../images/IconAdvanced'
import IconPro from '../../images/IconPro'
import { AVAILABLEPLANS } from '@/app/data/AvailablePlans'
import { useMemo } from 'react'
import { SelectPlanProps } from '@/app/types/types'
import { motion } from 'framer-motion'

const SelectPlan: React.FC<SelectPlanProps> = ({
    isGoingBack,
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
        <motion.div
            className={styles.planContent}
            initial={{ x: isGoingBack ? -300 : 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
        >
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
                                <motion.div
                                    className={styles.free}
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -30, opacity: 0 }}
                                    // transition={{ duration: 2 }}
                                >
                                    2 months free
                                </motion.div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <SubscriptionSwitch
                isYearly={isYearly}
                handleAnnualChange={handleAnnualChange}
            />
        </motion.div>
    )
}

export default SelectPlan
