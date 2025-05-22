import styles from './Believe.module.scss';

const Believe = () => {
    return (
        <div className={`${styles.bel} df jcc`}>
            <div>
                <p>
                    You believe <br /> in something
                </p>
                <span>don’t you?</span>
                <div className={styles.gradient} />
                <div className='df jcc'>
                    <button>Believe</button>
                </div>
            </div>
        </div>
    );
};

export default Believe;
