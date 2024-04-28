import styles from './modal.module.scss'
import BgSidebarDesktop from '../images/BgSidebarDesktop'
import Button from '../button/Button'
import StepNavigation from '../step-navigation/StepNavigation'
import YourInfo from '../body-content/your-info/YourInfo'
import SelectPlan from '../body-content/select-plan/SelectPlan'
import AddOns from '../body-content/add-ons/AddOns'
import Summary from '../body-content/summary/Summary'
import { STEPINFO, STEPCONTENT } from '../../data/StepsData'
import { NAVIGATION, DIRECTION } from '@/app/types/enums'
import useModal from './useModal'

export default function Modal() {
    const {
        indexStep,
        isYearly,
        selectedPlan,
        selectedAddOns,
        formData,
        errors,
        showError,
        setShowError,
        setSelectedPlan,
        setSelectedAddOns,
        handleStepChange,
        handleAnnualChange,
        handleTotalValue,
        handleDataChange,
    } = useModal()

    const RIGHTBODYCONTENT = [
        {
            body: (
                <YourInfo
                    formData={formData}
                    errors={errors}
                    showError={showError}
                    handleDataChange={handleDataChange}
                />
            ),
        },
        {
            body: (
                <SelectPlan
                    isYearly={isYearly}
                    selectedPlan={selectedPlan}
                    setSelectedPlan={setSelectedPlan}
                    handleAnnualChange={handleAnnualChange}
                />
            ),
        },
        {
            body: (
                <AddOns
                    isYearly={isYearly}
                    selectedAddOns={selectedAddOns}
                    setSelectedAddOns={setSelectedAddOns}
                />
            ),
        },
        {
            body: (
                <Summary
                    isYearly={isYearly}
                    selectedPlan={selectedPlan}
                    selectedAddOns={selectedAddOns}
                    handleTotalValue={handleTotalValue}
                />
            ),
        },
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
