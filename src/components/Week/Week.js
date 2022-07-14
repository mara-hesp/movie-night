import MovieListContainer from '../MovieListContainer/MovieListContainer'
import Winner from '../Winner/Winner'

const Week = () => {
    return (
        <div>
            <Winner id="56" />
            <MovieListContainer sem="sem6" title="En el Espacio" sub="Semana 6" win="56" />
            <MovieListContainer sem="sem5" title="Crimen II" sub="Semana 5" win="49" />
            <MovieListContainer sem="sem4" title="Crimen" sub="Semana 4" win="29" />
            <MovieListContainer sem="sem3" title="Ciencia Ficción" sub="Semana 3" win="26" />
            <MovieListContainer sem="sem2" title="Comedia" sub="Semana 2" win="4" />
            <MovieListContainer sem="sem1" title="Suspenso" sub="Semana 1" win="13" />
        </div>
    )
}

export default Week