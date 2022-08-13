import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import { useEffect, useMemo, useState } from 'react';
import { convertNumberToMoney } from 'src/utils/convertNumberToMoney';
import { StyledPrice, StyledProductName, StyledSellingPrice, StyledTotal, StyledProductImg } from './styles';

interface MuiProductProps {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    sellingPrice: number;
    handleProductQuantityChange?: (id: string, quantity: number) => void;
}

export default function MuiProduct({ id, name, price, imageUrl, sellingPrice, handleProductQuantityChange }: MuiProductProps) {
    const [multiplier, setMultiplier] = useState(1);

    useEffect(() => {
        handleProductQuantityChange(id, multiplier);
    }, [multiplier])

    return (
        <Grid container justifyContent={'flex-end'}>
            <Grid item xs={4}>
                <StyledProductImg
                    src={imageUrl}
                    alt={name}
                />
            </Grid>
            <Grid item xs={5}>
                <Box>
                    <StyledProductName>
                        {name}
                    </StyledProductName>
                    <StyledPrice>{convertNumberToMoney(price)}</StyledPrice> - <StyledSellingPrice>{convertNumberToMoney(sellingPrice)}</StyledSellingPrice>
                    <StyledTotal><b>Total:</b>{` ${multiplier} itens - ${convertNumberToMoney(multiplier * sellingPrice)}`}</StyledTotal>
                </Box>
            </Grid>
            <Grid item>
                <IconButton onClick={() => setMultiplier((prev) => prev > 0 ? prev - 1 : prev)} >
                    <ExpandMoreIcon />
                </IconButton>
                <IconButton onClick={() => setMultiplier((prev) => prev + 1)} >
                    <ExpandLessIcon />
                </IconButton>
            </Grid>
        </Grid>
    );
}
