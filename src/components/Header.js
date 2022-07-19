import { Link, useLocation } from 'react-router-dom'

const Header = () => {

    let location = useLocation()

    return (
        <header>
            <Link to='/'><h2 style={{color: 'white'}}>Pelis con TG</h2></Link>
            {location.pathname.match('/vote') ? null
            : <Link to='/vote'><button className='secondaryBtn'>Votación de la Semana →</button></Link>}
        </header>
    )
}

export default Header