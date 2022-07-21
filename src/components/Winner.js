import Movies from '../data.json'

const Winner = ({ id }) => {
    return (
        <div>
            {Movies.filter(movie => movie.id === id).map( obj => (
          <div key={obj.id} className="winnerContainer" style={{backgroundImage: `url(${obj.cover})`}}>
                <div className="winnerContainerInfo">
                <img src={obj.cover} alt={obj.title} />
                <div>
                    <h2>{obj.titulo}</h2>
                    <h3>{obj.espaniol}</h3>
                    <p>{obj.anio} | Director: {obj.director} | {obj.genero}</p>
                    <br />
                    <p>{obj.info}</p>
                    <br />
                    <p>Cast: {obj.cast.join(", ")}</p>
                    <br />
                    <span><a href={`https://youtu.be/${obj.trailer}`}><button>Ver tráiler</button></a></span>
                </div>
            </div>
          </div>
      ))}
        </div>
    )
}

export default Winner