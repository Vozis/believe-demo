import styles from './Summary.module.scss';
import AnimatedSection from '../AnimatedSection/AnimatedSection.tsx';

const Summary = () => {
    return (
        <AnimatedSection className={`${styles.summary} df aic fdc `}>
            {/*<div className={styles.title}>Summary</div>*/}
            <div className={styles.textContainer}>
                <p>There's no need to name it.</p>
                <p>
                    <span className={styles.emphasized}>We all carry it — in different ways</span>,
                </p>
                <br />
                <p>for different reasons. But</p>
                <p>
                    <span className={styles.emphasized}>it's always there.</span>
                </p>
                <p>Somewhere just beneath</p>
                <br />
                <p>the surface</p>
            </div>
        </AnimatedSection>
    );
};

export default Summary;
