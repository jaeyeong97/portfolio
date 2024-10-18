import { useEffect } from "react";
import PjHeader from "../projectHeader/PjHeader";
import PjFooter from "../projectFooter/PjFooter";
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
              <span className="t1">음성인식 검색 기능이 있는 레시피 웹사이트</span>
              <span className="t2">사용 기술: React, styled-components, Axios, React Query, react-speech-recognition</span>
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
            <div>• 개인 프로젝트</div>
            <div>• <span className="em">음성인식</span> 검색이 가능한 레시피 웹사이트입니다.</div>
          </div>
        </div>
      </section>
      <section>
        <h3 className="ex_title">📚사용 기술</h3>
        <div className="summary_txt">
          <div className="explain">
            <div>• <span className="cem">React</span> - 재사용과 유지보수를 하기 쉽도록 컴포넌트 구조로 UI를 제작하였습니다.</div>
            <div>• <span className="cem">Styled-Components</span> - 각 컴포넌트별로 독립적인 스타일을 적용하여 유지보수를 하기 쉽게 하였습니다.</div>
            <div>• <span className="cem">Axios</span> - 레시피 API 데이터를 비동기적으로 가져와 웹사이트에 표시하였습니다.</div>
            <div>• <span className="cem">React Query</span> - useQuery 훅을 통해 레시피 데이터를 가져오고, staleTime, cacheTime 등을 활용해 효율적인 데이터 및 캐시 관리를 하였습니다.</div>
            <div>• <span className="cem">react-speech-recognition</span> - 음성인식 라이브러리를 통해 사용자 음성을 인식하여 레시피를 검색할 수 있도록 구현하였습니다.</div>
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