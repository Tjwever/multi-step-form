import React, { useEffect, useState } from 'react'
import styles from './input.module.scss'
import { InputProps } from '@/app/types/types'

const Input: React.FC<InputProps> = ({
    label,
    value,
    errors,
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
    }

    useEffect(() => {
        if (showError || errors) {
            console.log('Input log errors: ', errors, showError)
        }
    }, [showError, errors])

    return (
        <div className={styles.container}>
            <div className={styles.labelGroup}>
                <label>{label}</label>
                {showError && errors && (
                    <div style={{ color: 'red' }}>{errors}</div>
                )}
            </div>
            <input className={styles.borderColorDefault} type='text' value={value} onChange={handleChange} />
        </div>
    )
}

export default Input
