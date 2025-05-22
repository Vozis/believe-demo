import TextRead from '../TextRead/TextReac';
import styles from './Question.module.scss';
import AnimatedSection from '../AnimatedSection/AnimatedSection.tsx';

interface IQuestion {
    title: string;
    description: string;
    number: number;
    onChange?: (value: boolean) => void;
    isStart: boolean;
    onProgress?: (progress: number) => void;
    externalProgress?: number;
}

const Question = ({ title, number, description, onChange, isStart, onProgress, externalProgress }: IQuestion) => {
    const splitTitle = title.split('\n');

    const handleTextProgress = (charIndex: number, totalChars: number) => {
        if (onProgress) {
            onProgress(charIndex / totalChars);
        }
    };

    return (
        <AnimatedSection className={`${styles.content} `}>
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
                    <TextRead
                        isStart={isStart}
                        onChange={value => onChange && onChange(value)}
                        text={description}
                        onProgress={handleTextProgress}
                        externalProgress={externalProgress}
                    />
                </div>
            </div>
        </AnimatedSection>
    );
};

export default Question;
