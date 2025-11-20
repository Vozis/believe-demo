import styles from './Believe.module.scss';
import AnimatedSection from '../AnimatedSection/AnimatedSection.tsx';

const Believe = () => {
    // const [showGradient, setShowGradient] = useState(false);
    //
    // useEffect(() => {
    //     // Задержка для появления градиента после завершения анимации
    //     const timer = setTimeout(() => {
    //         setShowGradient(true);
    //     }, 1000); // 1 секунда задержки, можно настроить по необходимости
    //
    //     return () => clearTimeout(timer);
    // }, []);

    return (
        <div className={`${styles.bel} df jcc`}>
            <div>
                <AnimatedSection>
                    <p>
                        You believe <br /> in something
                    </p>
                    <span>don’t you?</span>
                </AnimatedSection>
                {/*<AnimatePresence>*/}
                {/*    {showGradient && (*/}
                {/*        <motion.div*/}
                {/*            className={styles.gradient}*/}
                {/*            initial={{ opacity: 0 }}*/}
                {/*            animate={{ opacity: 0.6 }}*/}
                {/*            exit={{ opacity: 0 }}*/}
                {/*            transition={{ duration: 1.2, ease: 'easeInOut' }}*/}
                {/*        />*/}
                {/*    )}*/}
                {/*</AnimatePresence>*/}
                <div className='df jcc'>
                    <a href="https://jup.ag/swap?sell=So11111111111111111111111111111111111111112&buy=HoQYRCnUeyZZyFiPtYDw48kHyGwjsaUXJxDVtxcK4yPg" target="_blank">Believe</a>
                </div>
            </div>
        </div>
    );
};

export default Believe;
