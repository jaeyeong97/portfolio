import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const [switchToggle, setSwitchToggle] = useState(true);
  const mousePosition = useRef({ x: 0, y: 0 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 2 ? 2 : prevSlide + 1));
  };
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 0 : prevSlide - 1));
  };

  //스위치 토글
  const isClicked = () => {
    setSwitchToggle(!switchToggle);
  };

  // 마우스 시점 이동
  const handleMouseMove = (event) => {
    const xPercent = (event.clientX / window.innerWidth) * 100 - 50;
    const yPercent = (event.clientY / window.innerHeight) * 100 - 50;
    mousePosition.current = { x: -xPercent / 3, y: -yPercent / 3 };

    const element = document.querySelector('.scene');
    if (element) {
      element.style.top = `${50 + mousePosition.current.y}%`;
      element.style.left = `${50 + mousePosition.current.x}%`;
    }
  };

  const handleClickMenu = (click) => {
    if (click === 'aboutme') {
      navigate('/home', { state: { scrollTarget: 'nav_home' } })
    } else if (click === 'skills') {
      navigate('/home', { state: { scrollTarget: 'nav_about' } })
    } else if (click === 'projects') {
      navigate('/home', { state: { scrollTarget: 'nav_projects' } })
    } else {
      return;
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="gallery_wrap">
      <div className="scene">
        <div className={switchToggle ? 'cube' : 'cube off'}>
          <div className="cube_face cube_face_back">
            <div className="frame_wrap" >
              <div className="frame">
                <div
                  className="pictures"
                >
                  <div
                    className="img-wrap"
                    style={{
                      transform: `translateX(-${currentSlide * 100}%)`,
                      transition: 'transform 0.5s'
                    }}>
                    <div className="imgContainer" onClick={() => handleClickMenu('aboutme')}>
                      ABOUT ME
                    </div>
                    <div className="imgContainer" onClick={() => handleClickMenu('skills')}>
                      SKILLS
                    </div>
                    <div className="imgContainer" onClick={() => handleClickMenu('projects')}>
                      PROJECTS
                    </div>
                  </div>
                </div>
              </div>
              <div className="switch" title="스위치" onClick={() => { isClicked() }}></div>
            </div>
          </div>
          <div className="cube_face cube_face_right">
            <div className="exit">
              <div className="exit_door" onClick={() => navigate("/outside")} title="문">
                <div className="deco_wrap">
                  <div className="deco"></div>
                  <div className="deco"></div>
                  <div className="deco"></div>
                  <div className="deco"></div>
                </div>
                <div className="handle"></div>
              </div>
              <div className="exit_sign"></div>
            </div>
          </div>
          <div className="cube_face cube_face_left">
            <div className="window_wrap">
              <div className="w_top"></div>
              <div className="w_bottom"></div>
              <div className="w_right"></div>
              <div className="w_front">
                <div className="w_frame1"></div>
                <div className="w_frame2"></div>
                <div className="rain rain1"></div>
                <div className="rain rain2"></div>
                <div className="rain rain3"></div>
                <div className="rain rain4"></div>
                <div className="rain rain5"></div>
                <div className="rain rain6"></div>
                <div className="rain rain7"></div>
                <div className="rain rain8"></div>
                <div className="rain rain9"></div>
                <div className="rain rain10"></div>
                <div className="rain rain11"></div>
                <div className="rain rain12"></div>
                <div className="rain rain13"></div>
              </div>
            </div>
          </div>
          <div className="cube_face cube_face_top">
            <div className="light">
              <div className="stick"></div>
              <div className="wing wing1"></div>
              <div className="wing wing2"></div>
              <div className="wing wing3"></div>
            </div>
          </div>
          <div className="cube_face cube_face_bottom">
            <div className="control_wrap">
              <div className="control">
                <div className="c_top">
                  <div
                    className="c_left arrow"
                    title="왼쪽"
                    onClick={prevSlide}
                  ></div>
                  <div
                    className="c_right arrow"
                    title="오른쪽"
                    onClick={nextSlide}
                  ></div>
                </div>
                <div className="c_stick"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
