import React, { useEffect, useState } from 'react';

interface KaraokeTextProps {
    text: string;
    interval?: number;
    onChange: (value: boolean) => void;
    isStart: boolean;
}

const TextRead: React.FC<KaraokeTextProps> = ({ text, interval = 20, isStart, onChange }) => {
    const [highlightIndex, setHighlightIndex] = useState(-1);
    const chars = Array.from(text); // сохраняет символы, включая \n
    useEffect(() => {
        if (!isStart) return;

        let current = 0;
        onChange(false);

        const timer = setInterval(() => {
            setHighlightIndex(current);
            current++;

            if (current >= chars.length) {
                clearInterval(timer);
                onChange(true);
            }
        }, interval);

        return () => clearInterval(timer);
    }, [chars.length, interval, isStart, onChange]);

    return (
        <span style={{ whiteSpace: 'pre-wrap' }}>
            {chars.map((char, i) => {
                if (char === '\n') {
                    return (
                        <div key={i} className='upper'>
                            <br />
                        </div>
                    );
                }

                return (
                    <span
                        key={i}
                        style={{
                            color: 'var(--white)',
                            opacity: i <= highlightIndex ? 1 : 0.3,
                            transition: 'opacity 0.5s ease',
                        }}
                    >
                        {char}
                    </span>
                );
            })}
        </span>
    );
};

export default TextRead;
