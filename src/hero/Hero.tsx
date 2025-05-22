import RotatingWords from './RotatingWords';
import styles from './Hero.module.scss';
import { motion } from 'motion/react';

const Hero = () => {
    return (
        <div className={`${styles.hero} df aic`}>
            <div>
                <h1>
                    <span className={styles.blur}>Be</span>
                    <span className={styles.last}>li</span>eve in <RotatingWords />
                </h1>
                <motion.h2
                    initial={{ opacity: 0, y: 70, filter: 'blur(20px)' }}
                    animate={{ opacity: 0.1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 1.5, delay: 1, ease: 'easeOut' }}
                >
                    SOMETHING
                </motion.h2>
            </div>
        </div>
    );
};

export default Hero;
