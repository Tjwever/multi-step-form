import Input from '../../input/Input'
import yourInfoSchema from '../../../types/schema'
import { YourInfoProps } from '@/app/types/types'
import { motion } from 'framer-motion'

const YourInfo: React.FC<YourInfoProps> = ({
    isGoingBack,
    formData,
    errors,
    showError,
    handleDataChange,
}) => {
    return (
        <motion.div
            initial={{ x: isGoingBack ? -300 : 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
        >
            <Input
                label={'Name'}
                value={formData.name}
                errors={errors?.name}
                showError={showError}
                fieldName={'name'}
                placeholder={'e.g. Stephen King'}
                setFormData={handleDataChange}
                validationSchema={yourInfoSchema.pick({ name: true })}
            />
            <Input
                label={'Email Address'}
                value={formData.emailAddress}
                errors={errors?.emailAddress}
                showError={showError}
                fieldName={'emailAddress'}
                placeholder={'e.g. stephenking@lorem.com'}
                setFormData={handleDataChange}
                validationSchema={yourInfoSchema.pick({ emailAddress: true })}
            />
            <Input
                label={'Phone Number'}
                value={formData.phoneNumber}
                errors={errors?.phoneNumber}
                showError={showError}
                fieldName={'phoneNumber'}
                placeholder={'e.g. 1231231234'}
                setFormData={handleDataChange}
                validationSchema={yourInfoSchema.pick({ phoneNumber: true })}
            />
        </motion.div>
    )
}

export default YourInfo
