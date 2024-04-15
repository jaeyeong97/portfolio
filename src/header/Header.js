import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import '../header/Header.css';
const Header = () => {

    const [toggle, setToggle] = useState(false); // 헤더 메뉴 토글 상태 관리
    const [scroll, setScroll] = useState(0);
    const [rotateLogo, setRotateLogo] = useState(false); // 로고 회전 상태 관리

    // 헤더 메뉴 토글
    const handleToggle = () => {
        setToggle(!toggle);
        setScroll(51);
    };
    // 스크롤시 헤더 배경색
    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
    }, []);

    // 로고 클릭 핸들러로 회전 애니메이션 트리거
    const handleLogoClick = () => {
        setRotateLogo(!rotateLogo); // 회전 상태 토글
    };

    return (
        <header id="header" style={{ background: scroll > 50 ? '#17413f' : 'transparent' }}>
            <div className='bar' />
            <Link to='nav_home' smooth={true} onClick={handleLogoClick}>
                <div className="logo">
                    <div className={`flip_inner ${rotateLogo ? 'rotate' : ''}`}>
                        <div className='front'>Portfolio</div>
                        <div className='back'>Jaeyeong's</div>
                    </div>
                </div>
            </Link>
            <nav id="gnb" style={{ display: toggle ? 'block' : 'none' }}>
                <ul>
                    <Link to="nav_home" smooth={true}>
                        <li className="home" onClick={() => { setToggle(false) }}>
                            <div className='li_wrap_first'>
                                <span className="material-symbols-outlined home_icon">home</span>
                                <span className='txt'>Home</span>
                            </div>
                            <div className='li_wrap_second'>
                                <span className="material-symbols-outlined home_icon">home</span>
                                <span className='txt'>Home</span>
                            </div>
                        </li>
                    </Link>
                    <Link to="nav_about" smooth={true} offset={-90}>
                        <li className="about" onClick={() => { setToggle(false) }}>
                            <div className='li_wrap_first'>
                                <span className="material-symbols-outlined user_icon">person</span>
                                <span className='txt'>About</span>
                            </div>
                            <div className='li_wrap_second'>
                                <span className="material-symbols-outlined user_icon">person</span>
                                <span className='txt'>About</span>
                            </div>
                        </li>
                    </Link>
                    <Link to="nav_projects" smooth={true} offset={-90}>
                        <li className="projects" onClick={() => { setToggle(false) }}>
                            <div className='li_wrap_first'>
                                <span className="material-symbols-outlined project_icon">sync_saved_locally</span>
                                <span className='txt'>Projects</span>
                            </div>
                            <div className='li_wrap_second'>
                                <span className="material-symbols-outlined project_icon">sync_saved_locally</span>
                                <span className='txt'>Projects</span>
                            </div>
                        </li>
                    </Link>
                </ul>
            </nav>
            <button className="toggle_menu" onClick={() => { handleToggle() }}>
                <span className="material-symbols-outlined menu_icon" style={{ display: toggle ? 'none' : 'block' }}>menu</span>
                <span className="material-symbols-outlined close_icon" style={{ display: toggle ? 'block' : 'none' }}>close</span>
            </button>
        </header>
    );
};

export default Header;