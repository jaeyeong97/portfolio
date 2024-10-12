import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <footer id="footer">
            <div className='footer_in'>
                <div className='icons-wrap'>
                    <a className='github' href='https://github.com/jaeyeong97' target='_blank' rel="noreferrer">
                        <div className='icon'></div>
                    </a>
                    <a className='email' href='mailto:rkaakdbdb1822@naver.com' target='_blank' rel="noreferrer">
                        <div className='icon'></div>
                    </a>
                </div>
                <span>© 2024 JaeYeongJang All rights reserved.</span>
                <Link to="nav_home" offset={-150} smooth={true}>
                    <div className='go_top'>
                        <span className="material-symbols-outlined arrowsTop">keyboard_double_arrow_up</span>
                    </div>
                </Link>
            </div>
        </footer>
    );
};

export default Footer;