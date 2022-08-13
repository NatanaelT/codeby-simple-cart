import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Divider, InputAdornment, TextField, Typography } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import { convertNumberToMoney } from 'src/utils/convertNumberToMoney';
import { MuiChip } from '../MuiChip';
import MuiProduct from '../MuiProduct';
import { StyledCartPaper, StyledProductContainer, StyledTotal, StyledTitle, StyledContentContainer, StyledTotalContainer, StyledFooterContainer } from './styles';

interface CartMUIProps {
}

export const CartMui = ({ }: CartMUIProps) => {
    const [muiData, setMuiData] = useState<any>([]);
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

    const getInitialData = async () => {
        let responses = await fetch('/api/mui-acima-10-reais')
            .then(response => response.json())
            .then((data) => {
                return data
            })
            .catch(err => {
                console.error('Failed to fetch: mui-acima-10-reais', err);
            })
        setMuiData(responses)
    }


    const handleProductQuantityChange = (id: number, quantity: number) => {
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
    }

    const getTotal = () => {
        let total = muiData?.items?.reduce((acc, item) => {
            return acc + (item.quantity * item.sellingPrice);
        }, 0);
        return total
    }

    return (
        <StyledCartPaper elevation={3}>
            <StyledTitle>
                Meu carrinho
            </StyledTitle>
            <Divider />
            <StyledContentContainer>
                <TextField
                    id="search-input"
                    variant="standard"
                    fullWidth
                    label=""
                    onChange={handleSearchChange}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            </StyledContentContainer>
            <StyledProductContainer >
                {filteredMuiData?.length > 0 ?
                    filteredMuiData.map(({ name, price, imageUrl, sellingPrice, id }) => {
                        return <MuiProduct id={id} name={name} price={price} imageUrl={imageUrl} sellingPrice={sellingPrice} handleProductQuantityChange={handleProductQuantityChange} />
                    })
                    : <h1>Não há itens no carrinho</h1>
                }
            </StyledProductContainer>
            <Divider />
            <StyledTotalContainer>
                <MuiChip type={getTotal() > 10 ? 'success' : 'info'} label={getTotal() > 10 ? 'Parabéns, sua compra tem frete grátis !' : `Gaste mais ${convertNumberToMoney(10 - getTotal())} para frete grátis!`} />
                <StyledTotal>{convertNumberToMoney(getTotal() ?? 0)}</StyledTotal>
            </StyledTotalContainer>
            <Divider />
            <StyledFooterContainer>
                <Button sx={{ fontWeight: 'bold' }} fullWidth variant="contained">Finalizar Compra</Button>
            </StyledFooterContainer>
        </StyledCartPaper>
    )
}