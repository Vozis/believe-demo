import { useState } from 'react';
import IconBirds from '../../icons/IconBirds';
import IconMenu from '../../icons/IconMenu';
import IconStar from '../../icons/IconStar';
import IconX from '../../icons/IconX';
import styles from './Header.module.scss';
import FooterMenu from './FooterMenu';
import IconButton from '../../icons/IconButton';

const Header = () => {
    const [isVisible, setIsVisible] = useState(false);
    if (isVisible) {
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100vh';
    } else {
        document.body.style.overflow = '';
        document.body.style.height = '';
    }

    return (
        <>
            {isVisible && <FooterMenu />}
            <header className={`${styles.header} `}>
                <div className={`${styles.desktop} df jcsb aic`}>
                    <IconStar />
                    <p>Manifesto</p>
                    {/* <div className={styles.believe}>
                        <button>
                            <p>Believe</p>
                        </button>
                    </div> */}
                    <IconButton />
                    <button className={styles.btn}>
                        <IconBirds />
                    </button>
                    <button className={styles.btn}>
                        <IconX />
                    </button>
                </div>

                <div className={`${styles.mobile} df aic jcsb`}>
                    <IconStar />
                    <div className={'df'} style={{ gap: 8 }}>
                        <div className={styles.believe}>
                            <button>Believe</button>
                        </div>
                        <button onClick={() => setIsVisible(prev => !prev)} className={styles.btn}>
                            {isVisible ? <IconX /> : <IconMenu />}
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
