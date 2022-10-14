import { useState, useEffect } from 'react';
import Search from './Search/Search'
import Movie from './Search/Movie'
import ButtonToTop from './ButtonToTop';
import Loading from './Loading';

const SearchContainer = () => {
    const MOVIE_API_URL = 'https://www.omdbapi.com/?s=spider&apikey=fa736982'

  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    fetch(MOVIE_API_URL)
    .then(res => res.json())
    .then(jsonRes => {
      setMovies(jsonRes.Search)
      setLoading(false)
    })
  }, [])

  const search = searchValue => {
    setLoading(true)
    setErrorMessage(null)

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=fa736982`)
    .then(res => res.json())
    .then(jsonRes => {
      if (jsonRes.Response === 'True') {
        setMovies(jsonRes.Search)
        setLoading(false)
      } else {
        setErrorMessage(jsonRes.Error)
        setLoading(false)
      }
    })
  }

    return (
    <div>
      <Search search={search} />
      <div className='movie-search-list'>
        {loading && !errorMessage
        ? (<Loading />)
        : errorMessage 
        ? (<div>{errorMessage}</div>) 
        : (movies.map((movie, index) => (
          <Movie key={`${index}-${movie.Title}`} movie={movie} />
        )))}
        <ButtonToTop />
      </div>
    </div>
  );
}

export default SearchContainer