import { useEffect } from "react";
import PjHeader from "../projectHeader/PjHeader";
import PjFooter from "../projectFooter/PjFooter";
import { Link } from 'react-scroll';
import sr from "../../util/ScrollReveal";
import AnimatedCountUp from "../../util/AnimatedCountUp";
const Shop = () => {
  useEffect(() => {
    // 페이지 이동 후 스크롤을 최상단으로
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {

    //프로젝트 퍼센트 바 애니메이션
    sr.reveal(".shop_html_percent_bar", {
      duration: 1000,
      beforeReveal: (el) => {
        el.style.animation = "shop_html_percent 1s ease-out forwards";
      },
    });
    sr.reveal(".shop_scss_percent_bar", {
      duration: 1000,
      beforeReveal: (el) => {
        el.style.animation = "shop_scss_percent 1s ease-out forwards";
      },
    });
    sr.reveal(".shop_js_percent_bar", {
      duration: 1000,
      beforeReveal: (el) => {
        el.style.animation = "shop_js_percent 1s ease-out forwards";
      },
    });
  }, []);

  return (
    <div className="shop components_wrap" id="pj_top">
      <PjHeader />
      <main className="main">
        <div className="main_img">SHOP 메인 이미지</div>
        <div className="main_txt_wrap_center">
          <div className="main_txt_wrap">
            <div className="main_txt">
              <h2 className="title">SHOP</h2>
              <span className="t1">쇼핑몰 웹사이트</span>
              <span className="t2">사용 기술: React, Recoil, React Router, SCSS, OAuth</span>
              <div className="t3">깃허브 주소:&nbsp;<a href="https://github.com/jaeyeong97/SHOP" target="_blank" rel="noreferrer">github.com/jaeyeong97/SHOP</a>
                <span className="material-symbols-outlined open">
                  open_in_new
                </span>
              </div>
            </div>
            <div className="eye">
              <a href="https://shop-2da0a.web.app/" target="_blank" rel="noreferrer">
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
            <div>• <span className="em">React</span> 개인 프로젝트</div>
            <div>• 쇼핑몰에 필요한 기능을 구현한 쇼핑몰 웹사이트</div>
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
              <div className="shop_html_percent_bar bar"></div>
              <div className="shop_html_percent_txt">
                <AnimatedCountUp
                  start={0}
                  end={0.6}
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
              <div className="shop_scss_percent_bar bar"></div>
              <div className="shop_scss_percent_txt">
                <AnimatedCountUp
                  start={0}
                  end={26.5}
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
              <div className="shop_js_percent_bar bar"></div>
              <div className="shop_js_percent_bar">
                <AnimatedCountUp
                  start={0}
                  end={72.9}
                  duration={2.5}
                  decimal={1}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="to_project">
          <a href="https://shop-2da0a.web.app/" target="_blank" rel="noreferrer">
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
export default Shop;