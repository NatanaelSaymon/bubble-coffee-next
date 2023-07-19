import Image from 'next/image'
import styles from './Star.module.scss';

export function Star({ stars, reviews }) {
    const renderStars = Array.from({length: stars}, (_, index) => (
        <Image key={index} src='/star.svg' alt='estrela' width={14} height={14} />
    ))

    return(
        <div className={styles.stars}>
            {renderStars}
            {reviews && <span>({reviews})</span>}
        </div>
    )
}