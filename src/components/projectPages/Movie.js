import { useEffect } from "react";
import PjHeader from "../projectHeader/PjHeader";
import PjFooter from "../projectFooter/PjFooter";
import { Link } from 'react-scroll';
import sr from "../../util/ScrollReveal";
import AnimatedCountUp from "../../util/AnimatedCountUp";

const Movie = () => {

  useEffect(() => {
    // 페이지 이동 후 스크롤을 최상단으로
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {

    //프로젝트 퍼센트 바 애니메이션
    sr.reveal(".movie_html_percent_bar", {
      duration: 1000,
      beforeReveal: (el) => {
        el.style.animation = "movie_html_percent 1s ease-out forwards";
      },
    });
    sr.reveal(".movie_css_percent_bar", {
      duration: 1000,
      beforeReveal: (el) => {
        el.style.animation = "movie_css_percent 1s ease-out forwards";
      },
    });
    sr.reveal(".movie_js_percent_bar", {
      duration: 1000,
      beforeReveal: (el) => {
        el.style.animation = "movie_js_percent 1s ease-out forwards";
      },
    });
  }, []);


  return (
    <div className="movie components_wrap" id="pj_top">
      <PjHeader />
      <main className="main">
        <div className="main_img">영화 메인 이미지</div>
        <div className="main_txt_wrap_center">
          <div className="main_txt_wrap">
            <div className="main_txt">
              <h2 className="title">go n play</h2>
              <span className="t1">go n play OTT 웹사이트</span>
              <span className="t2">사용 기술: React, Recoil, React Router, SCSS</span>
              <div className="t3">깃허브 주소:&nbsp;<a href="https://github.com/jaeyeong97/go-n-play" target="_blank" rel="noreferrer">github.com/jaeyeong97/go-n-play</a>
                <span className="material-symbols-outlined open">
                  open_in_new
                </span>
              </div>
            </div>
            <div className="eye">
              <a href="https://go-n-play.web.app/" target="_blank" rel="noreferrer">
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
          <div>• <span className="em">React</span> 개인 프로젝트</div>
          <div>• 영화, 시리즈 정보를 확인 할 수 있는 OTT 웹사이트</div>
        </div>
      </section>
      <section className="section_bar">
        <h3 className="ex_title">📊언어 사용 비율 <span>(깃허브 기준)</span></h3>
        <div className="language_wrap">
          <div className="language">
            <div className="txt_wrap">
              <div className="html_icon"></div>
              <div className="html txt">HTML</div>
            </div>
            <div className="html_percent_wrap">
              <div className="movie_html_percent_bar bar"></div>
              <div className="movie_html_percent_txt">
                <AnimatedCountUp
                  start={0}
                  end={1.2}
                  duration={2.5}
                  decimal={1}
                />
              </div>
            </div>
          </div>
          <div className="language">
            <div className="txt_wrap">
              <div className="scss_icon"></div>
              <div className="scss txt">SCSS</div>
            </div>
            <div className="css_percent_wrap">
              <div className="movie_css_percent_bar bar"></div>
              <div className="movie_css_percent_txt">
                <AnimatedCountUp
                  start={0}
                  end={19.9}
                  duration={2.5}
                  decimal={1}
                />
              </div>
            </div>
          </div>
          <div className="language">
            <div className="txt_wrap">
              <div className="js_icon"></div>
              <div className="js_txt">JS</div>
            </div>
            <div className="js_percent_wrap">
              <div className="movie_js_percent_bar bar"></div>
              <div className="movie_js_percent_bar">
                <AnimatedCountUp
                  start={0}
                  end={77.7}
                  duration={2.5}
                  decimal={1}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="to_project">
          <a href="https://go-n-play.web.app/" target="_blank" rel="noreferrer">
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

export default Movie;