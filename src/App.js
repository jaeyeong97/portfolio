import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Inside from './components/Inside';
import Outside from './components/Outside';
import Petdoc from './components/projectPages/Petdoc';
import Recipes from './components/projectPages/Recipes';
import Gallery from './components/projectPages/Gallery';
import Windows from './components/projectPages/Windows';
import Movie from './components/projectPages/Movie';
import Shop from './components/projectPages/Shop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/windows-xp" element={<Windows />} />
          <Route path="/petdoc" element={<Petdoc />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/home" element={<Home />} />
          <Route path="/outside" element={<Outside />} />
          <Route path="/" element={<Inside />} />
        </Routes>
      </BrowserRouter>
    </div >
  )
}

export default App;