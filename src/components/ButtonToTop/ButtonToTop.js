import './ButtonToTop.css'
import { useState, useEffect } from 'react'

const ButtonToTop = () => {
    const [topButton, setTopButton] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setTopButton(true);
            } else {
                setTopButton(false);
            }
        });
    }, []);

    const toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    return (
        <div>
            {topButton && <button onClick={toTop} className='toTopBtn'>Arriba ↑</button>}
        </div>
    )
}

export default ButtonToTop