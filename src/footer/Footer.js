import '../footer/Footer.css';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <footer id="footer">
            <div className='footer_in'>
                <span>© 2024 JaeYeongJang All rights reserved.</span>
                <Link to="nav_home" smooth={true}>
                    <div className='go_top'>
                        <span className="material-symbols-outlined arrowsTop">keyboard_double_arrow_up</span>
                    </div>
                </Link>
            </div>
        </footer>
    );
};

export default Footer;