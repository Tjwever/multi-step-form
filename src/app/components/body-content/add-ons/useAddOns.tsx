import { useEffect } from 'react';
import { ADDONSDATA } from '../../../data/AddOnsData';
import { AddOnProps, SelectedAddOns } from '@/app/types/types'

const useAddOns = ({ isYearly, selectedAddOns, setSelectedAddOns }: AddOnProps) => {
    const handleAddOnClick = (addon: typeof ADDONSDATA[0]) => {
        const newSelectedAddOns: SelectedAddOns = { ...selectedAddOns };
        if (newSelectedAddOns[addon.id]?.isChecked) {
            delete newSelectedAddOns[addon.id];
        } else {
            newSelectedAddOns[addon.id] = {
                title: addon.title,
                value: isYearly ? addon.yearlyAmount : addon.monthlyAmount,
                isChecked: true,
            };
        }
        setSelectedAddOns(newSelectedAddOns);
    };

    useEffect(() => {
        const updatedAddOns: SelectedAddOns = {};
        Object.keys(selectedAddOns).forEach((key) => {
            const addon = ADDONSDATA.find((a) => a.id === key);
            if (addon && selectedAddOns[key].isChecked) {
                updatedAddOns[key] = {
                    ...selectedAddOns[key],
                    value: isYearly ? addon.yearlyAmount : addon.monthlyAmount,
                };
            }
        });
        setSelectedAddOns(updatedAddOns);
    }, [isYearly, setSelectedAddOns]);

    return { handleAddOnClick };
};

export default useAddOns;