import { Link } from 'react-scroll';

const PjFooter = () => {
    return (
        <footer id="PjFooter">
            <div className='footer_in'>
                <a href='https://github.com/jaeyeong97' target='_blank' rel="noreferrer">
                    <img src='/assets/github.webp' alt='깃허브 이미지' />
                </a>
                <span>© 2024 JaeYeongJang All rights reserved.</span>
                <Link to="pj_top" smooth={true}>
                    <div className='go_top'>
                        <span className="material-symbols-outlined arrowsTop">keyboard_double_arrow_up</span>
                    </div>
                </Link>
            </div>
        </footer>
    )
}

export default PjFooter;