import './VoteCard.css'
import Movies from '../../json/movies.json'
import { Link } from 'react-router-dom'

const VoteCard = ({ obj }) => {
    return (
        <div>
            {Movies.filter(movie => movie.id === obj.id).map(obj => (
                    <div className="voteInfo" key={obj.id}>
                        <Link to={`/detail/${obj.id}`}><img src={obj.cover} alt={obj.title} /></Link>
                            <div>
                                <h2>{obj.titulo}</h2>
                                <h3>{obj.espaniol}</h3>
                                <p>{obj.anio} | Director: {obj.director} | {obj.genero}</p>
                                <br />
                                <p>{obj.info}</p>
                                <br />
                                <p>Cast: {obj.cast.join(", ")}</p>
                            </div>
                    </div>
            ))}
        </div>
    )
}

export default VoteCard