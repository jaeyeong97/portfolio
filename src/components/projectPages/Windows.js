import { useEffect } from "react";
import PjHeader from "../projectHeader/PjHeader";
import PjFooter from "../projectFooter/PjFooter";
import { Link } from 'react-scroll';
import sr from "../../util/ScrollReveal";
import AnimatedCountUp from "../../util/AnimatedCountUp";

const Windows = () => {

  useEffect(() => {
    // 페이지 이동 후 스크롤을 최상단으로
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {

    //프로젝트 퍼센트 바 애니메이션
    sr.reveal(".windows_html_percent_bar", {
      duration: 1000,
      beforeReveal: (el) => {
        el.style.animation = "windows_html_percent 1s ease-out forwards";
      },
    });
    sr.reveal(".windows_css_percent_bar", {
      duration: 1000,
      beforeReveal: (el) => {
        el.style.animation = "windows_css_percent 1s ease-out forwards";
      },
    });
    sr.reveal(".windows_js_percent_bar", {
      duration: 1000,
      beforeReveal: (el) => {
        el.style.animation = "windows_js_percent 1s ease-out forwards";
      },
    });
  }, []);


  return (
    <div className="windows components_wrap" id="pj_top">
      <PjHeader />
      <main className="main">
        <div className="main_img">윈도우 메인 이미지</div>
        <div className="main_txt_wrap_center">
          <div className="main_txt_wrap">
            <div className="main_txt">
              <h2 className="title">Windows XP</h2>
              <span className="t1">윈도우 XP 웹사이트</span>
              <span className="t2">사용 기술: HTML, SCSS, JavaScript</span>
              <div className="t3">깃허브 주소:&nbsp;<a href="https://github.com/jaeyeong97/window-xp" target="_blank" rel="noreferrer">github.com/jaeyeong97/window-xp</a>
                <span className="material-symbols-outlined open">
                  open_in_new
                </span>
              </div>
            </div>
            <div className="eye">
              <a href="https://window-xp.netlify.app/" target="_blank" rel="noreferrer">
                <div className="eye_in1">
                  <div className="eye_img">
                    <span className="material-symbols-outlined eye_icon">
                      visibility
                    </span>
                  </div>
                  <span>프로젝트 보기</span>
                </div>
                <div className="eye_in2">
                  <div className="eye_img"></div>
                  <span>Click!</span>
                </div>
              </a>
            </div>
            <Link to="section_start" smooth={true} offset={-90}>
              <span className="material-symbols-outlined arrow_down">
                expand_more
              </span>
            </Link>
          </div>
        </div>
      </main>
      <section id="section_start">
        <h3 className="ex_title">🏅프로젝트 개요</h3>
        <div className="explain">
          <div>• 개인 프로젝트</div>
          <div>• 윈도우 XP를 재구현한 웹사이트입니다.</div>
          <div>• 퀴즈 게임과 가위 바위 보 게임을 만들어 보았습니다.</div>
        </div>
      </section>
      <section>
        <h3 className="ex_title">📚사용 기술</h3>
        <div className="summary_txt">
          <div className="explain">
            <div>• <span className="cem">JavaScript</span> - 별도의 라이브러리나 프레임워크 없이 순수 JavaScript만을 이용하여 필요한 기능들을 구현하였습니다.</div>
          </div>
        </div>
      </section>
      <section className="section_bar">
        <h3 className="ex_title">📊언어 사용 비율 <span>(깃허브 기준)</span></h3>
        <div className="language_wrap">
          <div className="language">
            <div className="txt_wrap">
              <div className="scss_icon icon"></div>
              <div className="css txt">SCSS</div>
            </div>
            <div className="css_percent_wrap">
              <div className="windows_css_percent_bar bar"></div>
              <div className="windows_css_percent_txt">
                <AnimatedCountUp
                  start={0}
                  end={45}
                  duration={2.5}
                  decimal={1}
                />
              </div>
            </div>
          </div>
          <div className="language">
            <div className="txt_wrap">
              <div className="html_icon icon"></div>
              <div className="html txt">HTML</div>
            </div>
            <div className="html_percent_wrap">
              <div className="windows_html_percent_bar bar"></div>
              <div className="windows_html_percent_txt">
                <AnimatedCountUp
                  start={0}
                  end={32.6}
                  duration={2.5}
                  decimal={1}
                />
              </div>
            </div>
          </div>
          <div className="language">
            <div className="txt_wrap">
              <div className="js_icon icon"></div>
              <div className="js_txt">JS</div>
            </div>
            <div className="js_percent_wrap">
              <div className="windows_js_percent_bar bar"></div>
              <div className="windows_js_percent_bar">
                <AnimatedCountUp
                  start={0}
                  end={22.4}
                  duration={2.5}
                  decimal={1}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="to_project">
          <a href="https://window-xp.netlify.app/" target="_blank" rel="noreferrer">
            <span className="text">프로젝트 보기</span>
            <span className="material-symbols-outlined arrow_forward arrow--right">
              arrow_forward
            </span>
          </a>
        </div>
      </section>
      <PjFooter />
    </div>
  );
};

export default Windows;