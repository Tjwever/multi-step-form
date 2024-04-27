import Input from '../../input/Input'
import yourInfoSchema from '../../../types/schema'
import { YourInfoProps } from '@/app/types/types'

const YourInfo: React.FC<YourInfoProps> = ({ setFormData }) => {
    return (
        <>
            <Input
                label={'Name'}
                errorMessage={'This field is required'}
                fieldName={'name'}
                setFormData={setFormData}
                validationSchema={yourInfoSchema.pick({ name: true })}
            />
            <Input
                label={'Email Address'}
                errorMessage={'This field is required'}
                fieldName={'emailAddress'}
                setFormData={setFormData}
                validationSchema={yourInfoSchema.pick({ emailAddress: true })}
            />
            <Input
                label={'Phone Number'}
                errorMessage={'This field is required'}
                fieldName={'phoneNumber'}
                setFormData={setFormData}
                validationSchema={yourInfoSchema.pick({ phoneNumber: true })}
            />
        </>
    )
}

export default YourInfo
