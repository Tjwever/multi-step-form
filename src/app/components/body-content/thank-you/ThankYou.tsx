import React from 'react'
import styles from './thankYou.module.scss'
import IconThankYou from '../../images/IconThankYou'

const ThankYou: React.FC = () => {
    return (
        <div className={styles.thankyouContainer}>
            <IconThankYou />
            <h1>Thank you!</h1>
            <div>
                Thanks for comfirming your subscription! We hope you have fun
                using our platform. If you eer need support, please feel free to
                email us at support@loremgaming.com.
            </div>
        </div>
    )
}

export default ThankYou
