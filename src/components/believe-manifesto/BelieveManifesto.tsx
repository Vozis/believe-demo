import styles from './BelieveManifesto.module.scss';
import { useAnimate, useInView } from 'motion/react';
import { useEffect, useRef } from 'react';

const BelieveManifesto = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [scope, animate] = useAnimate();
    const isInView = useInView(containerRef, { amount: 0.5 }); // Срабатывает, когда компонент в центре viewport

    console.log(scope);

    useEffect(() => {
        if (!containerRef.current || !isInView) return;

        // Вычисляем центр контейнера
        const containerRect = containerRef.current.getBoundingClientRect();
        const centerX = containerRect.width / 2;
        const centerY = containerRect.height / 2;

        // Получаем все изображения
        const images = Array.from(containerRef.current.querySelectorAll(`.${styles.img}`));

        if (images.length === 0) {
            console.warn('Изображения для анимации не найдены');
            return;
        }

        // Устанавливаем начальную позицию изображений в центре
        images.forEach((img: any) => {
            img.style.position = 'absolute';
            img.style.left = `${centerX}px`;
            img.style.top = `${centerY}px`;
            img.style.transform = 'translate(-50%, -50%) scale(0)';
            img.style.opacity = '0';
        });

        // Запускаем анимацию для каждого изображения
        images.forEach((img: any) => {
            animate(
                img,
                {
                    opacity: 1, // Конечная прозрачность
                    transform: 'translate(0, 0) scale(1)', // Конечная позиция и масштаб
                },
                {
                    delay: 0.1 * images.indexOf(img), // Задержка для последовательной анимации
                    duration: 0.7, // Длительность анимации
                    ease: [0.25, 0.1, 0.25, 1], // Плавная функция анимации
                },
            ).then(() => {
                // Сбрасываем временные стили после анимации
                img.style.position = '';
                img.style.left = '';
                img.style.top = '';
                img.style.transform = '';
                img.style.opacity = '';
            });
        });
    }, [isInView, animate]);

    return (
        <div className={styles.content}>
            <div className={`${styles.top} df jcc`}>
                <span className='df jcsb'>
                    <img src='/image/believe-manifesto/6.png' alt='' className={`${styles.img} ${styles.img6}`} />
                    <img src='/image/believe-manifesto/7.png' alt='' className={`${styles.img} ${styles.img7}`} />
                </span>
            </div>

            <div className={`${styles.center} df jcsb aie`}>
                <img src='/image/believe-manifesto/1.png' alt='' className={`${styles.img} ${styles.img1}`} />
                <div className={styles.text}>
                    <h2>
                        Believe <span>Manifesto</span>
                        <div className={styles.gradient} />
                    </h2>
                    <p>Believe in something</p>
                </div>
                <img src='/image/believe-manifesto/5.png' alt='' className={`${styles.img} ${styles.img5}`} />
            </div>
            <div className={`${styles.bottom} df jcsa`}>
                <img src='/image/believe-manifesto/2.png' alt='' className={`${styles.img} ${styles.img2}`} />
                <img src='/image/believe-manifesto/3.png' alt='' className={`${styles.img} ${styles.img3}`} />
                <img src='/image/believe-manifesto/4.png' alt='' className={`${styles.img} ${styles.img4}`} />
            </div>
        </div>
    );
};

export default BelieveManifesto;
