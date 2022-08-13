
import { Box, Button, Divider, InputAdornment, TextField, Typography } from '@mui/material';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ICart } from 'src/types';
import { convertNumberToMoney } from 'src/utils/convertNumberToMoney';
import { MuiChip } from '../MuiChip/MuiChip';
import MuiProduct from '../MuiProduct/MuiProduct';
import { MuiFooter } from './components/MuiFooter';
import { MuiHeader } from './components/MuiHeader';
import { MuiProductList } from './components/MuiProductList';
import { MuiSearch } from './components/MuiSearch';
import { MuiTotal } from './components/MuiTotal';
import { StyledCartPaper, StyledProductContainer, StyledTotal, StyledTitle, StyledContentContainer, StyledTotalContainer, StyledFooterContainer } from './styles';

export const CartMui = () => {
    const [muiData, setMuiData] = useState<ICart>();
    const [searchValue, setSearchValue] = useState('');

    const filteredMuiData = useMemo(() => {
        return muiData?.items?.filter(({ name }) => name.toLowerCase().includes(searchValue.toLowerCase()));
    }, [muiData, searchValue]);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    useEffect(() => {
        getInitialData()
    }, [])

    const getInitialData = useCallback(async () => {
        let responses = await fetch('/api/mui-acima-10-reais')
            .then(response => response.json())
            .then((data) => {
                return data
            })
            .catch(err => {
                console.error('Failed to fetch: mui-acima-10-reais', err);
            })
        setMuiData(responses)
    }, [])


    const handleProductQuantityChange = useCallback((id: string, quantity: number) => {
        setMuiData((prev) => {
            const newData = { ...prev };
            newData.items.forEach((item) => {
                if (item.id === id) {
                    item.quantity = quantity;
                }
            });
            return newData;
        }
        )
    }, [muiData])

    return (
        <StyledCartPaper elevation={3}>
            <MuiHeader />
            <MuiSearch handleSearchChange={handleSearchChange} />
            <MuiProductList handleProductQuantityChange={handleProductQuantityChange} filteredMuiData={filteredMuiData} />
            <MuiTotal muiData={muiData} />
            <MuiFooter />
        </StyledCartPaper>
    )
}