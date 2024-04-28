import Input from '../../input/Input'
import yourInfoSchema from '../../../types/schema'
import { YourInfoProps } from '@/app/types/types'

const YourInfo: React.FC<YourInfoProps> = ({ formData, errors, showError, handleDataChange }) => {
    return (
        <>
            <Input
                label={'Name'}
                value={formData.name}
                errors={errors?.name}
                showError={showError}
                fieldName={'name'}
                setFormData={handleDataChange}
                validationSchema={yourInfoSchema.pick({ name: true })}
            />
            <Input
                label={'Email Address'}
                value={formData.emailAddress}
                errors={errors?.emailAddress}
                showError={showError}
                fieldName={'emailAddress'}
                setFormData={handleDataChange}
                validationSchema={yourInfoSchema.pick({ emailAddress: true })}
            />
            <Input
                label={'Phone Number'}
                value={formData.phoneNumber}
                errors={errors?.phoneNumber}
                showError={showError}
                fieldName={'phoneNumber'}
                setFormData={handleDataChange}
                validationSchema={yourInfoSchema.pick({ phoneNumber: true })}
            />
        </>
    )
}

export default YourInfo
