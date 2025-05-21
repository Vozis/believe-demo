import styles from './BelieveManifesto.module.scss';

const BelieveManifesto = () => {
    return (
        <div className={styles.content}>
            <div className={`${styles.top} df jcc`}>
                <span className='df jcsb'>
                    <img src='/image/believe-manifesto/6.png' alt='' />
                    <img src='/image/believe-manifesto/7.png' alt='' />
                </span>
            </div>

            <div className={`${styles.center} df jcsb aie`}>
                <img src='/image/believe-manifesto/1.png' alt='' />
                <div className={styles.text}>
                    <h2>
                        Believe <span>Manifesto</span>
                        <div className={styles.gradient} />
                    </h2>
                    <p>Believe in something</p>
                </div>
                <img src='/image/believe-manifesto/5.png' alt='' />
            </div>
            <div className={`${styles.bottom} df jcsa`}>
                <img src='/image/believe-manifesto/2.png' alt='' />
                <img src='/image/believe-manifesto/3.png' alt='' />
                <img src='/image/believe-manifesto/4.png' alt='' />
            </div>
        </div>
    );
};

export default BelieveManifesto;
