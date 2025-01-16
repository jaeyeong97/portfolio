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
          <img src="/assets/profile.webp" alt="profile" fetchpriority="high" />
        </div>
        <div className="main_txt">
          <div className="t1">
            <span ref={typing}></span>
            <span className="hand" style={{ opacity: showHand ? '1' : '0', transition: 'opacity 0.5s' }}
            >👋</span>
          </div>
          <div className="t2">
            <span>프론트엔드 개발자 <span className="accent">장재영</span>입니다.</span>
          </div>
        </div>
        <h2 className="about-title">
          About Me
          <div className="underbar"></div>
        </h2>
        <div className="sub_wrap">
          <div className="t3">
            <div className="profile">
              <img src="/assets/profile.webp" alt="profile" />
            </div>
            <div className='icons-wrap'>
              <a className='github' href='https://github.com/jaeyeong97' target='_blank' rel="noreferrer">
                <div className='icon'></div>
                <div className="txt">깃허브</div>
              </a>
              <a className='email' href='mailto:rkaakdbdb1822@naver.com' target='_blank' rel="noreferrer">
                <div className='icon'></div>
                <div className="txt">이메일</div>
              </a>
            </div>
            <div className="text-wrap">
              <div className="s_title">프로필</div>
              <span>
                • 이름 : 장재영
              </span>
              <span>
                • 생년월일 : 1997년 11월 03일
              </span>
              <span>
                • 연락처 : 010-9630-1822
              </span>
              <span>
                • 이메일 : rkaakdbdb1822@naver.com
              </span>
              <div className="s_title">자기소개</div>
              <span>
                안녕하세요. 프론트엔드 개발자 장재영입니다!
              </span>
              <span>
                저는 LG이노텍에서 약품을 분석하고 데이터를 관리하는 업무를 담당했었습니다. 시스템의 UI와 UX를 개선하고 싶다는 생각을 가졌었고, 프론트엔드 개발자로서 새로운 길을 걷게 되었습니다.
              </span>
              <span>
                프론트엔드 개발자가 되기위해 그린컴퓨터 아카데미에서 프론트엔드 개발자 양성 과정 수업을 100%의 출석률로 수료를 하였고, 지금까지 꾸준히 흥미를 가지고 개발을 하고있습니다.
              </span>
              <span>
                비전공 개발자라는 고정관념을 타파하고 저에게 기회를 주신다면, 성공적인 프로젝트로 보답하겠습니다. 감사합니다.
              </span>
            </div>
          </div>
          <div className="flex-wrap">
            <div className="career-wrap box">
              <div className="title-wrap">
                <img src="/assets/career.webp" alt="" />
                <span className="title">경력 사항</span>
              </div>
              <div className="line-box">
                <div className="line"></div>
                <div className="s-box-wrap">
                  <div className="s-box">
                    <div className="flex">
                      <img src="/assets/lg.webp" alt="" />
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
                <img src="/assets/edu.webp" alt="" />
                <span className="title">교육</span>
              </div>
              <div className="line-box">
                <div className="line2"></div>
                <div className="s-box-wrap">
                  <div className="s-box">
                    <div className="flex">
                      <img src="/assets/greencom.webp" alt="" className="green" />
                      <div className="s-flex">
                        <div className="s-title">그린컴퓨터 아카데미</div>
                        <div className="duration">2023/09 ~ 2024/03</div>
                        <span>• 반응형 웹, 프론트엔드 개발 실무 양성 과정</span>
                        <span>• F/E 기술(JS, REACT 등) 학습</span>
                        <span>• 프로토타입 제작부터 배포까지의 전 과정 경험 및 학습 </span>
                        <span>• 팀 프로젝트를 통한 협업 및 문제 해결 경험</span>
                      </div>
                    </div>
                    <div className="flex">
                      <img src="/assets/uc.webp" alt="" />
                      <div className="s-flex">
                        <div className="s-title">울산과학대학교</div>
                        <div className="duration">2016/03 ~ 2022/02</div>
                        <span>• 울산과학대학교 전기과 졸업</span>
                      </div>
                    </div>
                    <div className="flex">
                      <img src="/assets/ec.webp" alt="" />
                      <div className="s-flex">
                        <div className="s-title">EC academy</div>
                        <div className="duration">2019/06 ~ 2019/10</div>
                        <span>• 캐나다 어학연수</span>
                        <span>• Semi Intensive English course 수료</span>
                      </div>
                    </div>
                    <div className="flex">
                      <img src="/assets/cia.webp" alt="" />
                      <div className="s-flex">
                        <div className="s-title">CIA academy</div>
                        <div className="duration">2019/03 ~ 2019/06</div>
                        <span>• 필리핀 어학연수</span>
                        <span>• Regular ESL course course 수료</span>
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