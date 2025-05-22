import { useEffect, useRef, useState } from 'react';
import Question from './Question';
import styles from './Question.module.scss';

const Questions = () => {
    const [state, setState] = useState(1);
    const [progress, setProgress] = useState(0);
    const [isScrollLocked, setIsScrollLocked] = useState(false);
    const [isFirstQuestionComplete, setIsFirstQuestionComplete] = useState(false);
    const [isSecondQuestionComplete, setIsSecondQuestionComplete] = useState(false);
    const [textProgress, setTextProgress] = useState(0);

    const ref = useRef<HTMLDivElement>(null);
    const firstQuestionRef = useRef<HTMLDivElement>(null);
    const secondQuestionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const lastScrollTime = useRef(0);

    console.log(progress);

    // Обработчик прогресса чтения
    const handleQuestionProgress = (questionProgress: number) => {
        if (state === 1) {
            setProgress(questionProgress * 0.5);

            if (questionProgress >= 0.99) {
                setIsFirstQuestionComplete(true);
                scrollToQuestion(2);
            }
        } else if (state === 2) {
            setProgress(0.5 + questionProgress * 0.5);

            if (questionProgress >= 0.99) {
                setIsSecondQuestionComplete(true);
                setIsScrollLocked(false);
            }
        }
    };

    const scrollToQuestion = (questionNumber: number) => {
        if (questionNumber === 2 && secondQuestionRef.current) {
            setState(2);
            const yOffset = secondQuestionRef.current.offsetTop;
            window.scrollTo({
                top: yOffset,
                behavior: 'smooth',
            });
        }
    };

    const handleWheel = (e: WheelEvent) => {
        if (!isScrollLocked) return;

        // Разрешаем прокрутку вверх (решение проблемы 1)
        if (e.deltaY < 0) {
            setIsScrollLocked(false);
            return;
        }

        e.preventDefault();

        // Ограничиваем частоту обновлений для плавности
        const now = Date.now();
        if (now - lastScrollTime.current < 16) return;
        lastScrollTime.current = now;

        // Плавное обновление прогресса
        requestAnimationFrame(() => {
            const scrollMultiplier = 0.0005;
            let newProgress = textProgress;

            if (state === 1 && !isFirstQuestionComplete) {
                newProgress = Math.min(Math.max(textProgress + e.deltaY * scrollMultiplier, 0), 1);
            } else if (state === 2 && !isSecondQuestionComplete) {
                newProgress = Math.min(Math.max(textProgress + e.deltaY * scrollMultiplier, 0), 1);
            }

            setTextProgress(newProgress);
        });
    };

    useEffect(() => {
        // Исправление проблемы 2: ждем полной видимости блока
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.9) {
                    setIsVisible(true);
                    setIsScrollLocked(true);
                }
            },
            {
                threshold: [0.5, 0.9, 1.0],
            },
        );

        if (firstQuestionRef.current) {
            observer.observe(firstQuestionRef.current);
        }

        const preventScroll = (e: WheelEvent) => {
            if (isScrollLocked) {
                handleWheel(e);
            }
        };

        window.addEventListener('wheel', preventScroll, { passive: false });

        return () => {
            observer.disconnect();
            window.removeEventListener('wheel', preventScroll);
        };
    }, [isScrollLocked, state, textProgress, isFirstQuestionComplete, isSecondQuestionComplete]);

    // Слушатель для повторной блокировки скролла при возвращении к вопросу
    useEffect(() => {
        const handleScrollPosition = () => {
            if (firstQuestionRef.current && !isFirstQuestionComplete) {
                const rect = firstQuestionRef.current.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom >= window.innerHeight - 100) {
                    setIsScrollLocked(true);
                }
            }
        };

        if (!isScrollLocked) {
            window.addEventListener('scroll', handleScrollPosition);
            return () => window.removeEventListener('scroll', handleScrollPosition);
        }
    }, [isScrollLocked, isFirstQuestionComplete]);

    return (
        <div ref={ref} className={styles.quations}>
            <div ref={firstQuestionRef}>
                <Question
                    externalProgress={state === 1 ? textProgress : undefined}
                    onChange={complete => {
                        if (complete) {
                            setIsFirstQuestionComplete(true);
                            setState(2);
                            scrollToQuestion(2);
                        }
                    }}
                    isStart={isVisible && state === 1}
                    number={1}
                    title={`Belief \n is near`}
                    description={`Before every decision, every risk, every step forward — there is belief. Not always loud. Not always clear. But it's there.\nNot every step makes sense in the moment. Some days, the path is unclear. But you move forward anyway — not out of certainty, but because you believe in something.`}
                    onProgress={handleQuestionProgress}
                />
            </div>

            <div ref={secondQuestionRef}>
                <Question
                    externalProgress={state === 2 ? textProgress : undefined}
                    onChange={complete => {
                        if (complete) {
                            setIsSecondQuestionComplete(true);
                            setIsScrollLocked(false);
                        }
                    }}
                    number={2}
                    isStart={isVisible && state === 2}
                    title={`Why are \n we moving?`}
                    description={`Maybe it's just a feeling. But it's real enough to keep going. And sometimes, that's all you need. \n We act because we see something ahead. A future, a change, a version of life we want to reach. Even if we can't explain it — we move toward it.`}
                    onProgress={handleQuestionProgress}
                />
            </div>

            {/*<ProgressBar progress={progress} questionsRef={ref} />*/}
        </div>
    );
};

export default Questions;
