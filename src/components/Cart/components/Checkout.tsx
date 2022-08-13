import { DefaultButton } from "src/components/DefaultButton/DefaultButton"
import styles from '../Cart.module.css'

export const Checkout = () => {

    const handleCheckout = (event: React.SyntheticEvent) => {
        alert('compra finalizada')
    }

    return (
        <footer className={styles.footerContainer}>
            <DefaultButton text="Finalizar Compra" onClick={handleCheckout} />
        </footer>
    )
}