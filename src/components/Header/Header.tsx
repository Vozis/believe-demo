import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import IconBirds from '../../icons/IconBirds';
import IconStar from '../../icons/IconStar';
import styles from './Header.module.scss';
import FooterMenu from './FooterMenu';
import IconX from '../../icons/IconX';

const Header = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Управление overflow и height для body при открытии/закрытии меню
    useEffect(() => {
        document.body.style.overflow = isVisible ? 'hidden' : '';
        document.body.style.height = isVisible ? '100vh' : '';
    }, [isVisible]);

    // Варианты анимации для линий бургера
    const lineVariants = {
        hamburger: {
            rotate: 0,
            y: 0,
            transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
        },
        cross: {
            transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
        },
    };

    const topLineVariants = {
        ...lineVariants,
        cross: { rotate: 45, y: 3.5, scale: 1.2 },
    };

    const bottomLineVariants = {
        ...lineVariants,
        cross: { rotate: -45, y: -4.5, scale: 1.2 },
    };

    return (
        <>
            <AnimatePresence>{isVisible && <FooterMenu />}</AnimatePresence>
            <header className={`${styles.header}`}>
                <div className={`${styles.desktop} df jcsb aic`}>
                    <IconStar className={styles.star} />
                    <p className={styles.manifesto}>Manifesto</p>
                    <div className={styles.believe}>
                        <button>Believe</button>
                    </div>

                    <button className={styles.btn}>
                        <IconX className={styles.icon} />
                    </button>

                    <button className={styles.btn}>
                        <IconBirds className={styles.icon} />
                    </button>
                </div>

                <div className={`${styles.mobile} df aic jcsb`}>
                    <IconStar className={styles.star} />
                    <div className={'df'} style={{ gap: 8 }}>
                        <div className={styles.believe}>
                            <button>Believe</button>
                        </div>
                        <button onClick={() => setIsVisible(prev => !prev)} className={`${styles.btn} ${styles.burgerBtn}`}>
                            <div className={styles.burger}>
                                <motion.div
                                    className={styles.burgerLine}
                                    variants={topLineVariants}
                                    animate={isVisible ? 'cross' : 'hamburger'}
                                    initial='hamburger'
                                />
                                <motion.div
                                    className={styles.burgerLine}
                                    variants={bottomLineVariants}
                                    animate={isVisible ? 'cross' : 'hamburger'}
                                    initial='hamburger'
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
