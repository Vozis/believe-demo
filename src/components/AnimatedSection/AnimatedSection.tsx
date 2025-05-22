import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, type ReactNode } from 'react';

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
}

const AnimatedSection = ({ children, className }: AnimatedSectionProps) => {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    const opacity = useTransform(
        scrollYProgress,
        [0, 0.2, 0.9, 1], // положения скролла
        [0, 1, 1, 0], // соответствующие значения прозрачности
    );

    const y = useTransform(
        scrollYProgress,
        [0, 0.2, 0.8, 1],
        [100, 0, 0, -50], // смещение при появлении и исчезновении
    );

    const blur = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], ['blur(16px)', 'blur(0px)', 'blur(0px)', 'blur(16px)']);

    return (
        <motion.section
            ref={ref}
            className={className}
            style={{
                opacity,
                y,
                filter: blur,
            }}
            transition={{
                duration: 1.7,
                ease: [0.5, 0, 0, 1],
            }}
        >
            {children}
        </motion.section>
    );
};

export default AnimatedSection;

// import { motion } from 'motion/react';
// import type { ReactNode } from 'react';
//
// interface AnimatedSectionProps {
//     children: ReactNode;
//     className?: string;
// }
//
// const AnimatedSection = ({ children, className }: AnimatedSectionProps) => {
//     return (
//         <motion.section
//             className={className}
//             initial={{
//                 opacity: 0,
//                 y: 100,
//                 filter: 'blur(16px)',
//             }}
//             whileInView={{
//                 opacity: 1,
//                 y: 0,
//                 filter: 'blur(0px)',
//             }}
//             viewport={{
//                 once: true,
//                 amount: 'some',
//                 margin: '0px 0px -100px 0px',
//             }}
//             transition={{
//                 duration: 1.7,
//                 ease: [0.5, 0, 0, 1],
//             }}
//         >
//             {children}
//         </motion.section>
//     );
// };
//
// export default AnimatedSection;
