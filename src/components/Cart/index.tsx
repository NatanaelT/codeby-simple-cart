import React from 'react'
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

    const convertNumberToStringWithDot = (number: number) => {
        let stringValue = number.toString()
        let valueWithDot: string = '0'
        if (stringValue.length === 2) valueWithDot = `${stringValue.slice(1, 1)}.${stringValue.slice(0)}`
        if (stringValue.length === 3) valueWithDot = `${stringValue.slice(0, 1)}.${stringValue.slice(1)}`
        if (stringValue.length === 4) valueWithDot = `${stringValue.slice(0, 2)}.${stringValue.slice(2)}`
        return parseFloat(valueWithDot)
    }

    const convertNumber = (value: number) => {
        let parsedValueWithDot = convertNumberToStringWithDot(value)
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
                        return <Product key={`product_${name}`} name={name} price={convertNumber(price)} sellingPrice={convertNumber(sellingPrice)} imageUrl={imageUrl} />
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
                {convertNumberToStringWithDot(data?.value ?? 0) > 10 && (
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