import { useEffect, useState } from 'react';
import styles from './Footer.module.scss';
import TextBelieve from '../../icons/TextBelieve';

const Footer = () => {
    const [footerTranslate, setFooterTranslate] = useState(0);
    const [width, setWidth] = useState(window.innerWidth);
    const MAX_TRANSLATE = widthFunc();

    function widthFunc() {
        if (width <= 720) return 200;
        if (width <= 848) return 320;
        if (width <= 1155) return 350;
        if (width > 1155) return 390;
        else return 390;
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;
            const distanceToBottom = docHeight - (scrollTop + windowHeight);

            // Вычисляем прогресс
            let translateY = 0;
            if (distanceToBottom <= MAX_TRANSLATE) {
                translateY = MAX_TRANSLATE - distanceToBottom;
            }
            setFooterTranslate(translateY);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        const handleResize = () => setWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <footer
                className={`${styles.footer} df fdc jcsb`}
                style={{
                    transform: `translateY(-${footerTranslate}px)`,
                    transition: 'transform 2s ease-out',
                }}
            >
                <div className={`${styles.top} df jcsb`}>
                    <div className={styles.right}>
                        <p>Disclaimer</p>
                        <p>
                            $BELIEVE is a non-valuable token meant for entertainment only, without financial promises. Invest at your own risk; <br />{' '}
                            the team assumes no liability for potential losses.
                        </p>
                    </div>

                    <ul className='df jcsb'>
                        <li>Home</li>
                        <li>Manifesto</li>
                        <li>
                            <a href="https://x.com/Believe_in_SOL" target="_blank">X <span>(ex. twitter)</span></a>
                        </li>
                        <li><a href="https://dexscreener.com/solana/4p7bfautjzseux6y3dcnwv5qskbqk2nx54ikxkimbrow" target="_blank">Dexscreener</a></li>
                    </ul>
                </div>
                <div className={`${styles.bottom} df jcsb`}>
                    <p>© Believe</p>
                    <p>All rights reserved</p>
                </div>
            </footer>
            <div className={`${styles.believe} df jcc`}>
                <TextBelieve />
            </div>
        </>
    );
};

export default Footer;
