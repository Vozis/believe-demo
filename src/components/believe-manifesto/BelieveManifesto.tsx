import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import { useRef } from 'react';
import styles from './BelieveManifesto.module.scss';

const BelieveManifesto = () => {
    const containerRef = useRef(null);

    // Отслеживание прогресса скролла
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'], // Отслеживаем, когда контейнер входит и выходит из viewport
    });

    // Параллакс-эффект: разные изображения движутся с разной скоростью
    const parallaxY1 = useTransform(scrollYProgress, [0, 1], [0, -350]);
    // const parallaxY2 = useTransform(scrollYProgress, [0, 1], [0, 180]);
    const parallaxY3 = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const parallaxY4 = useTransform(scrollYProgress, [0, 1], [0, 120]);

    // Варианты анимации для параллакса
    const imageVariants: Variants = {
        animate: {
            transition: {
                ease: 'linear',
            },
        },
    };

    return (
        <div className={styles.content} ref={containerRef}>
            <div className={`${styles.top} df jcc`}>
                <span className='df jcsb'>
                    <motion.img
                        src='/image/believe-manifesto/6.png'
                        alt=''
                        className={`${styles.img} ${styles.img6}`}
                        variants={imageVariants}
                        animate='animate'
                        style={{ y: parallaxY4 }}
                    />
                    <motion.img
                        src='/image/believe-manifesto/7.png'
                        alt=''
                        className={`${styles.img} ${styles.img7}`}
                        variants={imageVariants}
                        animate='animate'
                        style={{ y: parallaxY4 }}
                    />
                </span>
            </div>

            <div className={`${styles.center} df jcsb aie`}>
                <motion.img
                    src='/image/believe-manifesto/1.png'
                    alt=''
                    className={`${styles.img} ${styles.img1}`}
                    variants={imageVariants}
                    animate='animate'
                    style={{ y: parallaxY1 }}
                />
                <div className={styles.text}>
                    <h2>
                        Believe <span>Manifesto</span>
                        <div className={styles.gradient} />
                    </h2>
                    <p>Believe in something</p>
                </div>
                <motion.img
                    src='/image/believe-manifesto/5.png'
                    alt=''
                    className={`${styles.img} ${styles.img5}`}
                    variants={imageVariants}
                    animate='animate'
                    style={{ y: parallaxY1 }}
                />
            </div>

            <div className={`${styles.bottom} df jcsa`}>
                <motion.img
                    src='/image/believe-manifesto/2.png'
                    alt=''
                    className={`${styles.img} ${styles.img2}`}
                    variants={imageVariants}
                    animate='animate'
                    style={{ y: parallaxY1 }}
                />
                <motion.img
                    src='/image/believe-manifesto/3.png'
                    alt=''
                    className={`${styles.img} ${styles.img3}`}
                    variants={imageVariants}
                    animate='animate'
                    style={{ y: parallaxY3 }}
                />
                <motion.img
                    src='/image/believe-manifesto/4.png'
                    alt=''
                    className={`${styles.img} ${styles.img4}`}
                    variants={imageVariants}
                    animate='animate'
                    style={{ y: parallaxY1 }}
                />
            </div>
        </div>
    );
};

export default BelieveManifesto;
