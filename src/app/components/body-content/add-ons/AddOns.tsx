import styles from './addOns.module.scss'
// import AddOnCard from '../../add-on-card/AddOnCard'
import { ADDONSDATA } from '../../../data/AddOnsData'

type AddOnProps = {
    isYearly: boolean
}

const AddOns: React.FC<AddOnProps> = ({ isYearly }) => {
    return (
        <div className={styles.addOnsContent}>
            {ADDONSDATA.map((addon) => (
                <div className={styles.card}>
                    <div className={styles.outerGroup}>
                        <input type='checkbox' checked={false} />
                        <div className={styles.innerGroup}>
                            <div className={styles.title}>{addon.title}</div>
                            <div className={styles.description}>
                                {addon.description}
                            </div>
                        </div>
                    </div>
                    <div className={styles.amount}>
                        {!isYearly ? addon.monthlyAmount : addon.yearlyAmount}
                    </div>
                </div>
            ))}
        </div>
        // {/* <AddOnCard title={'Online service'} description={'Access to multiplayer games'} amount={!isYearly ? '+$1/mo' : '+$10/yr'} />
        // <AddOnCard title={'Larger Storage'} description={'Extra 1TB of cloud save'} amount={!isYearly ? '+$2/mo' : '+20/yr'} />
        // <AddOnCard title={'Customizable Profile'} description={'Custom theme on your profile'} amount={!isYearly ? '+$2/mo' : '+20/yr'} /> */}
    )
}

export default AddOns
