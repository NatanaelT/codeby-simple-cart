import React from 'react'
import { StyledChip } from './styles'

interface MuiChipProps {
    label: string;
    type?: 'success' | 'error' | 'warning' | 'info';
}

export const MuiChip = ({ label, type = "success" }: MuiChipProps) => {
    return (
        <StyledChip chipType={type} label={label} />
    )
}