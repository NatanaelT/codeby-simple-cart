import { Divider } from "@mui/material"
import MuiProduct from "src/components/MuiProduct/MuiProduct"
import { IItem } from "src/types"
import { StyledProductContainer } from "../styles"

interface MuiProductListProps {
    filteredMuiData: IItem[];
    handleProductQuantityChange: (id: string, quantity: number) => void;
}

export const MuiProductList = ({ handleProductQuantityChange, filteredMuiData }) => {
    return (
        <>
            <StyledProductContainer >
                {filteredMuiData?.length > 0 ?
                    filteredMuiData.map(({ name, price, imageUrl, sellingPrice, id }) => {
                        return <MuiProduct
                            id={id}
                            name={name}
                            price={price}
                            imageUrl={imageUrl}
                            sellingPrice={sellingPrice}
                            handleProductQuantityChange={(id, quantity) => handleProductQuantityChange(id, quantity)}
                        />
                    })
                    : <h1>Não há itens no carrinho</h1>
                }
            </StyledProductContainer>
            <Divider />
        </>
    )
}