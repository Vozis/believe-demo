import { AnimatePresence, motion } from 'motion/react';
import styles from './Card.module.scss';
import { useEffect, useState } from 'react';

interface ICard {
    data: {
        title: string;
        avatar: string;
        author: string;
        description: string;
    };
}

const Card = ({ data }: ICard) => {
    const [isMobile, setIsMobile] = useState(false);

    // Проверяем ширину экрана при монтировании и при ресайзе
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= 786);
        };

        // Проверяем при первой загрузке
        checkIfMobile();

        // Слушаем изменение размера окна
        window.addEventListener('resize', checkIfMobile);

        // Убираем слушатель при размонтировании
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    // Настройки анимации в зависимости от размера экрана
    const animationProps = isMobile
        ? {
              initial: { opacity: 1 },
              animate: { opacity: 1 },
              exit: { opacity: 1 },
              whileHover: {},
          }
        : {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 0.5, y: 0 },
              exit: { opacity: 0, y: -20 },
              transition: { duration: 0.6 },
              whileHover: {
                  opacity: 1,
                  scale: 1.025,
                  rotate: 2,
                  transition: { duration: 0.3 },
              },
          };

    return (
        <AnimatePresence mode='wait'>
            <motion.div className={`${styles.card} df fdc jcsb`} {...animationProps}>
                <div>
                    <div className={`${styles.header} df aic`}>
                        <img src={data.avatar} alt='person avatar' />
                        <p>{data.author}</p>
                    </div>
                    <p className={styles.text}>{data.title}</p>
                </div>
                <p className={styles.footer}>{data.description}</p>
            </motion.div>
        </AnimatePresence>
    );
};

export default Card;
