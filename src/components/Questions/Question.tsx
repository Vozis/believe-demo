import TextRead from '../TextRead/TextReac';
import styles from './Question.module.scss';
interface IQuestion {
    title: string;
    description: string;
    number: number;
    onChange?: (value: boolean) => void;
    isStart: boolean;
}

const Question = ({ title, number, description, onChange, isStart }: IQuestion) => {
    const splitTitle = title.split('\n');
    return (
        <div className={`${styles.content} `}>
            <p className='df jcc aic'>{number}</p>
            <div className={`${styles.container} df jcsb`}>
                <div className={styles.right}>
                    <h3>
                        {splitTitle.map((text, i) => {
                            return <div key={i}>{text}</div>;
                        })}
                    </h3>
                </div>
                <div className={styles.left}>
                    <TextRead isStart={isStart} onChange={value => onChange && onChange(value)} text={description} />
                </div>
            </div>
        </div>
    );
};

export default Question;
