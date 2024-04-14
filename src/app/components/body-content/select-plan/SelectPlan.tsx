import Plan from '../../plans/Plan'
import SubscriptionSwitch from '../../subscription-switch/SubscriptionSwitch'
import styles from './selectPlan.module.scss'
import IconArcade from '../../images/IconArcade'
import IconAdvanced from '../../images/IconAdvanced'
import IconPro from '../../images/IconPro'

type SelectPlanProps = {
    checked: boolean,
    handleChange: () => void,
}
const SelectPlan: React.FC<SelectPlanProps> = ({ checked, handleChange}) => {
    return (
        <div className={styles.planContent}>
                <div className={styles.planContainer}>
                    <Plan
                        icon={<IconArcade />}
                        plan={'Arcade'}
                        amount={!checked ? '$9/mo': '$90/yr'}
                        isYearly={checked}
                    />
                    <Plan
                        icon={<IconAdvanced />}
                        plan={'Advanced'}
                        amount={!checked ? '$12/mo' : '$120/yr'}
                        isYearly={checked}
                    />
                    <Plan icon={<IconPro />} plan={'Pro'} amount={'$15/mo'}
                    isYearly={checked} />
                </div>
                <SubscriptionSwitch checked={checked} handleChange={handleChange} />
            </div>
    )
}

export default SelectPlan

