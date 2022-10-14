const Movie = ({ movie }) => {

    const DEFAULT_PLACEHOLDER_IMAGE = 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg'

    const poster = movie.Poster === 'N/A' ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

    return (
        <div className='movie'>
            <div>
                <img src={poster} alt={`The movie titled: ${movie.Title}`} />
            </div>
            <h2>{movie.Title}</h2>
            <p>{`( ${movie.Year} )`}</p>
        </div>
    )
}

export default Movie