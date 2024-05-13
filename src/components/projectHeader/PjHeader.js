import { useEffect, useState } from 'react';
import '../projectHeader/PjHeader.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';

const PjHeader = () => {
    const [scroll, setScroll] = useState(0);
    const navigate = useNavigate();

    // 스크롤시 헤더 배경색
    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <header id="PjHeader" style={{ background: scroll > 50 ? 'rgba(255,255,255,0.2)' : 'transparent', border: scroll > 50 ? '1px solid rgba(255, 255, 255, 0.2)' : 'transparent', backdropFilter: scroll > 50 ? 'blur(2px)' : 'initial' }}>
            <div className='PjHeader_wrap' id='nav_home'>
                <div className='go_back' onClick={() => { navigate('/') }}>
                    <span className="material-symbols-outlined arrow_back">
                        arrow_back
                    </span>
                </div>
                <Link to="nav_top" smooth={true}>
                    <div className="logo">
                        <div className='flip_inner'>
                            <div className='front'>Portfolio</div>
                            <div className='back'>Jaeyeong's</div>
                        </div>
                    </div>
                </Link>
            </div>
        </header>
    );
};

export default PjHeader;