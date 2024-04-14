import styles from './addOns.module.scss'
import AddOnCard from '../../add-on-card/AddOnCrad'

type AddOnProps = {
    isYearly: boolean
}

const AddOns: React.FC<AddOnProps> = ({ isYearly }) => {
    return <div className={styles.addOnsContent}>
        <AddOnCard title={'Online service'} description={'Access to multiplayer games'} amount={!isYearly ? '+$1/mo' : '+$10/yr'} />
        <AddOnCard title={'Larger Storage'} description={'Extra 1TB of cloud save'} amount={!isYearly ? '+$2/mo' : '+20/yr'} />
        <AddOnCard title={'Customizable Profile'} description={'Custom theme on your profile'} amount={!isYearly ? '+$2/mo' : '+20/yr'} />
    </div>
}

export default AddOns
