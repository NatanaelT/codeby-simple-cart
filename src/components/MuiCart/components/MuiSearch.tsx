import { InputAdornment, TextField } from "@mui/material"
import { StyledContentContainer } from "../styles"
import SearchIcon from '@mui/icons-material/Search';

interface MuiSearchProps {
    handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const MuiSearch = ({ handleSearchChange }: MuiSearchProps) => {
    return (
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
    )
}