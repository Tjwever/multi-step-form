import styles from './addOns.module.scss'
import AddOnCard from '../../add-on-card/AddOnCrad'

const AddOns = () => {
    return <div className={styles.addOnsContent}>
        <AddOnCard title={'Online service'} description={'Access to multiplayer games'} amount={'+$1/mo'} />
        <AddOnCard title={'Larger Storage'} description={'Extra 1TB of cloud save'} amount={'+$2/mo'} />
        <AddOnCard title={'Customizable Profile'} description={'Custom theme on your profile'} amount={'+$2/mo'} />
    </div>
}

export default AddOns
