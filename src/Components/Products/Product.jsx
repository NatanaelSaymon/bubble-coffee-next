import Image from 'next/image'
import styles from './Product.module.scss'
import { Star } from '@/UI/Star'

export function Product({ product, title, roast, stars, reviews, price }) {
    return(
        <div className={styles.product}>
            <Image src={`/product${product}.png`} alt={`Produto ${product}`} width={200} height={300} />
            <h2>{title}</h2>
            <h3>{roast}</h3>
            <Star stars={stars} reviews={reviews}/>
            <h4>R$ {price}</h4>
        </div>
    )
}