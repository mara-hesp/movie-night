import './App.css';
import Movies from './json/movies.json'

function App() {

  return (
    <div className="App">
      {Movies.filter(movie => movie.semana === "sem2").map( obj => (
        <li key={obj.id}>
          <h3>{obj.titulo}</h3>
          <img src={obj.cover} alt={obj.titulo} />
          </li>
      ))}
    </div>
  );
}

export default App;
