import React, { useCallback, useEffect, useState } from 'react';
import { ICart } from 'src/types';
import { Cart } from '../Cart/Cart';
import { CartMui } from '../MuiCart/MuiCart';
import styles from './CartsWrapper.module.css';

export const CartsWrapper = () => {
    const [lessThanTen, setLessThanTen] = useState<ICart>();
    const [moreThanTen, setMoreThanTen] = useState<ICart>();

    useEffect(() => {
        getInitialData()
    }, [])

    const getInitialData = useCallback(async () => {
        const urls = ['/api/abaixo-10-reais', '/api/acima-10-reais']

        let responses = await Promise.all(urls.map(url => fetch(url)
            .then(response => response.json())
            .then((data) => {
                return data
            })
            .catch(err => {
                console.error('Failed to fetch', err);
            })))
        setLessThanTen(responses[0])
        setMoreThanTen(responses[1])
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Cart data={lessThanTen} />
            </div>
            <div className={styles.item}>
                <Cart data={moreThanTen} />
            </div>
            <div className={styles.item}>
                <CartMui />
            </div>
        </div>
    );
}