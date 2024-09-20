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
              <span className="t1">음성인식 기능이 탑재된 레시피 웹사이트</span>
              <span className="t2">사용 기술: JSX, Styled-Components, JavaScript, React</span>
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
        <h3 className="ex_title">🏅프로젝트 개요</h3>
        <div className="summary_txt">
          <div className="explain">
            <div>• <span className="em">React</span> 개인 프로젝트</div>
            <div>• <span className="em">음성인식</span> 이 가능한 레시피 웹사이트</div>
          </div>
        </div>
      </section>
      <section className="section_function">
        <h3 className="ex_title">💻구현기능</h3>
        <div className="function_txt">
          <div className="explain">
            <div>• Web Speech API를 사용해 <span className="em">음성인식</span> 으로 레시피 검색 기능 구현</div>
            <div>• 레시피 <span className="em">카테고리</span> 를 만들어 종류별로 확인 가능</div>
            <div>• <span className="em">즐겨찾기</span> 기능 구현</div>
            <div>• <span className="em">페이지네이션</span> 기능 구현</div>
            <div>• <span className="em">Styled-Components</span> 를 사용해 컴포넌트별로 스타일 관리</div>
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
              <div className="css txt">CSS</div>
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
              <div className="js_txt">JS</div>
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
        <div className="to_project">
          <a href="https://jaeyeong97-speechnrecord.web.app/" target="_blank" rel="noreferrer">
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
export default Recipes;