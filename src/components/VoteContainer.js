import Movies from '../data.json'
import VoteCard from './VoteCard'
import ButtonToTop from './ButtonToTop'

const VoteContainer = ({ sem, title, sub}) => {
    return (
        <div className="voteContainer">
            <h1>{title}</h1>
            <h4>{sub}</h4>      
            <li className='voteList'>
            {Movies.filter(movie => movie.semana === sem).map(obj => (
                <ul key={obj.id}>
                    <VoteCard obj={obj} />
                </ul>
            ))}
            </li>
            <a href='https://forms.gle/98LeKYuUzBMC1wvj9' className='voteBtn'><button>Click aquí para Votar</button></a>
            <ButtonToTop />
        </div>
    )
}

export default VoteContainer