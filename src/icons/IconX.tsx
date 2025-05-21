import { useState } from 'react';

const IconX = () => {
    const [isHovered, setIsHovered] = useState(false);

    const fillColor = isHovered ? 'white' : '#666666';
    return (
        <svg
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            width='22'
            height='20'
            viewBox='0 0 22 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M17.3815 0.269226H20.7537L13.3496 8.52781L22 19.7308H15.2116L9.8967 12.9228L3.81206 19.7308H0.439853L8.28391 10.8977L0 0.269226H6.95701L11.7587 6.4883L17.3815 0.269226ZM16.2013 17.7918H18.0706L5.97467 2.13638H3.96601L16.2013 17.7918Z'
                fill={fillColor}
            />
        </svg>
    );
};

export default IconX;
