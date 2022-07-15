import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {

    const location = window.location.pathname


    return (
        <header>
            <Link to='/'><h2>Pelis con TG</h2></Link>
            {location !== '/vote' && <Link to='/vote'><button className='secondaryBtn'>Votación de la Semana →</button></Link>}
        </header>
    )
}

export default Header