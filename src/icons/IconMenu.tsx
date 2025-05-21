import { useState } from 'react';

const IconMenu = () => {
    const [isHovered, setIsHovered] = useState(false);

    const fillColor = isHovered ? 'white' : '#666666';
    return (
        <svg
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            width='28'
            height='28'
            viewBox='0 0 28 28'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path d='M5.8335 9.91669H22.1668M5.8335 18.0834H22.1668' stroke={fillColor} strokeWidth='2' strokeLinecap='round' />
        </svg>
    );
};

export default IconMenu;
