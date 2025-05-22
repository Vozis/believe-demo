import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import styles from './Question.module.scss';
import TextRead from '../TextRead/TextReac.tsx';

interface IQuestion {
    title: string;
    description: string;
    number: number;
    isActive: boolean;
}

const Question = ({ title, number, description, isActive }: IQuestion) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start 80%', 'end 20%'],
    });

    return (
        <div ref={ref} data-question={number} className={styles.question}>
            <div className={styles.content}>
                <motion.p className='df jcc aic'>{number}</motion.p>
                <div className={`${styles.container} df jcsb`}>
                    <div className={styles.right}>
                        <h3>
                            {title.split('\n').map((text, i) => (
                                <div key={i}>{text}</div>
                            ))}
                        </h3>
                    </div>
                    <div className={styles.left}>
                        <TextRead isStart={isActive} text={description} externalProgress={scrollYProgress} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;
