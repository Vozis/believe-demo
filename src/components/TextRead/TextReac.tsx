import React, { useEffect, useRef, useState } from 'react';
import { motion, MotionValue } from 'framer-motion';
import styles from '../Questions/Question.module.scss';

interface TextReadProps {
    text: string;
    isStart: boolean;
    externalProgress: MotionValue<number>;
}

const TextRead: React.FC<TextReadProps> = ({ text, isStart, externalProgress }) => {
    const sentences = text.split(/\n/).filter(Boolean);
    const [progress, setProgress] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updateProgress = () => {
            setProgress(externalProgress.get());
        };

        const unsubscribe = externalProgress.onChange(updateProgress);
        updateProgress();
        return () => unsubscribe();
    }, [externalProgress]);

    const getTotalWordCount = () => {
        let count = 0;
        sentences.forEach(sentence => {
            count += sentence.split(/\s+/).length;
        });
        return count;
    };

    const totalWords = getTotalWordCount();
    let wordIndex = 0;

    return (
        <div ref={containerRef} className={styles.textReadContainer}>
            <div className={styles.baseText}>{text}</div>

            <div className={styles.highlightText}>
                {sentences.map((sentence, sentenceIndex) => {
                    // Используем regex с захватывающими группами для сохранения пробелов
                    const tokens = sentence.match(/(\S+)(\s*)/g) || [];

                    return (
                        <div key={sentenceIndex}>
                            {tokens.map((token, i) => {
                                const word = token.match(/\S+/)?.[0] || '';
                                const space = token.match(/\s*$/)?.[0] || '';

                                const currentWordIndex = wordIndex++;
                                const threshold = currentWordIndex / totalWords;
                                const nextThreshold = threshold + 0.03;

                                const opacity = isStart
                                    ? progress >= 0.99
                                        ? 1
                                        : progress < threshold
                                          ? 0
                                          : progress > nextThreshold
                                            ? 1
                                            : (progress - threshold) / (nextThreshold - threshold)
                                    : 0;

                                return (
                                    <React.Fragment key={i}>
                                        <motion.span style={{ opacity }}>{word}</motion.span>
                                        <span>{space}</span>
                                    </React.Fragment>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TextRead;
