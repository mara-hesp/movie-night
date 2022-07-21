import { useParams } from "react-router-dom"
import Movies from '../data.json'

const MovieDetail = () => {
    const { movieId } = useParams()

    return (
        <div>
            {Movies.filter(movie => movie.id === movieId).map(el => (
                <div key={el.id} className="detailContainer" style={{backgroundImage: `url(${el.cover})`}}>
                    <div className="detailContainerInfo">
                <img src={el.cover} alt={el.title} />
                <div>
                    <h2>{el.titulo}</h2>
                    <h3>{el.espaniol}</h3>
                    <p>{el.anio} | Director: {el.director} | {el.genero}</p>
                    <br />
                    <p>{el.info}</p>
                    <br />
                    <p>Cast: {el.cast.join(", ")}</p>
                    <br />
                </div>
                <iframe className="iframe" src={`https://www.youtube-nocookie.com/embed/${el.trailer}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
                </div>
            ))}
        </div>
    )

}

export default MovieDetail