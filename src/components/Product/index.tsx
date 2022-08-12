import { convertNumberToMoney } from "../../utils/convertNumberToMoney";
import style from './Product.module.css'

interface ProductProps {
    name: string;
    price: string;
    imageUrl: string;
    sellingPrice: string;
}

export const Product = ({ name, price, imageUrl, sellingPrice }: ProductProps) => {
    return (
        <div className={style.productContainer}>
            <div>
                <img className={style.productImage} src={imageUrl} />
            </div>
            <div>
                <p className={[style.productName, style.product].join(' ')}>{name}</p>
                <p className={[style.productPrice, style.product].join(' ')}>{price}</p>
                <p className={[style.productSellingPrice, style.product].join(' ')}>{sellingPrice}</p>
            </div>
        </div>
    )
}