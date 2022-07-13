import './App.css';
import Header from './components/Header/Header'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Week from './components/Week/Week';
import MovieDetail from './components/MovieDetail/MovieDetail';

function App() {

  return (
    
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Week />} />
          <Route path='/detail/:movieId' element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
