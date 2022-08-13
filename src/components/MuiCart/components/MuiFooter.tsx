import { Button } from "@mui/material"
import { StyledFooterContainer } from "../styles"

export const MuiFooter = () => {
    return (
        <StyledFooterContainer>
            <Button sx={{ fontWeight: 'bold' }} fullWidth variant="contained">Finalizar Compra</Button>
        </StyledFooterContainer>
    )
}