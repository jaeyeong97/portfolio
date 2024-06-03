import { useEffect } from "react";
import PjHeader from "../projectHeader/PjHeader";
import PjFooter from "../projectFooter/PjFooter";
import '../projectPages/ProjectCommon.css'
import { Link } from 'react-scroll';
import sr from "../../util/ScrollReveal";
import AnimatedCountUp from "../../util/AnimatedCountUp";
const Recipes = () => {
  useEffect(() => {
    // 페이지 이동 후 스크롤을 최상단으로
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {

    //프로젝트 퍼센트 바 애니메이션
    sr.reveal(".recipes_html_percent_bar", {
      duration: 1000,
      beforeReveal: (el) => {
        el.style.animation = "recipes_html_percent 1s ease-out forwards";
      },
    });
    sr.reveal(".recipes_css_percent_bar", {
      duration: 1000,
      beforeReveal: (el) => {
        el.style.animation = "recipes_css_percent 1s ease-out forwards";
      },
    });
    sr.reveal(".recipes_js_percent_bar", {
      duration: 1000,
      beforeReveal: (el) => {
        el.style.animation = "recipes_js_percent 1s ease-out forwards";
      },
    });
  }, []);

  return (
    <div className="recipes components_wrap" id="pj_top">
      <PjHeader />
      <main className="main">
        <div className="main_img">레시피 메인 이미지</div>
        <div className="main_txt_wrap_center">
          <div className="main_txt_wrap">
            <div className="main_txt">
              <h2 className="title">레시피 파인더</h2>
              <span className="t1">음성인식 기능이 탑재된 레시피 웹 사이트</span>
              <span className="t2">사용 기술: HTML, CSS, JavaScript, React</span>
              <div className="t3">깃허브 주소:&nbsp;<a href="https://github.com/jaeyeong97/Recipes" target="_blank" rel="noreferrer">github.com/jaeyeong97/Recipes</a>
                <span className="material-symbols-outlined open">
                  open_in_new
                </span>
              </div>
            </div>
            <div className="eye">
              <a href="https://jaeyeong97-speechnrecord.web.app/" target="_blank" rel="noreferrer">
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
        <h3 className="ex_title">개요</h3>
        <div className="summary_txt">
          <div className="explain">
            <span>• 사용자들에게 다양한 요리 레시피 정보를 제공하는 웹 사이트입니다.</span>
            <span>• 사용자가 원하는 레시피를 검색하고 확인할 수 있으며, 음성인식 기능을 통하여 원하는 레시피를 찾을 수도 있습니다.</span>
          </div>
        </div>
      </section>
      <section className="section_function">
        <h3 className="ex_title">구현기능</h3>
        <div className="function_txt">
          <div className="explain">
            <span>• react-speech-recognition 라이브러리를 통해 음성인식 기능을 구현하였습니다.</span>
            <span>• 카테고리를 만들어 사용자가 원하는 레시피 종류를 볼 수 있게 하였습니다.</span>
            <span>• 즐겨찾기 기능을 추가하여 사용자가 즐겨찾기 한 레시피 목록을 따로 볼 수 있게 하였습니다.</span>
            <span>• 페이지네이션 기능으로 레시피가 한 페이지당 12개씩 출력되게 하였습니다.</span>
            <span>• styled-components를 사용하여 컴포넌트별로 CSS를 관리하였습니다.</span>
          </div>
        </div>
      </section>
      <section className="section_bar">
        <h3 className="ex_title">언어 사용 비율</h3>
        <div className="language_wrap">
          <div className="language">
            <div className="txt_wrap">
              <div className="html_icon"></div>
              <div className="html txt">Html</div>
            </div>
            <div className="html_percent_wrap">
              <div className="recipes_html_percent_bar bar"></div>
              <div className="recipes_html_percent_txt">
                <AnimatedCountUp
                  start={0}
                  end={1.0}
                  duration={2.5}
                  decimal={1}
                />
              </div>
            </div>
          </div>
          <div className="language">
            <div className="txt_wrap">
              <div className="css_icon"></div>
              <div className="css txt">Css</div>
            </div>
            <div className="css_percent_wrap">
              <div className="recipes_css_percent_bar bar"></div>
              <div className="recipes_css_percent_txt">
                <AnimatedCountUp
                  start={0}
                  end={1.8}
                  duration={2.5}
                  decimal={1}
                />
              </div>
            </div>
          </div>
          <div className="language">
            <div className="txt_wrap">
              <div className="js_icon"></div>
              <div className="js_txt">Js</div>
            </div>
            <div className="js_percent_wrap">
              <div className="recipes_js_percent_bar bar"></div>
              <div className="recipes_js_percent_bar">
                <AnimatedCountUp
                  start={0}
                  end={97.2}
                  duration={2.5}
                  decimal={1}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <PjFooter />
    </div>
  )
}
export default Recipes;