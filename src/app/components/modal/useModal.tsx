import { useEffect, useState } from 'react'
import { SelectedAddOns } from '@/app/types/types'
import { DIRECTION } from '@/app/types/enums'
import { STEPCONTENT } from '../../data/StepsData'
import schema from '@/app/types/schema'
import { ZodError } from 'zod'

interface FormErrors {
    [key: string]: string
}

const useModal = () => {
    const [indexStep, setIndexStep] = useState(0)
    const [isYearly, setIsYearly] = useState(false)
    const [selectedAddOns, setSelectedAddOns] = useState<SelectedAddOns>({})
    const [errors, setErrors] = useState({})
    const [showError, setShowError] = useState(false)
    const [selectedPlan, setSelectedPlan] = useState({
        id: '0',
        type: 'Arcade',
        monthlyAmount: 9,
        yearlyAmount: 90,
    })
    const [formData, setFormData] = useState({
        name: '',
        emailAddress: '',
        phoneNumber: '',
    })
    
    const handleStepChange = async (direction: string) => {
        if (direction === DIRECTION.NEXT) {
            const isValid = await validateForm()

            if (!isValid) {
                return
            }
        }
        setIndexStep((prevIndexStep) => {
            if (
                direction === DIRECTION.NEXT &&
                prevIndexStep < STEPCONTENT.length - 1
            ) {
                return prevIndexStep + 1
            } else if (direction === DIRECTION.BACK && prevIndexStep > 0) {
                return prevIndexStep - 1
            } else if (direction === DIRECTION.CHANGE) {
                return prevIndexStep - 2
            }
            return prevIndexStep
        })

    }

    const handleDataChange = (fieldName: string, value: any) => {
        setFormData((prev) => ({
            ...prev,
            [fieldName]: value,
        }))
    }

    const validateForm = async () => {
        try {
            await schema.parseAsync(formData)
            setErrors({})
            return true
        } catch (e) {
            if (e instanceof ZodError) {
                const newErrors = e.errors.reduce((acc: FormErrors, { path, message }) => {
                    acc[path[0]] = message;
                    return acc;
                }, {});
                console.log('new errors; ', newErrors)
                setErrors(newErrors);
                setShowError(true);
            }
            return false
        }
    }

    const handleAnnualChange = () => {
        setIsYearly((prevIsYearly) => !prevIsYearly)
    }

    const handleTotalValue = () => {
        let total = 0

        total += !isYearly
            ? selectedPlan.monthlyAmount
            : selectedPlan.yearlyAmount

        if (Object.values(selectedAddOns).length > 0) {
            Object.values(selectedAddOns).forEach((amount) => {
                total += amount.value
            })
        }
        return total
    }

    return {
        indexStep,
        isYearly,
        selectedPlan,
        selectedAddOns,
        formData,
        errors,
        showError,
        setShowError,
        setIndexStep,
        setSelectedPlan,
        setSelectedAddOns,
        setFormData,
        setErrors,
        handleStepChange,
        handleAnnualChange,
        handleTotalValue,
        handleDataChange,
    }
}

export default useModal
