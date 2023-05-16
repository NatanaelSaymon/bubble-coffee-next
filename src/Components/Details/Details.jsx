import Image from 'next/image'
import styles from './Details.module.scss'

const Details = () => {
    return(
        <section className={styles.details}>
            <div className={styles.roast}>
                <h2>Experimente os diferentes tipos de torra</h2>
                <div className={styles.types}>
                    <span className={styles.light} />
                    <span className={styles.medium} />
                    <span className={styles.dark} />
                </div>
            </div>

            <Image src='/coffee2.png' alt='café' width={340} height={225} />

            <div className={styles['card-wrapper']}>
                <div className={styles.card}>
                    <h2>Bubble Cofee</h2>

                    <div className={styles.info}>
                        <h3>Endereço</h3>
                        <h4>Rua Fantasia, n 90 / Cidade - SP</h4>
                    </div>

                    <div className={styles.info}>
                        <h3>Funcinamento</h3>
                        <h4>
                            <span>Segunda a sexta: 09:00 ás 18:00</span>
                            <span>Sabados: 09:00 ás 14:00</span>
                        </h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Details