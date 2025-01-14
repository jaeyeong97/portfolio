import Header from '../Home/header/Header'
import Main from '../Home/main/Main';
import Section2 from '../Home/section2/Section2';
import Section3 from '../Home/section3/Section3';
import Footer from '../Home/footer/Footer';
import { scroller } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Home = () => {

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.state?.scrollTarget) {
            scroller.scrollTo(location.state.scrollTarget, {
                duration: 800,
                offset: -90,
                smooth: "easeInOutQuad",
            });
            navigate(location.pathname, { replace: true });
        }

    }, [location.state, navigate]);

    return (
        <div className="Home" >
            <Header />
            <Main />
            <Section2 />
            <Section3 />
            <Footer />
        </div>
    )
}
export default Home;