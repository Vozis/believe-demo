import styles from './Summary.module.scss';

const Summary = () => {
    return (
        <div className={`${styles.summary} df aic fdc `}>
            <h3>
                There’s no need to name it. <span> We all carry it — in different ways </span>, for different reasons. But{' '}
                <span> it’s always there.</span>
                Somewhere just beneath the surface
            </h3>
        </div>
    );
};

export default Summary;
