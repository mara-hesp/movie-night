import Movies from '../../json/movies.json'
import MovieCard from "../MovieCard/MovieCard";
import '../MovieListContainer/MovieListContainer.css'

const MovieListContainer = ({ sem, title }) => {
    return (
        <div className="weeklyMovie">
          <h2>{title}</h2>
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