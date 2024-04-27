import { z } from 'zod'

const yourInfoSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    emailAddress: z.string().email('Invalid email format'),
    phoneNumber: z
        .string()
        .regex(/^\d{10}$/, 'Invalid phone number, must be 10 digits'),
})

export default yourInfoSchema
