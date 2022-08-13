import { createContext } from 'react'
import { ICart } from 'src/types'
import { DividerCss } from '../DividerCss/DividerCss'
import styles from './Cart.module.css'
import { Checkout } from './components/Checkout'
import { ProductList } from './components/ProductList'
import { TitleHeader } from './components/TitleHeader'
import { Total } from './components/Total'

interface CartProps {
    data: ICart
}

export const CartContext = createContext(null);

export const Cart = ({ data }: CartProps) => {
    return (
        <div className={styles.cartContainer}>
            <CartContext.Provider value={data}>
                <TitleHeader />
                <DividerCss />
                <ProductList />
                <DividerCss />
                <Total />
                <DividerCss />
                <Checkout />
            </CartContext.Provider>
        </div>
    )
}