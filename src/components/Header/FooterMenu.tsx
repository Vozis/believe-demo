import { motion } from 'motion/react';
import styles from './Header.module.scss';

interface FooterMenuProps {
    isVisible?: boolean;
}

const FooterMenu: React.FC<FooterMenuProps> = () => {
    return (
        <motion.div
            className={`${styles.footerMenu}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
            <div className='df aic' style={{ height: '100%' }}>
                <motion.ul
                    className='df jcsb'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                >
                    <li>Home</li>
                    <li>Manifesto</li>
                    <li>
                        X <span>(ex. twitter)</span>
                    </li>
                    <li>Dexscreener</li>
                </motion.ul>
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}>
                <p>
                    $BELIEVE is a non-valuable token meant for entertainment only, without financial promises. Invest at your own risk; the team
                    assumes no liability for potential losses.
                </p>
            </motion.div>
        </motion.div>
    );
};

export default FooterMenu;
