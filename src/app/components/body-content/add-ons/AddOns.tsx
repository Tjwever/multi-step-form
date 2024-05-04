import { useEffect } from 'react'
import { ADDONSDATA } from '../../../data/AddOnsData'
import styles from './addOns.module.scss'
import useAddOns from './useAddOns'
import { AddOnProps } from '@/app/types/types'

const AddOns: React.FC<AddOnProps> = ({
    isYearly,
    selectedAddOns,
    setSelectedAddOns,
}) => {
    const { handleAddOnClick } = useAddOns({ isYearly, selectedAddOns, setSelectedAddOns });

    return (
        <div className={styles.addOnsContent}>
            {ADDONSDATA.map((addon) => (
                <div
                    key={addon.id}
                    className={!selectedAddOns[addon.id]?.isChecked ? styles.card : styles.selected}
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
                            onChange={() => {console.log(selectedAddOns)}}
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
