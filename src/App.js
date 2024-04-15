import Loading from './loading/Loading';
import Header from './header/Header';
import Main from './main/Main';
import Section1 from './section1/Section1';
import Section2 from './section2/Section2';
import Section3 from './section3/Section3';
import Footer from './footer/Footer';
import { useEffect, useState } from 'react';
function App() {

  const [loading, setLoading] = useState(true);

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
          <Header />
          <Main />
          <Section1 />
          <Section2 />
          <Section3 />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;