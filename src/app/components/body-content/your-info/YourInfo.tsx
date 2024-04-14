import Input from '../../input/Input'

const YourInfo = () => {
    return (
        <>
            <Input label={'Name'} errorMessage={'This field is required'} />
            <Input
                label={'Email Address'}
                errorMessage={'This field is required'}
            />
            <Input
                label={'Phone Number'}
                errorMessage={'This field is required'}
            />
        </>
    )
}

export default YourInfo
