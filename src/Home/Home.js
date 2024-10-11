import Header from '../Home/header/Header'
import Main from '../Home/main/Main';
import Section2 from '../Home/section2/Section2';
import Section3 from '../Home/section3/Section3';
import Footer from '../Home/footer/Footer';
import { useEffect } from 'react';

const Home = () => {

    useEffect(() => {
        const y = sessionStorage.getItem("y") || 0;
        window.scrollTo(0, y);
    }, []);

    return (
        <div className="Home" onClick={() => sessionStorage.setItem("y", window.pageYOffset)}>
            <Header />
            <Main />
            <Section2 />
            <Section3 />
            <Footer />
        </div>
    )
}
export default Home;