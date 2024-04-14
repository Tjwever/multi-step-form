import Plan from '../../plans/Plan'
import SubscriptionSwitch from '../../subscription-switch/SubscriptionSwitch'
import styles from './selectPlan.module.scss'
import IconArcade from '../../images/IconArcade'
import IconAdvanced from '../../images/IconAdvanced'
import IconPro from '../../images/IconPro'

type SelectPlanProps = {
    isYearly: boolean,
    handleChange: () => void,
}
const SelectPlan: React.FC<SelectPlanProps> = ({ isYearly, handleChange}) => {
    return (
        <div className={styles.planContent}>
                <div className={styles.planContainer}>
                    <Plan
                        icon={<IconArcade />}
                        plan={'Arcade'}
                        amount={!isYearly ? '$9/mo': '$90/yr'}
                        isYearly={isYearly}
                    />
                    <Plan
                        icon={<IconAdvanced />}
                        plan={'Advanced'}
                        amount={!isYearly ? '$12/mo' : '$120/yr'}
                        isYearly={isYearly}
                    />
                    <Plan icon={<IconPro />} plan={'Pro'} amount={'$15/mo'}
                    isYearly={isYearly} />
                </div>
                <SubscriptionSwitch isYearly={isYearly} handleChange={handleChange} />
            </div>
    )
}

export default SelectPlan

