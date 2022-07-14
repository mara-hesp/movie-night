import Movies from '../../json/movies.json'
import MovieCard from "../MovieCard/MovieCard";
import '../MovieListContainer/MovieListContainer.css'
import { Link } from 'react-router-dom'

const MovieListContainer = ({ sem, title, sub, win }) => {
    return (
        <div className="weeklyMovie">
          <h2>{title}</h2>
          <h3>{sub}</h3>
          {Movies.filter(movie => movie.id === win).map( obj => (
            <p>Ganador: <Link to={`/detail/${obj.id}`}>{obj.titulo}</Link></p>
          ))}
          <div className="movieList">
            {Movies.filter(movie => movie.semana === sem).map( obj => (
          <li key={obj.id}>
            <MovieCard obj={obj} />
          </li>))}
          </div>
        </div>
    )
}

export default MovieListContainer