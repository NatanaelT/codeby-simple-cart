import { useContext } from "react"
import { SuccessChip } from "src/components/SuccessChip/SuccessChip"
import { addDecimalDot } from "src/utils/addDecimalDot"
import { convertNumberToDecimalAndMoney } from "src/utils/convertNumberToDecimalAndMoney"
import { CartContext } from "../Cart"
import styles from '../Cart.module.css'

export const Total = () => {
    const data = useContext(CartContext);
    return (
        <>
            <div className={styles.totalContainer}>
                <p className={styles.total}>Total</p>
                <p className={styles.total}>{convertNumberToDecimalAndMoney(data?.value ?? 0)}</p>
            </div>
            {addDecimalDot(data?.value ?? 0) > 10 && (
                <div className={styles.chipContainer} >
                    <SuccessChip text="Parabéns, sua compra tem frete grátis !" />
                </div>
            )}
        </>
    )
}