import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import styles from './BelieveManifesto.module.scss';

const MobileBelieveManifesto = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isScrollEnd, setIsScrollEnd] = useState(false);
    const [isScrollStart, setIsScrollStart] = useState(true);
    const [scrollDirection, setScrollDirection] = useState(-1); // -1 влево, 1 вправо, 0 нет движения
    const lastScrollLeftRef = useRef(0);

    const images = [
        '/image/believe-manifesto/1.png',
        '/image/believe-manifesto/2.png',
        '/image/believe-manifesto/3.png',
        '/image/believe-manifesto/4.png',
        '/image/believe-manifesto/5.png',
        '/image/believe-manifesto/6.png',
        '/image/believe-manifesto/7.png',
    ];

    const handleScroll = () => {
        if (containerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;

            // Определение направления скролла
            if (scrollLeft > lastScrollLeftRef.current) {
                setScrollDirection(-1); // скролл влево (контент движется вправо)
            } else if (scrollLeft < lastScrollLeftRef.current) {
                setScrollDirection(1); // скролл вправо (контент движется влево)
            }
            lastScrollLeftRef.current = scrollLeft;

            setIsScrollEnd(Math.ceil(scrollLeft + clientWidth) >= scrollWidth - 0);
            setIsScrollStart(scrollLeft <= 0);
        }
    };

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
            return () => container.removeEventListener('scroll', handleScroll);
        }
    }, []);

    // Показываем левый fade только при скролле влево и не в начале
    const showLeftFade = (scrollDirection === 1 && !isScrollStart) || isScrollEnd;

    // Показываем правый fade только при скролле вправо и не в конце
    const showRightFade = (scrollDirection === -1 && !isScrollEnd) || isScrollStart;

    return (
        <div className={styles.mobile}>
            <div className={styles.text}>
                <h2>
                    Believe <span>Manifesto</span>
                    <div className={styles.gradient} />
                </h2>
                <p>Believe in something</p>
            </div>
            <div className={styles.containerWrapper}>
                <AnimatePresence>
                    {showLeftFade && (
                        <motion.div
                            className={styles.fadeLeft}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.9 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        />
                    )}
                </AnimatePresence>
                <div ref={containerRef} className={styles.container} onScroll={handleScroll}>
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
                <AnimatePresence>
                    {showRightFade && (
                        <motion.div
                            className={styles.fadeRight}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.9 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        />
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default MobileBelieveManifesto;
