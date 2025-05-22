import type { LenisRef } from 'lenis/react';
import { ReactLenis } from 'lenis/react';
import { cancelFrame, frame } from 'framer-motion';
import { useEffect, useRef, type FC, type ReactNode } from 'react';
import type { LenisOptions } from 'lenis';

interface SmoothScrollProps {
    children: ReactNode;
}

const SmoothScroll: FC<SmoothScrollProps> = ({ children }) => {
    const lenisRef = useRef<LenisRef>(null);

    useEffect(() => {
        function update(data: { timestamp: number }) {
            const time = data.timestamp;
            lenisRef.current?.lenis?.raf(time);
        }

        frame.update(update, true);

        return () => cancelFrame(update);
    }, []);

    const options: LenisOptions = {
        duration: 5.4, // увеличено с 1.8 до 5.4 (в 3 раза)
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 0.4, // уменьшено с 1.2 до 0.4 (в 3 раза меньше)
        touchMultiplier: 0.5, // уменьшено с 1.5 до 0.5 (в 3 раза меньше)
        autoRaf: false,
    };

    return (
        <ReactLenis root options={options} ref={lenisRef}>
            {children}
        </ReactLenis>
    );
};

export default SmoothScroll;
