import { useEffect } from "react";
import PjHeader from "../projectHeader/PjHeader";
import PjFooter from "../projectFooter/PjFooter";
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
              <span className="t2">사용 기술: React, fetch, CSS</span>
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
            <div>• 개인 프로젝트</div>
            <div>• CSS의 속성을 최대한 활용하여 입체적인 공간을 만들고, Unsplash 이미지 API를 통해 사진을 불러온 전시회 웹사이트입니다.</div>
          </div>
        </div>
      </section>
      <section>
        <h3 className="ex_title">📚사용 기술</h3>
        <div className="summary_txt">
          <div className="explain">
            <div>• <span className="cem">CSS</span> - CSS 속성인 <span className="cem">transform-style: preserve-3d</span>, <span className="cem">perspective</span> 를 활용해 입체적인 공간을 구현하였습니다. 또한 <span className="cem">keyframes</span>를 이용해 번개가 치고 비가 오는 효과를 통해 사용자가 시각적으로 더 몰입감 있는 인터페이스를 제작하였습니다.</div>
            <div>• <span className="cem">fetch</span> - Unsplash 이미지 API를 가져올때 브라우저 내장 기능인 fetch를 통해 불러왔습니다. </div>
          </div>
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