import { IItem } from "src/types";
import { convertNumberToDecimalAndMoney } from "src/utils/convertNumberToDecimalAndMoney";
import style from './Product.module.css';

interface ProductProps {
    item: IItem
}

export const Product = ({ item }: ProductProps) => {
    const { name, price, imageUrl, sellingPrice } = item

    return (
        <div className={style.productContainer}>
            <div>
                <img className={style.productImage} src={imageUrl} />
            </div>
            <div>
                <p className={[style.productName, style.product].join(' ')}>{name}</p>
                <p className={[style.productPrice, style.product].join(' ')}>{convertNumberToDecimalAndMoney(price)}</p>
                <p className={[style.productSellingPrice, style.product].join(' ')}>{convertNumberToDecimalAndMoney(sellingPrice)}</p>
            </div>
        </div>
    )
}