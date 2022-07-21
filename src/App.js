import Header from './components/Header';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import MovieDetail from './components/MovieDetail';
import VoteContainer from './components/VoteContainer';
import Footer from './components/Footer';
import './App.scss'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail/:movieId' element={<MovieDetail />} />
          <Route path='/vote' element={<VoteContainer sem="sem8" title="Películas Slasher" sub="Semana 8"/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
