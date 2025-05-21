import styles from './BelieveManifesto.module.scss';

const MobileBelieveManifesto = () => {
    const images = [
        '/image/believe-manifesto/1.png',
        '/image/believe-manifesto/2.png',
        '/image/believe-manifesto/3.png',
        '/image/believe-manifesto/4.png',
        '/image/believe-manifesto/5.png',
        '/image/believe-manifesto/6.png',
        '/image/believe-manifesto/7.png',
    ];
    return (
        <div className={styles.mobile}>
            <div className={styles.text}>
                <h2>
                    Believe <span>Manifesto</span>
                    <div className={styles.gradient} />
                </h2>
                <p>Believe in something</p>
            </div>
            <div className={styles.container}>
                <div className={styles.images}>
                    <div className={styles.image}>
                        <img src={images[0]} alt='image' />
                        <img src={images[1]} alt='image' />
                    </div>
                    <div className={styles.image}>
                        <img src={images[3]} alt='image' />
                        <img src={images[4]} alt='image' />
                    </div>
                    <div className={styles.image}>
                        <div className={styles.inner}>
                            <img src={images[5]} alt='image' />
                            <img src={images[6]} alt='image' />
                        </div>

                        <img className={styles.bottomImage} src={images[2]} alt='image' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileBelieveManifesto;
