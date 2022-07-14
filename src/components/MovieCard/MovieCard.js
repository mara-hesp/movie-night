import '../MovieCard/MovieCard.css'
import Movies from '../../json/movies.json'
import { Link } from 'react-router-dom'

const MovieCard = ({ obj }) => {
    return (
        <div className='movieCard'>
            {Movies.filter(movie => movie.id === obj.id).map(el => (
                <Link to={`/detail/${el.id}`} key={el.id}>
                    <img src={el.cover} alt={el.titulo} />
                </Link>
            ))}
        </div>
    )
}

export default MovieCard