import { useParams } from "react-router-dom"
import Movies from '../../json/movies.json'

const MovieDetail = () => {
    const { movieId } = useParams()

    return (
        <div>
            {Movies.filter(movie => movie.id === movieId).map(el => (
                <div key={el.id}>
                    <h2>{el.titulo}</h2>
                </div>
            ))}
        </div>
    )

}

export default MovieDetail