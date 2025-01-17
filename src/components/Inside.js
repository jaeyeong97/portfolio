import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const [switchToggle, setSwitchToggle] = useState(true);
  const [bulb, setBulb] = useState(false);
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
  const handleFan = () => {
    setSwitchToggle(!switchToggle);
  };

  // 조명 on/off
  const handleBulb = () => {
    setBulb(!bulb);
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
      navigate('/home', { state: { scrollTarget: 'nav_top' } })
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
        <div className="cube">
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
                    <div className="imgContainer" onClick={() => handleClickMenu('aboutme')} title="포트폴리오 웹사이트로 이동">
                      <div className="text">FRONTEND DEVELOPER</div>
                      <div className="text">JAEYEONG's</div>
                      <div className="text">PORTFOLIO</div>
                    </div>
                    <div className="imgContainer" onClick={() => handleClickMenu('skills')} title="포트폴리오 스킬 섹션 이동">
                      ABOUT MY SKILLS
                    </div>
                    <div className="imgContainer" onClick={() => handleClickMenu('projects')} title="포트폴리오 프로젝트 섹션 이동">
                      PROJECTS
                    </div>
                  </div>
                </div>
              </div>
              <div className="switch">
                <div className="btn1" onClick={() => { handleFan() }} title="실링팬 스위치"></div>
                <div className="btn2" onClick={() => { handleBulb() }} title="조명 스위치"></div>
              </div>
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
              <div className="white_board">
                <div className="text">
                  <span>1. 액자를 클릭해서 해당 페이지로 이동할 수 있어요.</span>
                  <span>2. 기둥의 화살표를 눌러 다음 액자로 넘어갈 수 있어요.</span>
                  <span>3. 스위치를 작동시킬 수 있어요.</span>
                  <span>4. 문밖으로 나갈 수 있어요.</span>
                </div>
                <div className="white_board_bottom"></div>
                <img src="./assets/marker.png" alt="마카" className="marker"></img>
                <img src="./assets/eraser.png" alt="지우개" className="eraser"></img>
              </div>
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
              <div className={`light wing wing1 ${switchToggle ? "paused" : ""}`}></div>
              <div className={`light wing wing2 ${switchToggle ? "paused" : ""}`}></div>
              <div className={`light wing wing3 ${switchToggle ? "paused" : ""}`}></div>
            </div>
            <div className={`bulb bulb1 ${bulb ? 'on' : ''}`}></div>
            <div className={`bulb bulb2 ${bulb ? 'on' : ''}`}></div>
            <div className={`bulb bulb3 ${bulb ? 'on' : ''}`}></div>
            <div className={`bulb bulb4 ${bulb ? 'on' : ''}`}></div>
          </div>
          <div className="cube_face cube_face_bottom">
            <div className="control_wrap">
              <div className="control">
                <div className="c_top">
                  <div
                    className="c_left arrow"
                    title="이전"
                    onClick={prevSlide}
                  ></div>
                  <div
                    className="c_right arrow"
                    title="다음"
                    onClick={nextSlide}
                  ></div>
                </div>
                <div className="c_stick"></div>
              </div>
            </div>
            <div className={`bulb_light bulb_light1 ${bulb ? '' : 'off'}`}></div>
            <div className={`bulb_light bulb_light2 ${bulb ? '' : 'off'}`}></div>
            <div className={`bulb_light bulb_light3 ${bulb ? '' : 'off'}`}></div>
            <div className={`bulb_light bulb_light4 ${bulb ? '' : 'off'}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
