import './App.css';
import Header from './components/Header/Header'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Week from './components/Week/Week';
import MovieDetail from './components/MovieDetail/MovieDetail';
import VoteContainer from './components/VoteContainer/VoteContainer';

function App() {

  return (
    
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Week />} />
          <Route path='/detail/:movieId' element={<MovieDetail />} />
          <Route path='/vote' element={<VoteContainer sem="sem7" title="Películas de Terror" sub="Semana 7"/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
