import Loading from './Home/loading/Loading'
import { useEffect, useState } from 'react';
import Home from './Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Petdoc from './components/projectPages/Petdoc';
import Recipes from './components/projectPages/Recipes';
import Bbq from './components/projectPages/Bbq';
import BookStore from './components/projectPages/BookStore';
import Gallery from './components/projectPages/Gallery';
import Volvo from './components/projectPages/Volvo';
import UlsanTour from './components/projectPages/UlsanTour';
import MovieWeb from './components/projectPages/MovieWeb';

function App() {
  const [loading, setLoading] = useState(true); // 로딩

  // 로딩 시간 함수
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <Loading /> : (
        <div className="App">
          <Router>
            <Routes>
              <Route path="/petdoc" element={<Petdoc />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/bbq" element={<Bbq />} />
              <Route path="/movie" element={<MovieWeb />} />
              <Route path="/ulsan-tour" element={<UlsanTour />} />
              <Route path="/volvo" element={<Volvo />} />
              <Route path="/bookstore" element={<BookStore />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
        </div >
      )
      }
    </>
  );
}

export default App;