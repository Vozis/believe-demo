import styles from './Header.module.scss';

const FooterMenu = () => {
    return (
        <div className={`${styles.footerMenu} `}>
            <div className='df  aic' style={{ height: '100%' }}>
                <ul className='df jcsb'>
                    <li>Home</li>
                    <li>Manifesto</li>
                    <li>
                        X <span>(ex. twitter)</span>
                    </li>
                    <li>Dexscreener</li>
                </ul>
            </div>
            <div className=''>
                <p>
                    $BELIEVE is a non-valuable token meant for entertainment only, without financial promises. Invest at your own risk; the team
                    assumes no liability for potential losses.
                </p>
            </div>
        </div>
    );
};

export default FooterMenu;
