import { Divider } from "@mui/material"
import { useCallback } from "react"
import { MuiChip } from "src/components/MuiChip/MuiChip"
import { ICart } from "src/types";
import { convertNumberToMoney } from "src/utils/convertNumberToMoney";
import { StyledTotal, StyledTotalContainer } from "../styles"

interface MuiTotalProps {
    muiData: ICart;
}

export const MuiTotal = ({ muiData }: MuiTotalProps) => {

    const getTotal = useCallback(() => {
        let total = muiData?.items?.reduce((acc, item) => {
            return acc + (item.quantity * item.sellingPrice);
        }, 0);
        return total
    }, [muiData])

    return (
        <>
            <StyledTotalContainer>
                <MuiChip
                    type={getTotal() > 10 ? 'success' : 'info'}
                    label={getTotal() > 10 ? 'Parabéns, sua compra tem frete grátis !' : `Gaste mais ${convertNumberToMoney(10 - getTotal())} para frete grátis!`}
                />
                <StyledTotal>{convertNumberToMoney(getTotal() ?? 0)}</StyledTotal>
            </StyledTotalContainer>
            <Divider />
        </>
    )
}