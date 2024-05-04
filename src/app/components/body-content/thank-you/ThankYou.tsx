import React, { useEffect, useState } from 'react'
import styles from './thankYou.module.scss'
import IconThankYou from '../../images/IconThankYou'
import PuffLoader from 'react-spinners/PuffLoader'

const ThankYou: React.FC = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2500)
    }, [])

    return (
        <div className={styles.thankyouContainer}>
            {loading ? (
                <div className={styles.loaderContainer}>
                    <PuffLoader
                        color={'rgb(71, 61, 255)'}
                        loading={loading}
                        size={150}
                        aria-label='Loading Spinner'
                        data-testid='loader'
                    />
                    <br />
                    <div className={styles.text}>One moment please...</div>
                </div>
            ) : (
                <>
                    <IconThankYou />
                    <h1>Thank you!</h1>
                    <div className={styles.text}>
                        Thanks for comfirming your subscription! We hope you
                        have fun using our platform. If you eer need support,
                        please feel free to email us at support@loremgaming.com.
                    </div>
                </>
            )}
        </div>
    )
}

export default ThankYou
