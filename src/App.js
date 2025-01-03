import Home from './Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Petdoc from './components/projectPages/Petdoc';
import Recipes from './components/projectPages/Recipes';
import Gallery from './components/projectPages/Gallery';
import Windows from './components/projectPages/Windows';
import Bbq from './components/projectPages/Bbq';
import Movie from './components/projectPages/Movie';
import Volvo from './components/projectPages/Volvo';
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
          <Route path="/bbq" element={<Bbq />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/volvo" element={<Volvo />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div >
  )
}

export default App;