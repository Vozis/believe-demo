import { useEffect, useRef, useState } from 'react';
import Question from './Question';

import styles from './Question.module.scss';
const Questions = () => {
    const [state, setState] = useState(1);

    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry], observerInstance) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observerInstance.disconnect(); // останавливаем наблюдение
                }
            },
            {
                threshold: 0.2, // когда 20% видно срабатывает
            },
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div ref={ref} className={styles.quations}>
            <Question
                onChange={state => state && setState(prev => prev + 1)}
                isStart={isVisible && state === 1}
                number={1}
                title={`Belief \n is near`}
                description={`Before every decision, every risk, every step forward — there is belief. Not always loud. Not always clear. But it’s there.\nNot every step makes sense in the moment. Some days, the path is unclear. But you move forward anyway — not out of certainty, but because you believe in something.`}
            />
            <Question
                onChange={state => state && setState(prev => prev + 1)}
                number={2}
                isStart={isVisible && state === 2}
                title={`Why are \n we moving?`}
                description={`Maybe it’s just a feeling. But it’s real enough to keep going. And sometimes, that’s all you need. \n We act because we see something ahead. A future, a change, a version of life we want to reach. Even if we can’t explain it — we move toward it.`}
            />
        </div>
    );
};

export default Questions;
