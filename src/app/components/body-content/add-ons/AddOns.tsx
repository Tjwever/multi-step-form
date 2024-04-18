import styles from './addOns.module.scss'
// import AddOnCard from '../../add-on-card/AddOnCard'
import { ADDONSDATA } from '../../../data/AddOnsData'
import { useEffect } from 'react'

type SelectedAddOns = {
    [id: string]: {
        title: string
        value: number
        isChecked: boolean
    }
}
type AddOnProps = {
    isYearly: boolean
    selectedAddOns: SelectedAddOns
    setSelectedAddOns: (addon: SelectedAddOns) => void
}

const AddOns: React.FC<AddOnProps> = ({
    isYearly,
    selectedAddOns,
    setSelectedAddOns,
}) => {
    const handleAddOnClick = (addon: typeof ADDONSDATA[0]) => {
        const newSelectedAddOns: SelectedAddOns = { ...selectedAddOns }
        if (newSelectedAddOns[addon.id]?.isChecked) {
            // If already checked, delete it from the state
            delete newSelectedAddOns[addon.id]
        } else {
            // Otherwise, add or update the add-on in the state
            newSelectedAddOns[addon.id] = {
                title: addon.title,
                value: isYearly ? addon.yearlyAmount : addon.monthlyAmount,
                isChecked: true,
            }
        }
        setSelectedAddOns(newSelectedAddOns)
    }

    useEffect(() => {
        const updatedAddOns: SelectedAddOns = {};
        Object.keys(selectedAddOns).forEach((key) => {
            const addon = ADDONSDATA.find((a) => a.id === key);
            if (addon && selectedAddOns[key].isChecked) {
                updatedAddOns[key] = {
                    ...selectedAddOns[key],
                    value: isYearly ? addon.yearlyAmount : addon.monthlyAmount,
                };
            }
        });
        setSelectedAddOns(updatedAddOns);
    }, [isYearly, setSelectedAddOns]);

    return (
        <div className={styles.addOnsContent}>
            {ADDONSDATA.map((addon) => (
                <div
                    key={addon.id}
                    className={styles.card}
                    onClick={() => {
                        handleAddOnClick(addon)
                    }}
                >
                    <div className={styles.outerGroup}>
                        <input
                            type='checkbox'
                            checked={
                                selectedAddOns[addon.id]?.isChecked || false
                            }
                            onChange={() => {console.log('changed')}}
                        />
                        <div className={styles.innerGroup}>
                            <div className={styles.title}>{addon.title}</div>
                            <div className={styles.description}>
                                {addon.description}
                            </div>
                        </div>
                    </div>
                    <div className={styles.amount}>
                        {!isYearly
                            ? `+$${addon.monthlyAmount}/mo`
                            : `+$${addon.yearlyAmount}/yr`}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AddOns
