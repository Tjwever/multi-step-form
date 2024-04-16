import React, { useState } from 'react'
import styles from './input.module.scss'

type InputProps = {
    label: string
    errorMessage?: string
    showError?: boolean
}

const Input: React.FC<InputProps> = ({
    label,
    errorMessage = '',
    showError,
}) => {
    const [value, setValue] = useState('')

    const handleAnnualChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return (
        <div className={styles.container}>
            <div className={styles.labelGroup}>
                <label>{label}</label>
                {showError && errorMessage && (
                    <div style={{ color: 'red' }}>{errorMessage}</div>
                )}
            </div>
            <input type='text' />
            {/* <input type='text' value={value} onChange={handleAnnualChange} /> */}
        </div>
    )
}

export default Input
