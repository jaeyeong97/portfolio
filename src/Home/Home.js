import Header from '../Home/header/Header'
import Main from '../Home/main/Main';
import Section1 from '../Home/section1/Section1';
import Section2 from '../Home/section2/Section2';
import Section3 from '../Home/section3/Section3';
import Footer from '../Home/footer/Footer';

const Home = () => {
    return (
        <div className="Home">
            <Header />
            <Main />
            <Section1 />
            <Section2 />
            <Section3 />
            <Footer />
        </div>
    )
}
export default Home;