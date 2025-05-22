import React, { useEffect, useState } from 'react';

interface KaraokeTextProps {
    text: string;
    interval?: number;
    onChange: (value: boolean) => void;
    isStart: boolean;
    onProgress?: (charIndex: number, totalChars: number) => void;
    externalProgress?: number;
}

const TextRead: React.FC<KaraokeTextProps> = ({ text, isStart, onChange, onProgress, externalProgress }) => {
    const [highlightIndex, setHighlightIndex] = useState(-1);
    const chars = Array.from(text);

    useEffect(() => {
        if (!isStart) return;

        const index = Math.floor((externalProgress || 0) * chars.length);
        setHighlightIndex(index);

        if (onProgress) {
            onProgress(index, chars.length);
        }

        if (index >= chars.length - 1) {
            onChange(true);
        } else {
            onChange(false);
        }
    }, [externalProgress, chars.length, isStart, onChange, onProgress]);

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
