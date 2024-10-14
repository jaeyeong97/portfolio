import { useEffect, useRef, useState } from "react";
import sr from "../../util/ScrollReveal";
import Typed from "typed.js";

const Main = () => {
  const typing = useRef(null);
  const [showHand, setShowHand] = useState(false);

  useEffect(() => {
    sr.reveal(".t1", {
      origin: "bottom",
      distance: "50px",
      duration: 800,
      opacity: 0,
      easing: "ease-in-out",
      reset: false,
    });
    sr.reveal(".t2", {
      origin: "bottom",
      distance: "50px",
      duration: 800,
      opacity: 0,
      easing: "ease-in-out",
      reset: false,
      delay: 1500,
    });
    sr.reveal(".sub_wrap", {
      origin: "bottom",
      distance: "50px",
      duration: 800,
      opacity: 0,
      easing: "ease-in-out",
      reset: false,
      // delay: 1500,
    });
  }, []);

  // 메인 타이핑 모션
  useEffect(() => {
    new Typed(typing.current, {
      strings: ["안녕하세요!",],
      typeSpeed: 120,
      backSpeed: 30,
      backDelay: 1000,
      startDelay: 300,
      loop: false,
    });
    const timer = setTimeout(() => {
      setShowHand(true);
    }, 1300);

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, []);

  return (
    <main id="main">
      <div className="main_wrap" id="nav_home">
        <div className="profile-main">
          <img src="/assets/profile.png" alt="profile" />
        </div>
        <div className="main_txt">
          <div className="t1">
            <span ref={typing}></span>
            <span className="hand" style={{ opacity: showHand ? '1' : '0', transition: 'opacity 0.5s' }}
            >👋</span>
          </div>
          <div className="t2">
            <span>협력하며 함께 성장하고 싶은 <span className="accent">장재영</span>입니다.</span>
          </div>
        </div>
        <h2 className="about-title">
          About Me
          <div className="underbar"></div>
        </h2>
        <div className="sub_wrap">
          <div className="t3">
            <div className="profile">
              <img src="/assets/profile.png" alt="profile" />
            </div>
            <div className="name">장재영</div>
            <div className='icons-wrap'>
              <a className='github' href='https://github.com/jaeyeong97' target='_blank' rel="noreferrer">
                <div className='icon'></div>
              </a>
              <a className='email' href='mailto:rkaakdbdb1822@naver.com' target='_blank' rel="noreferrer">
                <div className='icon'></div>
              </a>
            </div>
            <div className="text-wrap">
              <span>
                • 방송통신대학교 컴퓨터과학과 3학년에 재학 중이며, 웹 개발자로서의 전공지식을 쌓고 있습니다.
              </span>
              <span>
                • 이전에는 LG이노텍에서 화학약품 분석 및 데이터 관리 업무를 담당했지만, 웹 개발에 대한 열정을 가지고 더 깊이 있는 학습을 위해 컴퓨터과학으로 전공을 전향하게 되었습니다.
              </span>
              <span>
                • 그린컴퓨터아카데미에서 6개월 동안 프론트엔드 개발 양성과정을 수료하면서, 웹 개발에 필요한 기본적인 역량을 갖추었고 이를 실무에 적용할 수 있는 기술들을 익혔습니다.
              </span>
              <span>
                • 부족한 부분은 개인 시간을 활용해 보완해 나가면서 지속적으로 발전하는 개발자가 되기 위해 노력하겠습니다!
              </span>
            </div>
          </div>
          <div className="flex-wrap">
            <div className="career-wrap box">
              <div className="title-wrap">
                <img src="/assets/career.png" alt="" />
                <span className="title">경력 사항</span>
              </div>
              <div className="line-box">
                <div className="line"></div>
                <div className="s-box-wrap">
                  <div className="s-box">
                    <div className="flex">
                      <img src="/assets/lg.png" alt="" />
                      <div className="s-flex">
                        <div className="s-title">LG innotek</div>
                        <div className="duration">2021/09 ~ 2023/04</div>
                        <span>• 직무: 생산기술 (반도체)</span>
                        <span>• 업무 내용</span>
                        <span className="ml f">- 반도체 공정 화학 약품 분석 및 농도 측정</span>
                        <span className="ml">- SPC(Statistical Process Control)를 통한 데이터 관리</span>
                        <span className="ml">- 약품 데이터 트렌드 분석 및 공정 최적화</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="education-wrap box">
              <div className="title-wrap">
                <img src="/assets/edu.png" alt="" />
                <span className="title">교육</span>
              </div>
              <div className="line-box">
                <div className="line2"></div>
                <div className="s-box-wrap">
                  <div className="s-box">
                    <div className="flex">
                      <img src="/assets/greencom.png" alt="" className="green" />
                      <div className="s-flex">
                        <div className="s-title">그린컴퓨터 아카데미</div>
                        <div className="duration">2023/09 ~ 2024/03</div>
                        <span>• 반응형 웹, 프론트엔드 개발 실무 양성 과정</span>
                        <span>• F/E 기술(JS, REACT 등) 학습</span>
                        <span>• 프로토타입 제작부터 배포까지의 전 과정 경험 및 학습 </span>
                        <span>• 팀 프로젝트를 통한 협업 및 문제 해결 경험</span>
                      </div>
                    </div>
                  </div>
                  <div className="s-box">
                    <div className="flex">
                      <img src="/assets/universe.png" alt="" />
                      <div className="s-flex">
                        <div className="s-title">한국방송통신대학교</div>
                        <div className="duration">2024/09 ~</div>
                        <span>• 컴퓨터과학과 3학년으로 편입해 병행하여 학습중입니다.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;