import { useState } from 'react'
import styles from './modal.module.scss'
import BgSidebarDesktop from '../images/BgSidebarDesktop'
import Button from '../button/Button'
import StepNavigation from '../step-navigation/StepNavigation'
import YourInfo from '../body-content/your-info/YourInfo'
import SelectPlan from '../body-content/select-plan/SelectPlan'
import AddOns from '../body-content/add-ons/AddOns'
import Summary from '../body-content/summary/Summary'
import { STEPINFO, STEPCONTENT } from '../../data/StepsData'

enum NAVIGATION {
    NONE = 'none',
    NEXT = 'next',
    BACK = 'goBack',
    CONFIRM = 'confirm',
}

enum DIRECTION {
    BACK = 'back',
    NEXT = 'next',
}

export default function Modal() {
    const [indexStep, setIndexStep] = useState(0)
    const [selected, setSelected] = useState(false)
    const [checked, setChecked] = useState(false)

    const handleStepChange = (direction: string) => {
        setIndexStep((prevIndexStep) => {
            if (
                direction === DIRECTION.NEXT &&
                prevIndexStep < STEPCONTENT.length - 1
            ) {
                return prevIndexStep + 1
            } else if (direction === DIRECTION.BACK && prevIndexStep > 0) {
                return prevIndexStep - 1
            }
            return prevIndexStep
        })
    }

    const handleChange = () => {
        setChecked((prevChecked) => !prevChecked)
    }

    const RIGHTBODYCONTENT = [
        { body: <YourInfo /> },
        { body: <SelectPlan checked={checked} handleChange={handleChange} /> },
        { body: <AddOns /> },
        { body: <Summary /> },
    ]

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <BgSidebarDesktop />
                    <div className={styles.stepNavContainer}>
                        {STEPINFO.map((step) => (
                            <StepNavigation
                                key={step.index}
                                index={step.index}
                                title={step.title}
                                isSelected={indexStep === step.index - 1}
                            />
                        ))}
                    </div>
                </div>
                <div className={styles.stepInfoContainer}></div>
            </div>
            <div className={styles.right}>
                <div className={styles.rightHeader}>
                    <h2 className={styles.title}>
                        {STEPCONTENT[indexStep].title}
                    </h2>
                    <div className={styles.text}>
                        {STEPCONTENT[indexStep].description}
                    </div>
                </div>
                <div className={styles.rightBody}>
                    {RIGHTBODYCONTENT[indexStep].body}
                </div>
                <div className={styles.rightFooter}>
                    <Button
                        variant={
                            indexStep === 0 ? NAVIGATION.NONE : NAVIGATION.BACK
                        }
                        onClick={() => handleStepChange(DIRECTION.BACK)}
                    />
                    <Button
                        variant={
                            indexStep === 3
                                ? NAVIGATION.CONFIRM
                                : NAVIGATION.NEXT
                        }
                        onClick={() => handleStepChange(DIRECTION.NEXT)}
                    />
                </div>
            </div>
        </div>
    )
}
