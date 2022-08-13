import { useContext } from 'react';
import { Product } from 'src/components/Product/Product'
import { addDecimalDot } from 'src/utils/addDecimalDot'
import { CartContext } from '../Cart';
import styles from '../Cart.module.css'

export const ProductList = () => {
    const data = useContext(CartContext);
    return (
        <section className={addDecimalDot(data?.value ?? 0) > 10 ? styles.productContainerNoShipping : styles.productContainerShipping}>
            {data?.items?.length > 0 ?
                data.items.map((item) => {
                    return <Product key={`product_${item.uniqueId}`} item={item} />
                })
                : <h1>Não há itens no carrinho</h1>

            }
        </section>
    )
}