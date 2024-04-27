export type SelectedAddOns = {
    [id: string]: {
        title: string
        value: number
        isChecked: boolean
    }
}
export type AddOnProps = {
    isYearly: boolean
    selectedAddOns: SelectedAddOns
    setSelectedAddOns: (addon: SelectedAddOns) => void
}

export type InputDetails = {
    name: string
    emailAddress: string
    phoneNumber: string
}

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label: string
    errorMessage?: string
    showError?: boolean
    validationSchema?: any
    fieldName: string
    setFormData?: (fieldName: string, value: string) => void
}

export type PlanDetails = {
    id: string
    type: string
    monthlyAmount: number
    yearlyAmount: number
}

export type SummaryProps = {
    isYearly: boolean
    selectedPlan: PlanDetails
    selectedAddOns: SelectedAddOns
    handleTotalValue: () => number
}

export type SelectPlanProps = {
    isYearly: boolean
    selectedPlan: PlanDetails
    setSelectedPlan: (plan: PlanDetails) => void
    handleAnnualChange: () => void
}

export type YourInfoProps = {
    formData: InputDetails
    handleDataChange?: (fieldName: string, value: string) => void
}
