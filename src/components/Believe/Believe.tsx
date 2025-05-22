import { useState, useEffect } from 'react';
import styles from './Believe.module.scss';
import { AnimatePresence, motion } from 'motion/react';

const Believe = () => {
    const [showGradient, setShowGradient] = useState(false);

    useEffect(() => {
        // Задержка для появления градиента после завершения анимации
        const timer = setTimeout(() => {
            setShowGradient(true);
        }, 3000); // 1 секунда задержки, можно настроить по необходимости

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`${styles.bel} df jcc`}>
            <div>
                <p>
                    You believe <br /> in something
                </p>
                <span>don’t you?</span>
                <AnimatePresence>
                    {showGradient && (
                        <motion.div
                            className={styles.gradient}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.6 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.2, ease: 'easeInOut' }}
                        />
                    )}
                </AnimatePresence>
                <div className='df jcc'>
                    <button>Believe</button>
                </div>
            </div>
        </div>
    );
};

export default Believe;
