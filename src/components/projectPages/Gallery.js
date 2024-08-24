import { useEffect } from "react";
import PjHeader from "../projectHeader/PjHeader";
import PjFooter from "../projectFooter/PjFooter";
import '../projectPages/ProjectCommon.css'
import { Link } from 'react-scroll';
import sr from "../../util/ScrollReveal";
import AnimatedCountUp from "../../util/AnimatedCountUp";
const Gallery = () => {
  useEffect(() => {
    // 페이지 이동 후 스크롤을 최상단으로
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {

    //프로젝트 퍼센트 바 애니메이션
    sr.reveal(".gallery_html_percent_bar", {
      duration: 1000,
      beforeReveal: (el) => {
        el.style.animation = "gallery_html_percent 1s ease-out forwards";
      },
    });
    sr.reveal(".gallery_css_percent_bar", {
      duration: 1000,
      beforeReveal: (el) => {
        el.style.animation = "gallery_css_percent 1s ease-out forwards";
      },
    });
    sr.reveal(".gallery_js_percent_bar", {
      duration: 1000,
      beforeReveal: (el) => {
        el.style.animation = "gallery_js_percent 1s ease-out forwards";
      },
    });
  }, []);
  return (
    <div className="gallery components_wrap" id="pj_top">
      <PjHeader />
      <main className="main">
        <div className="main_img">전시회 메인 이미지</div>
        <div className="main_txt_wrap_center">
          <div className="main_txt_wrap">
            <div className="main_txt">
              <h2 className="title">전시회</h2>
              <span className="t1">입체적인 공간으로 구현한 전시회 웹사이트</span>
              <span className="t2">사용 기술: JSX, CSS, JavaScript, React</span>
              <div className="t3">깃허브 주소:&nbsp;<a href="https://github.com/jaeyeong97/3d-gallery" target="_blank" rel="noreferrer">github.com/jaeyeong97/3d-gallery</a>
                <span className="material-symbols-outlined open">
                  open_in_new
                </span>
              </div>
            </div>
            <div className="eye">
              <a href="https://jaeyeong97-3d-gallery-44701.web.app" target="_blank" rel="noreferrer">
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
      <section className="section_summary" id="section_start">
        <h3 className="ex_title">🏅프로젝트 개요</h3>
        <div className="summary_txt">
          <div className="explain">
            <div>• CSS 속성인 transform-style을 사용하여 <span className="em">입체적인 공간</span> 을 구현하였습니다.</div>
          </div>
        </div>
      </section>
      <section className="section_out">
        <h3 className="ex_title">💻구현 기능</h3>
        <div className="out_txt">
          <div className="explain">
            <div>• <span className="em">문</span> 을 클릭하여 전시회 안팎을 드나들 수 있게 하였습니다.</div>
            <div>• <span className="em">keyframes</span> 를 사용하여 비가 오는 애니메이션을 주었습니다.</div>
            <div>• <span className="em">스위치</span> 클릭 시, background-color값을 어둡게줘서 전등을 끈 듯한 느낌을 주었습니다.</div>
            <div>• 기둥에 있는 <span className="em">버튼</span> 클릭 시, 사진이 변경되게 하였습니다.</div>
            <div>• keyframes를 사용하여 번개와 비가 오는 <span className="em">애니메이션</span> 을 구현하였습니다.</div>
          </div>
        </div>
      </section>
      <section className="section_bar">
        <h3 className="ex_title">📊언어 사용 비율</h3>
        <div className="language_wrap">
          <div className="language">
            <div className="txt_wrap">
              <div className="html_icon"></div>
              <div className="html txt">HTML</div>
            </div>
            <div className="html_percent_wrap">
              <div className="gallery_html_percent_bar bar"></div>
              <div className="gallery_html_percent_txt">
                <AnimatedCountUp
                  start={0}
                  end={0.9}
                  duration={2.5}
                  decimal={1}
                />
              </div>
            </div>
          </div>
          <div className="language">
            <div className="txt_wrap">
              <div className="css_icon"></div>
              <div className="css txt">CSS</div>
            </div>
            <div className="css_percent_wrap">
              <div className="gallery_css_percent_bar bar"></div>
              <div className="gallery_css_percent_txt">
                <AnimatedCountUp
                  start={0}
                  end={73.4}
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
              <div className="gallery_js_percent_bar bar"></div>
              <div className="gallery_js_percent_bar">
                <AnimatedCountUp
                  start={0}
                  end={25.7}
                  duration={2.5}
                  decimal={1}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="to_project">
          <a href="https://jaeyeong97-3d-gallery-44701.web.app" target="_blank" rel="noreferrer">
            <span className="text">프로젝트 보기</span>
            <span className="material-symbols-outlined arrow_forward arrow--right">
              arrow_forward
            </span>
          </a>
        </div>
      </section>
      <PjFooter />
    </div>
  )
}
export default Gallery;