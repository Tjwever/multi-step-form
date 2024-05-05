export type SelectedAddOns = {
    [id: string]: {
        title: string
        value: number
        isChecked: boolean
    }
}
export type AddOnProps = {
    isGoingBack: boolean
    isYearly: boolean
    selectedAddOns: SelectedAddOns
    setSelectedAddOns: (addon: SelectedAddOns) => void
}

export type InputDetails = {
    name: string
    emailAddress: string
    phoneNumber: string
}

export type PlanDetails = {
    id: string
    type: string
    monthlyAmount: number
    yearlyAmount: number
}

export type SummaryProps = {
    isGoingBack: boolean
    handleStepChange: (step: string) => void
    isYearly: boolean
    selectedPlan: PlanDetails
    selectedAddOns: SelectedAddOns
    handleTotalValue: () => number
}

export type SelectPlanProps = {
    isGoingBack: boolean
    isYearly: boolean
    selectedPlan: PlanDetails
    setSelectedPlan: (plan: PlanDetails) => void
    handleAnnualChange: () => void
}

export type ErrorDetails = {
    name?: string
    emailAddress?: string
    phoneNumber?: string
}

export type YourInfoProps = {
    isGoingBack: boolean
    formData: InputDetails
    errors?: ErrorDetails
    showError?: boolean
    handleDataChange?: (fieldName: string, value: string) => void
}

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label: string
    errors?: string
    showError?: boolean
    validationSchema?: any
    fieldName: string
    setFormData?: (fieldName: string, value: string) => void
}