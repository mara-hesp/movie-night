import { Link, useLocation } from 'react-router-dom'

const Header = () => {

    let location = useLocation()

    return (
        <header>
            <Link to='/'><h2 style={{color: 'white'}}>Pelis con TG</h2></Link>
            <div>
                {location.pathname.match('/vote') ? null : <Link to='/vote'><button className='secondaryBtn'>Votación</button></Link>}
                <Link to='/search'><button className='secondaryBtn'>Buscador</button></Link>
            </div>
        </header>
    )
}

export default Header