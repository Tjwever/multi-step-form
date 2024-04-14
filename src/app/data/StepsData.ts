export const STEPINFO = [
    { index: 1, title: 'YOUR INFO' },
    { index: 2, title: 'SELECT PLAN' },
    { index: 3, title: 'ADD-ONS' },
    { index: 4, title: 'SUMMARY' },
] as const

export const STEPCONTENT = [
    {
        index: 0,
        title: 'Personal info',
        description:
            'Please provide your name, email address, and phone number.',
    },
    {
        index: 1,
        title: 'Select your plan',
        description: 'You have the option of monthly or yearly billing.',
    },
    {
        index: 2,
        title: 'Pick add-ons',
        description: 'Add-ons help enhance your gaming experience.',
    },
    {
        index: 3,
        title: 'Finishing up',
        description: 'Double-check everything looks OK before confirming.',
    },
]
