import React, { useEffect } from 'react'
import { Cart } from '../Cart/index';
import styles from './CartsWrapper.module.css'

interface CartsWrapper { }

export const CartsWrapper = ({ }: CartsWrapper) => {
    const [lessThanTen, setLessThanTen] = React.useState([]);
    const [moreThanTen, setMoreThanTen] = React.useState([]);

    useEffect(() => {
        getInitialData()
    }, [])

    const getInitialData = async () => {
        const urls = ['/api/abaixo-10-reais', '/api/acima-10-reais']

        let responses = await Promise.all(urls.map(url => fetch(url)
            .then(response => response.json())
            .then((data) => {
                return data
            })
            .catch(err => {
                console.error('Failed to fetch');
                console.error(err);
            })))
        setLessThanTen(responses[0])
        setMoreThanTen(responses[1])
    }

    return (
        <div className={styles.flexContainer}>
            <Cart data={lessThanTen} />
            <Cart data={moreThanTen} />
            {/* <Cart data={lessThanTen} /> */}
        </div>
    );
}