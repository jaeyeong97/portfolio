import Home from './Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Petdoc from './components/projectPages/Petdoc';
import Recipes from './components/projectPages/Recipes';
import Gallery from './components/projectPages/Gallery';
import Windows from './components/projectPages/Windows';
import Bbq from './components/projectPages/Bbq';
import Bookstore from './components/projectPages/Bookstore';
import Movie from './components/projectPages/Movie';
import UlsanTour from './components/projectPages/UlsanTour';
import Volvo from './components/projectPages/Volvo';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/windows-xp" element={<Windows />} />
          <Route path="/petdoc" element={<Petdoc />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/bbq" element={<Bbq />} />
          <Route path="/bookstore" element={<Bookstore />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/ulsan-tour" element={<UlsanTour />} />
          <Route path="/volvo" element={<Volvo />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div >
  )
}

export default App;