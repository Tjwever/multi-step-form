import styles from './subscriptionSwitch.module.scss'
import Switch from 'react-switch'

type SubscriptionSwitchProps = {
    isYearly: boolean
    handleAnnualChange: () => void
}

const SubscriptionSwitch: React.FC<SubscriptionSwitchProps> = ({
    isYearly,
    handleAnnualChange,
}) => {
    return (
        <div className={styles.monthlyYearlyContainer}>
            <div className={isYearly ? styles.monthly : styles.selected}>
                Monthly
            </div>
            <div className={styles.switch}>
                <Switch
                    checked={isYearly}
                    onChange={handleAnnualChange}
                    offColor='#02295a'
                    onColor='#02295a'
                    onHandleColor='#fff'
                    handleDiameter={14}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    boxShadow='0px 1px 5px rgba(0, 0, 0, 0.6)'
                    activeBoxShadow='0px 0px 1px 10px rgba(0, 0, 0, 0.2)'
                    height={20}
                    width={48}
                    className='react-switch'
                    id='material-switch'
                />
            </div>
            <div className={!isYearly ? styles.yearly : styles.selected}>
                Yearly
            </div>
        </div>
    )
}

export default SubscriptionSwitch
