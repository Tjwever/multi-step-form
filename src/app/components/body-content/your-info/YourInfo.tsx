import Input from '../../input/Input'
import yourInfoSchema from '../../../types/schema'
import { YourInfoProps } from '@/app/types/types'

const YourInfo: React.FC<YourInfoProps> = ({ formData, handleDataChange }) => {
    return (
        <>
            <Input
                label={'Name'}
                value={formData.name}
                errorMessage={'This field is required'}
                fieldName={'name'}
                setFormData={handleDataChange}
                validationSchema={yourInfoSchema.pick({ name: true })}
            />
            <Input
                label={'Email Address'}
                value={formData.emailAddress}
                errorMessage={'This field is required'}
                fieldName={'emailAddress'}
                setFormData={handleDataChange}
                validationSchema={yourInfoSchema.pick({ emailAddress: true })}
            />
            <Input
                label={'Phone Number'}
                value={formData.phoneNumber}
                errorMessage={'This field is required'}
                fieldName={'phoneNumber'}
                setFormData={handleDataChange}
                validationSchema={yourInfoSchema.pick({ phoneNumber: true })}
            />
        </>
    )
}

export default YourInfo
