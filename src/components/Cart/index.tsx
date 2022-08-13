import React from 'react'
import { addDecimalDot } from '../../utils/addDecimalDot'
import { convertNumberToMoney } from '../../utils/convertNumberToMoney'
import { DefaultButton } from '../DefaultButton/index'
import { DividerCss } from '../DividerCss/index'
import { Product } from '../Product/index'
import { SuccessChip } from '../SuccessChip/index'
import styles from './Cart.module.css'

interface CartProps {
    data: any
}

export const Cart = ({ data }: CartProps) => {

    const handleCheckout = (event: React.SyntheticEvent) => {
    }

    const convertNumber = (value: number) => {
        let parsedValueWithDot = addDecimalDot(value)
        let moneyValue = convertNumberToMoney(parsedValueWithDot)
        return moneyValue
    }

    const TitleHeader = () => {
        return (
            <header className={styles.titleContainer}>
                <h1>Meu Carrinho</h1>
            </header>
        )
    }

    const ProductList = () => {
        return (
            <section className={styles.productContainer}>
                {data?.items?.length > 0 ?
                    data.items.map(({ name, price, imageUrl, sellingPrice }) => {
                        return <Product key={`product_${name}`} name={name} price={price} sellingPrice={sellingPrice} imageUrl={imageUrl} />
                    })
                    : <h1>Não há itens no carrinho</h1>

                }
            </section>
        )
    }

    const Total = () => {
        return (
            <>
                <div className={styles.totalContainer}>
                    <p className={styles.total}>Total</p>
                    <p className={styles.total}>{convertNumber(data?.value ?? 0)}</p>
                </div>
                {addDecimalDot(data?.value ?? 0) > 10 && (
                    <div className={styles.chipContainer} >
                        <SuccessChip text="Parabéns, sua compra tem frete grátis !" />
                    </div>
                )}
            </>
        )
    }

    const Checkout = () => {
        return (
            <footer className={styles.footerContainer}>
                <DefaultButton text="Finalizar Compra" onClick={handleCheckout} />
            </footer>
        )
    }

    return (
        <div className={styles.cartContainer}>
            <TitleHeader />
            <DividerCss />
            <ProductList />
            <DividerCss />
            <Total />
            <DividerCss />
            <Checkout />
        </div>
    )
}