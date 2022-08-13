import { IProduct } from "src/types/IProduct";
import { addDecimalDot } from "src/utils/addDecimalDot";
import { convertNumberToMoney } from "src/utils/convertNumberToMoney";
import style from './Product.module.css';


export const Product = ({ name, price, imageUrl, sellingPrice }: IProduct) => {

    const convertNumber = (value: number) => {
        let parsedValueWithDot = addDecimalDot(value)
        let moneyValue = convertNumberToMoney(parsedValueWithDot)
        return moneyValue
    }

    return (
        <div className={style.productContainer}>
            <div>
                <img className={style.productImage} src={imageUrl} />
            </div>
            <div>
                <p className={[style.productName, style.product].join(' ')}>{name}</p>
                <p className={[style.productPrice, style.product].join(' ')}>{convertNumber(price)}</p>
                <p className={[style.productSellingPrice, style.product].join(' ')}>{convertNumber(sellingPrice)}</p>
            </div>
        </div>
    )
}