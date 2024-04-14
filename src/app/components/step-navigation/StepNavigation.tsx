import styles from './stepNavigatoin.module.scss'

type StepNavigationProps = {
    index: number
    title: string
    isSelected: boolean
}

export default function StepNavigation({
    index,
    title,
    isSelected,
}: StepNavigationProps) {
    console.log('is seleced', isSelected)
    return (
        <div className={styles.container}>
            <div
                className={
                    !isSelected ? styles.indexContainer : styles.stepSelected
                }
            >
                {index}
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.stepTitle}>STEP {index}</div>
                <div className={styles.title}>{title}</div>
            </div>
        </div>
    )
}
