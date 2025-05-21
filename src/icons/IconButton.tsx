import { useState } from 'react';
import Button from './Button.png';
import Button2 from './Button (1).png';
const IconButton = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            {isHovered ? <img src={Button} alt='' /> : <img src={Button2} alt='' />}
        </button>
    );
};

export default IconButton;
