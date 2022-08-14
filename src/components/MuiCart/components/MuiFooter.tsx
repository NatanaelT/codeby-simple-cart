import { Button } from "@mui/material"
import { StyledFooterContainer } from "../styles"

interface MuiFooterProps {
    handleCheckout: () => void
}

export const MuiFooter = ({ handleCheckout }: MuiFooterProps) => {
    return (
        <StyledFooterContainer>
            <Button onClick={handleCheckout} sx={{ fontWeight: 'bold' }} fullWidth variant="contained">Finalizar Compra</Button>
        </StyledFooterContainer>
    )
}