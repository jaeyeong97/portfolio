import Home from './Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Petdoc from './components/projectPages/Petdoc';
import Recipes from './components/projectPages/Recipes';
import Gallery from './components/projectPages/Gallery';
import Windows from './components/projectPages/Windows';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/windows-xp" element={<Windows />} />
          <Route path="/petdoc" element={<Petdoc />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div >
  )
}

export default App;