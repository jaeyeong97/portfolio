import { useEffect } from "react";
import PjHeader from "../projectHeader/PjHeader";
import PjFooter from "../projectFooter/PjFooter";
import { Link } from 'react-scroll';
import sr from "../../util/ScrollReveal";
import AnimatedCountUp from "../../util/AnimatedCountUp";

const UlsanTour = () => {

  useEffect(() => {
    // 페이지 이동 후 스크롤을 최상단으로
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {

    //프로젝트 퍼센트 바 애니메이션
    sr.reveal(".ulsan_tour_html_percent_bar", {
      duration: 1000,
      beforeReveal: (el) => {
        el.style.animation = "ulsan_tour_html_percent 1s ease-out forwards";
      },
    });
    sr.reveal(".ulsan_tour_css_percent_bar", {
      duration: 1000,
      beforeReveal: (el) => {
        el.style.animation = "ulsan_tour_css_percent 1s ease-out forwards";
      },
    });
    sr.reveal(".ulsan_tour_js_percent_bar", {
      duration: 1000,
      beforeReveal: (el) => {
        el.style.animation = "ulsan_tour_js_percent 1s ease-out forwards";
      },
    });
  }, []);


  return (
    <div className="ulsan_tour components_wrap" id="pj_top">
      <PjHeader />
      <main className="main">
        <div className="main_img">울산 관광 메인 이미지</div>
        <div className="main_txt_wrap_center">
          <div className="main_txt_wrap">
            <div className="main_txt">
              <h2 className="title">울산 관광</h2>
              <span className="t1">울산 관광 웹사이트</span>
              <span className="t2">사용 기술: HTML, CSS, JQuery</span>
              <div className="t3">깃허브 주소:&nbsp;<a href="https://github.com/jaeyeong97/visit-ulsan-web" target="_blank" rel="noreferrer">github.com/jaeyeong97/visit-ulsan-web</a>
                <span className="material-symbols-outlined open">
                  open_in_new
                </span>
              </div>
            </div>
            <div className="eye">
              <a href="https://jaeyeong97-ulsan-web.netlify.app/" target="_blank" rel="noreferrer">
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
        <h3 className="ex_title">📋프로젝트 개요</h3>
        <div className="explain">
          <div>• 개인 프로젝트</div>
          <div>• 기존의 울산 관광 웹사이트를 새롭게 디자인한 <span className="em">1680px 고정형</span> 웹사이트입니다.</div>
        </div>
      </section>
      <section className="section_bar">
        <h3 className="ex_title">📊언어 사용 비율 <span>(깃허브 기준)</span></h3>
        <div className="language_wrap">
          <div className="language">
            <div className="txt_wrap">
              <div className="html_icon icon"></div>
              <div className="html txt">HTML</div>
            </div>
            <div className="html_percent_wrap">
              <div className="ulsan_tour_html_percent_bar bar"></div>
              <div className="ulsan_tour_html_percent_txt">
                <AnimatedCountUp
                  start={0}
                  end={55.8}
                  duration={2.5}
                  decimal={1}
                />
              </div>
            </div>
          </div>
          <div className="language">
            <div className="txt_wrap">
              <div className="css_icon icon"></div>
              <div className="css txt">CSS</div>
            </div>
            <div className="css_percent_wrap">
              <div className="ulsan_tour_css_percent_bar bar"></div>
              <div className="ulsan_tour_css_percent_txt">
                <AnimatedCountUp
                  start={0}
                  end={40.2}
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
              <div className="ulsan_tour_js_percent_bar bar"></div>
              <div className="ulsan_tour_js_percent_bar">
                <AnimatedCountUp
                  start={0}
                  end={4}
                  duration={2.5}
                  decimal={1}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="to_project">
          <a href="https://jaeyeong97-ulsan-web.netlify.app/" target="_blank" rel="noreferrer">
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

export default UlsanTour;