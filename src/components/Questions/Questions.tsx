import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import Question from './Question';
import styles from './Question.module.scss';

const Questions = () => {
    const questionsRef = useRef<HTMLDivElement>(null);

    // Отдельные наблюдатели для каждого вопроса
    const { ref: question1Ref, inView: question1InView } = useInView({
        threshold: 0.1,
        triggerOnce: false,
        rootMargin: '0px 0px 0px 0px',
    });

    const { ref: question2Ref, inView: question2InView } = useInView({
        threshold: 0.1,
        triggerOnce: false,
        rootMargin: '30% 0px 0px 0px',
    });

    return (
        <div ref={questionsRef} className={styles.quations}>
            <div ref={question1Ref}>
                <Question
                    number={1}
                    title={`Belief \n is near`}
                    description={`Before every decision, every risk, every step forward — there is belief. Not always loud. Not always clear. But it's there.\nNot every step makes sense in the moment. Some days, the path is unclear. But you move forward anyway — not out of certainty, but because you believe in something.`}
                    isActive={question1InView}
                />
            </div>
            <div ref={question2Ref}>
                <Question
                    number={2}
                    title={`Why are \n we moving?`}
                    description={`Maybe it's just a feeling. But it's real enough to keep going. And sometimes, that's all you need. \nWe act because we see something ahead. A future, a change, a version of life we want to reach. Even if we can't explain it — we move toward it.`}
                    isActive={question2InView}
                    offset={['start 60%', 'end 50%']}
                />
            </div>
        </div>
    );
};

export default Questions;
