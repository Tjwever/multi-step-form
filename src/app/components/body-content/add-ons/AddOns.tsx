import styles from './addOns.module.scss'
import AddOnCard from '../../add-on-card/AddOnCrad'

const AddOns = () => {
    return <div className={styles.addOnsContent}>
        <AddOnCard title={'Online service'} description={'Access to multiplayer games'} amount={'+$1/mo'} />
        <AddOnCard title={'Online service'} description={'Access to multiplayer games'} amount={'+$1/mo'} />
        <AddOnCard title={'Online service'} description={'Access to multiplayer games'} amount={'+$1/mo'} />
    </div>
}

export default AddOns
