import Movies from '../data.json'
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';

const MovieListContainer = ({ sem, title, sub, win }) => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1
    }
  }

    return (
        <div className="weeklyMovie">
          <h2>{title}</h2>
          <h3>{sub}</h3>
          {Movies.filter(movie => movie.id === win).map( obj => (
            <p key={obj.id}>Ganador: <Link to={`/detail/${obj.id}`}>{obj.titulo}</Link></p>
          ))}
          <Carousel responsive={responsive}>
            {Movies.filter(movie => movie.semana === sem).map(obj => (
              <ul key={obj.id}>
                <MovieCard obj={obj} />
              </ul>))}
          </Carousel>
        </div>
    )
}

export default MovieListContainer