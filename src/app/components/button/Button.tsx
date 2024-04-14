import React from 'react'
import styles from './button.module.scss'

type ButtonProps = {
    variant: 'goBack' | 'next' | 'confirm' | 'none'
    onClick: () => void
}

const Button: React.FC<ButtonProps> = ({ variant, onClick }) => {
    let buttonText: string
    let btnStyle: string

    switch (variant) {
        case 'goBack':
            buttonText = 'Go Back'
            btnStyle = styles.goBackBtn
            break
        case 'next':
            buttonText = 'Next Step'
            btnStyle = styles.nextBtn
            break
        case 'confirm':
            buttonText = 'Confirm'
            btnStyle = styles.confirmBtn
            break
        case 'none':
            buttonText = ''
            btnStyle = styles.noneBtn
            break
        default:
            buttonText = 'Click'
            btnStyle = styles.defaultBtn
    }

    return (
        <button className={btnStyle} onClick={onClick}>
            {buttonText}
        </button>
    )
}

export default Button
