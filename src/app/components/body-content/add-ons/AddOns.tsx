import { ADDONSDATA } from '../../../data/AddOnsData'
import styles from './addOns.module.scss'
import useAddOns from './useAddOns'
import { AddOnProps } from '@/app/types/types'
import { motion } from 'framer-motion'

const AddOns: React.FC<AddOnProps> = ({
    isGoingBack,
    isYearly,
    selectedAddOns,
    setSelectedAddOns,
}) => {
    const { handleAddOnClick } = useAddOns({
        isGoingBack,
        isYearly,
        selectedAddOns,
        setSelectedAddOns,
    })

    return (
        <motion.div
            className={styles.addOnsContent}
            initial={{ x: isGoingBack ? -300 : 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
        >
            {ADDONSDATA.map((addon) => (
                <div
                    key={addon.id}
                    className={
                        !selectedAddOns[addon.id]?.isChecked
                            ? styles.card
                            : styles.selected
                    }
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
                            onChange={() => {
                                console.log(selectedAddOns)
                            }}
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
        </motion.div>
    )
}

export default AddOns
