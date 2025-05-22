import { motion, useMotionValue, useTransform } from 'motion/react';
import { useEffect, useRef, type RefObject } from 'react';
import styles from './ProgressBar.module.scss';

interface ProgressBarProps {
    progress: number;
    questionsRef: RefObject<HTMLDivElement | null>;
}

const ProgressBar = ({ progress, questionsRef }: ProgressBarProps) => {
    const progressBarRef = useRef<HTMLDivElement>(null);
    const isFixed = useMotionValue(true);
    const position = useTransform(isFixed, latest => (latest ? 'fixed' : 'absolute'));
    const bottom = useTransform(isFixed, latest => (latest ? '50px' : '0'));

    useEffect(() => {
        const handleScroll = () => {
            if (!questionsRef.current || !progressBarRef.current) return;
            const questionsRect = questionsRef.current.getBoundingClientRect();

            // Переключаем между fixed и absolute позиционированием
            isFixed.set(questionsRect.bottom + 100 >= window.innerHeight);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [questionsRef, isFixed]);

    return (
        <motion.div
            ref={progressBarRef}
            className={styles.progressBarContainer}
            style={{
                position,
                bottom,
                left: '50%',
                x: '-50%',
                width: '250px',
                height: '64px',
                padding: '0 24px',
                display: 'flex',
                alignItems: 'center',
                zIndex: 10,
            }}
        >
            <div
                className={styles.progressBar}
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '1px',
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                }}
            >
                <motion.div
                    className={styles.progressBarFill}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '100%',
                        width: `${progress * 100}%`,
                        backgroundColor: 'white',
                    }}
                    transition={{ ease: [0.5, 0, 0, 1], duration: 0.3 }}
                />
            </div>
        </motion.div>
    );
};

export default ProgressBar;
