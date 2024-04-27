import React, { useState } from 'react'
import styles from './input.module.scss'
import { InputProps } from '@/app/types/types'

const Input: React.FC<InputProps> = ({
    label,
    value,
    errorMessage = '',
    showError,
    validationSchema,
    fieldName,
    setFormData,
    ...props
}) => {
    const [error, setError] = useState<string | null>(null)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value

        if (setFormData) {
            setFormData(fieldName, value)
        }

        if (validationSchema) {
            try {
                validationSchema.parse({ [fieldName]: value })
                setError(null)
            } catch (error) {
                setError('bad bad bad')
            }
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.labelGroup}>
                <label>{label}</label>
                {showError && errorMessage && (
                    <div style={{ color: 'red' }}>{errorMessage}</div>
                )}
            </div>
            <input type='text' value={value} onChange={handleChange} />
        </div>
    )
}

export default Input
