import React, { useEffect } from "react";
import "../section3/Section3.css";
import sr from "../components/ScrollReveal";
import AnimatedCountUp from "../components/AnimatedCountUp";

const Section3 = () => {
  useEffect(() => {
    // 프로젝트 스크롤 애니메이션
    sr.reveal(".row_odd", {
      origin: "right",
      duration: 1000,
      distance: "500px",
      interval: true,
    });
    sr.reveal(".row_even", {
      origin: "left",
      duration: 1000,
      distance: "500px",
      interval: true,
    });
    //프로젝트 퍼센트 바 애니메이션
    sr.reveal(".row1 .html_percent_bar", {
      duration: 1000,
      beforeReveal: (el) => {
        el.style.animation = "row1_html_percent 1s ease-out forwards";
      },
    });
    sr.reveal(".row1 .css_percent_bar", {
      duration: 1000,
      beforeReveal: (el) => {
        el.style.animation = "row1_css_percent 1s ease-out forwards";
      },
    });
    sr.reveal(".row1 .js_percent_bar", {
      duration: 1000,
      beforeReveal: (el) => {
        el.style.animation = "row1_js_percent 1s ease-out forwards";
      },
    });
    sr.reveal(".row2 .html_percent_bar", {
      duration: 1000,
      beforeReveal: (el) => {
        el.style.animation = "row2_html_percent 1s ease-out forwards";
      },
    });
    sr.reveal(".row2 .css_percent_bar", {
      duration: 1000,
      beforeReveal: (el) => {
        el.style.animation = "row2_css_percent 1s ease-out forwards";
      },
    });
    sr.reveal(".row2 .js_percent_bar", {
      duration: 1000,
      beforeReveal: (el) => {
        el.style.animation = "row2_js_percent 1s ease-out forwards";
      },
    });
    sr.reveal(".row3 .html_percent_bar", {
      duration: 1000,
      beforeReveal: (el) => {
        el.style.animation = "row3_html_percent 1s ease-out forwards";
      },
    });
    sr.reveal(".row3 .css_percent_bar", {
      duration: 1000,
      beforeReveal: (el) => {
        el.style.animation = "row3_css_percent 1s ease-out forwards";
      },
    });
    sr.reveal(".row3 .js_percent_bar", {
      duration: 1000,
      beforeReveal: (el) => {
        el.style.animation = "row3_js_percent 1s ease-out forwards";
      },
    });
    sr.reveal(".row4 .html_percent_bar", {
      duration: 1000,
      beforeReveal: (el) => {
        el.style.animation = "row4_html_percent 1s ease-out forwards";
      },
    });
    sr.reveal(".row4 .css_percent_bar", {
      duration: 1000,
      beforeReveal: (el) => {
        el.style.animation = "row4_css_percent 1s ease-out forwards";
      },
    });
    sr.reveal(".row4 .js_percent_bar", {
      duration: 1000,
      beforeReveal: (el) => {
        el.style.animation = "row4_js_percent 1s ease-out forwards";
      },
    });
    sr.reveal(".row5 .html_percent_bar", {
      duration: 1000,
      beforeReveal: (el) => {
        el.style.animation = "row5_html_percent 1s ease-out forwards";
      },
    });
    sr.reveal(".row5 .css_percent_bar", {
      duration: 1000,
      beforeReveal: (el) => {
        el.style.animation = "row5_css_percent 1s ease-out forwards";
      },
    });
    sr.reveal(".row5 .js_percent_bar", {
      duration: 1000,
      beforeReveal: (el) => {
        el.style.animation = "row5_js_percent 1s ease-out forwards";
      },
    });
    sr.reveal(".row6 .html_percent_bar", {
      duration: 1000,
      beforeReveal: (el) => {
        el.style.animation = "row6_html_percent 1s ease-out forwards";
      },
    });
    sr.reveal(".row6 .css_percent_bar", {
      duration: 1000,
      beforeReveal: (el) => {
        el.style.animation = "row6_css_percent 1s ease-out forwards";
      },
    });
    sr.reveal(".row6 .js_percent_bar", {
      duration: 1000,
      beforeReveal: (el) => {
        el.style.animation = "row6_js_percent 1s ease-out forwards";
      },
    });
    sr.reveal(".row7 .html_percent_bar", {
      duration: 1000,
      beforeReveal: (el) => {
        el.style.animation = "row7_html_percent 1s ease-out forwards";
      },
    });
    sr.reveal(".row7 .css_percent_bar", {
      duration: 1000,
      beforeReveal: (el) => {
        el.style.animation = "row7_css_percent 1s ease-out forwards";
      },
    });
    sr.reveal(".row7 .js_percent_bar", {
      duration: 1000,
      beforeReveal: (el) => {
        el.style.animation = "row7_js_percent 1s ease-out forwards";
      },
    });
    sr.reveal(".row8 .html_percent_bar", {
      duration: 1000,
      beforeReveal: (el) => {
        el.style.animation = "row8_html_percent 1s ease-out forwards";
      },
    });
    sr.reveal(".row8 .css_percent_bar", {
      duration: 1000,
      beforeReveal: (el) => {
        el.style.animation = "row8_css_percent 1s ease-out forwards";
      },
    });
    sr.reveal(".row8 .js_percent_bar", {
      duration: 1000,
      beforeReveal: (el) => {
        el.style.animation = "row8_js_percent 1s ease-out forwards";
      },
    });
  }, []);

  return (
    <section id="section3">
      <h2 className="title" id="nav_projects">
        Projects
        <div className="underbar"></div>
      </h2>
      <div className="projects_wrap">
        <div className="row row1 row_odd">
          <a href="https://jaeyeong97-petdoc.web.app/" target="_blank" rel="noreferrer">
            <div className="page_img">
              <img src="/assets/petdoc-frame.png" alt="펫닥 웹사이트 이미지" />
            </div>
          </a>
          <div className="page_text">
            <div className="explain">
              <span className="title">Petdoc</span>
              <span className="s_title">🏅프로젝트 개요</span>
              <span>• React로 개발한 반려동물 병원 예약 앱 Petdoc입니다.</span>
              <span>• 팀프로젝트 총 4명 </span>
              <span className="s_title">💻구현기능 </span>
              <span>• NaverMap API를 활용하여 지도에 동물병원 위치 추가</span>
              <span>• 사용자 위치와 동물병원과의 거리 도출</span>
              <span>• 전화걸기 기능 구현</span>
              <span>• 날짜별로 반려동물 증상을 저장할 수 있는 기능 구현</span>
              <span>• 반려동물 추가, 수정, 삭제 기능 구현</span>
              <span>• 동물병원명 검색기능 구현</span>
              <span>• 동물병원 예약 정보 화면에 추가 </span>
              <span className="s_title">🙋‍♂️내가 기여한 부분</span>
              <span>• '상담하기' 페이지 전체 구현</span>
              <span>• 검색창 검색 기능 구현</span>
              <span>• NaverMap API로 지도 제작 및 마커기능 구현</span>
              <span>• 전화하기 기능 구현</span>
              <span>• 실시간을 기준으로 '영업중', '영업종료' 기능 구현</span>
              <span>
                • Geolocation API를 활용하여 사용자 위치 정보를 받아,
                동물병원과의 거리 도출
              </span>
              <span>• 반려동물 추가, 수정, 삭제페이지 제작</span>
              <span>• 로딩페이지 제작</span>
              <span className="s_title">🚨문제점</span>
              <span>
                • '상담하기' 페이지에서, 상담 채팅 기록을 관리하는 함수에서
                무한루프가 되는 오류 발생{" "}
              </span>
              <span className="ss_title">🎯해결 방법</span>
              <span>
                • useEffect 훅을 사용하여, 의존성 배열에 상담버튼을 관리하는
                상태변수를 넣어서 버튼의 상태가 변경될 때마다 채팅 기록이
                업데이트되게 하였습니다.{" "}
              </span>
              <span className="ss_title">✨결과 및 알게된 점</span>
              <span>
                • useEffect의 의존성 배열을 올바르게 설정하는 것이 무한루프
                오류를 방지하는데 중요하다는 점을 깨달았습니다.
              </span>
              <span className="ss_title">📊언어 사용 비율</span>
            </div>
            <div className="language_wrap">
              <div className="language">
                <div className="txt_wrap">
                  <div className="html_icon"></div>
                  <div className="html txt">Html</div>
                </div>
                <div className="html_percent_wrap">
                  <div className="html_percent_bar"></div>
                  <div className="html_percent_txt">
                    <AnimatedCountUp
                      start={0}
                      end={18.3}
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
                  <div className="css_percent_bar"></div>
                  <div className="css_percent_txt">
                    <AnimatedCountUp
                      start={0}
                      end={37.7}
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
                  <div className="js_percent_bar"></div>
                  <div className="js_percent_txt">
                    <AnimatedCountUp
                      start={0}
                      end={44.0}
                      duration={2.5}
                      decimal={1}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="eye">
            <a href="https://jaeyeong97-petdoc.web.app/" target="_blank" rel="noreferrer">
              <div className="eye_in1">
                <div className="eye_img"></div>
                <span>View Project</span>
              </div>
              <div className="eye_in2">
                <div className="eye_img"></div>
                <span>Click</span>
              </div>
            </a>
          </div>
        </div>
        <div className="row row2 row_even">
          <a href="https://jaeyeong97-speechnrecord.web.app/" target="_blank" rel="noreferrer">
            <div className="page_img">
              <img src="/assets/recipes-frame.png" alt="레시피 웹사이트 이미지" />
            </div>
          </a>
          <div className="page_text">
            <div className="explain">
              <span className="title">레시피 파인더</span>
              <span className="s_title">🏅프로젝트 개요</span>
              <span>• 음성인식 기능을 활용하여 레시피를 찾을 수 있는 웹사이트입니다.</span>
              <span>• React로 구현</span>
              <span>• 개인 프로젝트</span>
              <span className="s_title">💻구현기능 </span>
              <span>
                • Web Speech API를 활용하여 음성인식으로 레시피 이름을 찾을 수 있게 구현하였습니다.
              </span>
              <span>
                • 무한 스크롤을 구현하여 api로 가져온 레시피 메뉴가 한번에 24개씩 출력되도록 하였습니다.
              </span>
              <span>
                • 검색창을 만들어 레시피명, 재료명에 맞게 검색 기능을 구현하였습니다.
              </span>
              <span className="ss_title">📊언어 사용 비율</span>
            </div>
            <div className="language_wrap">
              <div className="language">
                <div className="txt_wrap">
                  <div className="html_icon"></div>
                  <div className="html txt">Html</div>
                </div>
                <div className="html_percent_wrap">
                  <div className="html_percent_bar"></div>
                  <div className="html_percent_txt">
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
                  <div className="css_percent_bar"></div>
                  <div className="css_percent_txt">
                    <AnimatedCountUp
                      start={0}
                      end={11.7}
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
                  <div className="js_percent_bar"></div>
                  <div className="js_percent_txt">
                    <AnimatedCountUp
                      start={0}
                      end={87.3}
                      duration={2.5}
                      decimal={1}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="eye">
            <a
              href="https://jaeyeong97-speechnrecord.web.app/"
              target="_blank" rel="noreferrer"
            >
              <div className="eye_in1">
                <div className="eye_img"></div>
                <span>View Project</span>
              </div>
              <div className="eye_in2">
                <div className="eye_img"></div>
                <span>Click</span>
              </div>
            </a>
          </div>
        </div>
        <div className="row row3 row_odd">
          <a href="https://jaeyeong97-3d-gallery-44701.web.app" target="_blank" rel="noreferrer">
            <div className="page_img">
              <img src="/assets/gallery-frame.png" alt="3d-갤러리 웹 이미지" />
            </div>
          </a>
          <div className="page_text">
            <div className="explain">
              <span className="title">3D Gallery Web</span>
              <span className="s_title">🏅프로젝트 개요</span>
              <span>• 사진 전시회 웹 페이지입니다.</span>
              <span>• React로 구현</span>
              <span>• 개인 프로젝트</span>
              <span className="s_title">💻구현기능 </span>
              <span>
                • CSS 속성인 transform-style: preserve-3d을 활용하여 입체적인 공간을
                구현하였습니다.
              </span>
              <span>
                • fetch 함수를 사용하여 사진 API 데이터를 가져오고, async와
                await을 활용하여 비동기적으로 데이터를 처리하였습니다.
              </span>
              <span>
                • 스위치 클릭 시, background-color값을 어둡게줘서 전등을 끈 듯한
                느낌을 주었습니다.
              </span>
              <span>
                • 기둥에 있는 버튼 클릭 시, 사진이 변경되게 하였습니다.
              </span>
              <span className="ss_title">📊언어 사용 비율</span>
            </div>
            <div className="language_wrap">
              <div className="language">
                <div className="txt_wrap">
                  <div className="html_icon"></div>
                  <div className="html txt">Html</div>
                </div>
                <div className="html_percent_wrap">
                  <div className="html_percent_bar"></div>
                  <div className="html_percent_txt">
                    <AnimatedCountUp
                      start={0}
                      end={17.8}
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
                  <div className="css_percent_bar"></div>
                  <div className="css_percent_txt">
                    <AnimatedCountUp
                      start={0}
                      end={76.9}
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
                  <div className="js_percent_bar"></div>
                  <div className="js_percent_txt">
                    <AnimatedCountUp
                      start={0}
                      end={5.3}
                      duration={2.5}
                      decimal={1}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="eye">
            <a
              href="https://jaeyeong97-3d-gallery-44701.web.app"
              target="_blank" rel="noreferrer"
            >
              <div className="eye_in1">
                <div className="eye_img"></div>
                <span>View Project</span>
              </div>
              <div className="eye_in2">
                <div className="eye_img"></div>
                <span>Click</span>
              </div>
            </a>
          </div>
        </div>
        <div className="row row4 row_even">
          <a href="https://jaeyeong97-bbq.netlify.app/" target="_blank" rel="noreferrer">
            <div className="page_img">
              <img src="/assets/bbq-frame.png" alt="비비큐 웹사이트 이미지" />
            </div>
          </a>
          <div className="page_text">
            <div className="explain">
              <span className="title">BBQ</span>
              <span className="s_title">🏅프로젝트 개요</span>
              <span>
                • 기존의 BBQ 웹사이트를 새롭게 디자인한 반응형 웹사이트입니다.
              </span>
              <span>• 메인페이지, 메뉴페이지를 제작하였습니다.</span>
              <span>• 개인 프로젝트</span>
              <span className="s_title">🚩프로젝트 목적</span>
              <span>• 기존 웹사이트 보다 더 현대적이고 사용자 친화적인 디자인을 구현</span>
              <span className="s_title">👀변경된 부분</span>
              <span>• 반응형 디자인을 적용하여 사용자의 디바이스에 맞는 적절한 화면 구성을 하였습니다.</span>
              <span>• 메인슬라이더 영역에 커서 이미지를 추가하고, CSS에서 keyframes를 이용하여 애니메이션을 추가해 사용자에게 시각적 흥미를 주었습니다.</span>
              <span>• 다른 치킨 브랜드 웹사이트를 참고하여 BBQ 웹사이트에서 부족하다고 생각되는 부분을 추가하였습니다.</span>
              <span className="s_title">✨결과 및 알게된 점</span>
              <span>• 이 프로젝트를 통해 다양한 웹사이트들의 구조를 학습할 수 있었습니다.</span>
              <span>• 반응형 웹사이트 디자인에 대한 실전 경험을 쌓을 수 있었습니다.</span>
              <span className="ss_title">📊언어 사용 비율</span>
            </div>
            <div className="language_wrap">
              <div className="language">
                <div className="txt_wrap">
                  <div className="html_icon"></div>
                  <div className="html txt">Html</div>
                </div>
                <div className="html_percent_wrap">
                  <div className="html_percent_bar"></div>
                  <div className="html_percent_txt">
                    <AnimatedCountUp
                      start={0}
                      end={64}
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
                  <div className="css_percent_bar"></div>
                  <div className="css_percent_txt">
                    <AnimatedCountUp
                      start={0}
                      end={31.9}
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
                  <div className="js_percent_bar"></div>
                  <div className="js_percent_txt">
                    <AnimatedCountUp
                      start={0}
                      end={4.1}
                      duration={2.5}
                      decimal={1}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="eye">
            <a href="https://jaeyeong97-bbq.netlify.app/" target="_blank" rel="noreferrer">
              <div className="eye_in1">
                <div className="eye_img"></div>
                <span>View Project</span>
              </div>
              <div className="eye_in2">
                <div className="eye_img"></div>
                <span>Click</span>
              </div>
            </a>
          </div>
        </div>
        <div className="row row5 row_odd">
          <a href="https://jaeyeong97-movie-web.web.app/" target="_blank" rel="noreferrer">
            <div className="page_img">
              <img src="/assets/movie-frame.png" alt="영화 웹사이트 이미지" />
            </div>
          </a>
          <div className="page_text">
            <div className="explain">
              <span className="title">2020년 ~ 2023년 흥행 영화 웹사이트</span>
              <span className="s_title">🏅프로젝트 개요</span>
              <span>
                • 2020년 ~ 2023년 흥행 한 영화의 정보를 확인 할 수 있는
                웹사이트입니다.
              </span>
              <span>• React로 구현</span>
              <span>• 개인 프로젝트</span>
              <span className="s_title">💻구현기능 </span>
              <span>
                • filter 메서드를 활용하여 각 년도 버튼을 클릭 시, 각 년도에
                맞는 영화가 화면에 출력되게 하였습니다.
              </span>
              <span>
                • 사용자가 리뷰를 10글자 이내로 작성 시, alert을 띄워 10글자
                이상 작성하게 구현하였습니다.
              </span>
              <span>
                • onKeyDown 이벤트 핸들러를 사용하여, 사용자가 리뷰 작성 후
                enter키를 누를 시에도 리뷰가 입력되게 하여 사용자 편의를
                더하였습니다.
              </span>
              <span>
                • 영화의 평점에 따라 별 개수를 반환하는 함수를 만들어,
                시각적으로 사용자가 평점을 확인하기 쉽게 하였습니다.
              </span>
              <span className="s_title">🚨문제점</span>
              <span>
                • 등록 된 리뷰가 길어 질 경우, 리뷰에 길이에 따라 스크롤 길이가
                정해지는 문제점이 발생하였습니다.
              </span>
              <span className="ss_title">🎯해결 방법</span>
              <span>
                • 리뷰가 작성되는 섹션에 max-height 값을 넣고, overflow-y의
                값으로 scroll을 주어서, 리뷰가 길어 질 경우, 리뷰 작성 영역에만
                스크롤이 생기게 설정하였습니다.
              </span>
              <span className="ss_title">✨결과 및 알게된 점</span>
              <span>
                • CSS 속성을 활용하여 스크롤 관련 문제를 해결하는 방법을
                익혔습니다.
              </span>
              <span>
                • 사용자 경험 측면에서 스크롤 제어가 중요하다는 점을 배웠습니다.
              </span>
              <span className="ss_title">📊언어 사용 비율</span>
            </div>
            <div className="language_wrap">
              <div className="language">
                <div className="txt_wrap">
                  <div className="html_icon"></div>
                  <div className="html txt">Html</div>
                </div>
                <div className="html_percent_wrap">
                  <div className="html_percent_bar"></div>
                  <div className="html_percent_txt">
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
                  <div className="css_percent_bar"></div>
                  <div className="css_percent_txt">
                    <AnimatedCountUp
                      start={0}
                      end={9.6}
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
                  <div className="js_percent_bar"></div>
                  <div className="js_percent_txt">
                    <AnimatedCountUp
                      start={0}
                      end={89.4}
                      duration={2.5}
                      decimal={1}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="eye">
            <a href="https://jaeyeong97-movie-web.web.app/" target="_blank" rel="noreferrer">
              <div className="eye_in1">
                <div className="eye_img"></div>
                <span>View Project</span>
              </div>
              <div className="eye_in2">
                <div className="eye_img"></div>
                <span>Click</span>
              </div>
            </a>
          </div>
        </div>
        <div className="row row6 row_even">
          <a href="https://jaeyeong97-ulsan-web.netlify.app/" target="_blank" rel="noreferrer">
            <div className="page_img">
              <img src="/assets/ulsan-frame.png" alt="울산 웹사이트 이미지" />
            </div>
          </a>
          <div className="page_text">
            <div className="explain">
              <span className="title">울산 관광 웹페이지</span>
              <span className="s_title">🏅프로젝트 개요</span>
              <span>
                • 기존의 울산 관광 웹사이트를 새롭게 디자인한 1680px 고정형
                웹페이지입니다.
              </span>
              <span>• 개인 프로젝트</span>
              <span className="s_title">🚩프로젝트 목적</span>
              <span>
                • 울산 광광 웹사이트를 이용하는 사용자들에게 다양하고 직관적인
                디자인을 추가하여, 더 나은 경험을 제공하는 것
              </span>
              <span className="s_title">👀변경된 부분</span>
              <span>
                • 메인페이지에서 사용자가 원하는 정보를 쉽게 찾을 수 있게 정보를
                담았습니다.
              </span>
              <span>
                • 사용자가 원하는 컨셉에 맞는 여행지를 추천할 수 있게 목차를
                분류하여, 사용자가 선택 할 수 있게 하였습니다.
              </span>
              <span>
                • 각 구역별 추천 여행지 섹션을 만들어, 사용자가 원하는 구역의
                여행지들을 볼 수 있게 하였습니다.
              </span>
              <span>
                • 이번주 행사, 이달의 축제 등 최신의 정보들을 확인 할 수 있도록
                하였습니다.
              </span>
              <span className="s_title">✨결과 및 알게된 점</span>
              <span>
                • 이 프로젝트를 통해 다양한 디자인 컨셉과 사용자 경험 개선에
                대한 스킬을 향상시킬 수 있었습니다.
              </span>
              <span className="ss_title">📊언어 사용 비율</span>
            </div>
            <div className="language_wrap">
              <div className="language">
                <div className="txt_wrap">
                  <div className="html_icon"></div>
                  <div className="html txt">Html</div>
                </div>
                <div className="html_percent_wrap">
                  <div className="html_percent_bar"></div>
                  <div className="html_percent_txt">
                    <AnimatedCountUp
                      start={0}
                      end={55.9}
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
                  <div className="css_percent_bar"></div>
                  <div className="css_percent_txt">
                    <AnimatedCountUp
                      start={0}
                      end={39.6}
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
                  <div className="js_percent_bar"></div>
                  <div className="js_percent_txt">
                    <AnimatedCountUp
                      start={0}
                      end={4.5}
                      duration={2.5}
                      decimal={1}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="eye">
            <a href="https://jaeyeong97-ulsan-web.netlify.app/" target="_blank" rel="noreferrer">
              <div className="eye_in1">
                <div className="eye_img"></div>
                <span>View Project</span>
              </div>
              <div className="eye_in2">
                <div className="eye_img"></div>
                <span>Click</span>
              </div>
            </a>
          </div>
        </div>
        <div className="row row7 row_odd">
          <a href="https://jaeyeong97-volvo.netlify.app/" target="_blank" rel="noreferrer">
            <div className="page_img">
              <img src="/assets/volvo-frame.png" alt="볼보 웹사이트 이미지" />
            </div>
          </a>
          <div className="page_text">
            <div className="explain">
              <span className="title">Volvo</span>
              <span className="s_title">🏅프로젝트 개요</span>
              <span>
                • 기존의 볼보자동차 웹사이트를 새롭게 디자인한 1440px 고정형
                웹사이트입니다.
              </span>
              <span>
                • 메인페이지, 모델페이지, 구매페이지를 제작하였습니다.
              </span>
              <span>• 개인 프로젝트</span>
              <span className="s_title">🚩프로젝트 목적</span>
              <span>• 기존 웹사이트를 친숙한 구조로 변경하여 사용자에게 친화적이고 익숙하게 웹사이트를 사용할 수 있게 만드는 것</span>
              <span className="s_title">👀변경된 부분</span>
              <span>• 헤더에 gnb를 추가하여 사용자가 원하는 메뉴를 한눈에 볼 수 있게 수정하였습니다.</span>
              <span>• 인기있는 모델을 볼 수 있는 섹션을 만들어, 사용자가 어떤 모델이 인기있는지 트렌드를 쉽게 알 수 있게 하였습니다.</span>
              <span>• 메인페이지에 견적내기, 구매상담, 시승신청, 전시장검색 아이콘을 추가하여 사용자 편의를 더하였습니다.</span>
              <span className="s_title">✨결과 및 알게된 점</span>
              <span>• 사용자의 접근성에 맞게 메인페이지 구성을 변경할 수 있었습니다.</span>
              <span>• 사용자가 원하는게 무엇인지 파악하고 메인페이지를 구성하는것이 접근성에 도움이 된다는 것을 배웠습니다.</span>
              <span className="ss_title">📊언어 사용 비율</span>
            </div>
            <div className="language_wrap">
              <div className="language">
                <div className="txt_wrap">
                  <div className="html_icon"></div>
                  <div className="html txt">Html</div>
                </div>
                <div className="html_percent_wrap">
                  <div className="html_percent_bar"></div>
                  <div className="html_percent_txt">
                    <AnimatedCountUp
                      start={0}
                      end={72.0}
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
                  <div className="css_percent_bar"></div>
                  <div className="css_percent_txt">
                    <AnimatedCountUp
                      start={0}
                      end={27.3}
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
                  <div className="js_percent_bar"></div>
                  <div className="js_percent_txt">
                    <AnimatedCountUp
                      start={0}
                      end={0.7}
                      duration={2.5}
                      decimal={1}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="eye">
            <a href="https://jaeyeong97-volvo.netlify.app/" target="_blank" rel="noreferrer">
              <div className="eye_in1">
                <div className="eye_img"></div>
                <span>View Project</span>
              </div>
              <div className="eye_in2">
                <div className="eye_img"></div>
                <span>Click</span>
              </div>
            </a>
          </div>
        </div>
        <div className="row row8 row_even">
          <a href="https://jaeyeong97-bookstore.netlify.app/" target="_blank" rel="noreferrer">
            <div className="page_img">
              <img
                src="/assets/bookstore-frame.png"
                alt="교보문고 웹사이트 이미지"
              />
            </div>
          </a>
          <div className="page_text">
            <div className="explain">
              <span className="title">교보문고</span>
              <span className="s_title">🏅프로젝트 개요</span>
              <span>
                • 기존의 교보문고 도서리스트 페이지를 반응형으로 제작한 웹페이지입니다.
              </span>
              <span>• 개인 프로젝트</span>
              <span className="s_title">🚩프로젝트 목적</span>
              <span>• 기존 교보문고 도서리스트 페이지를 카피함으로써, 웹 디자인과 구현에 대한 학습과 연습을 목표로 했습니다.</span>
              <span>• 사용자 중심의 디자인을 이해하고 적용하는 과정에서 실력을 향상시키는 것이 목적이었습니다.</span>
              <span className="s_title">👀변경된 부분</span>
              <span>• 기존 웹페이지가 반응형이 아니여서, 새롭게 반응형 디자인을 추가하여 다양한 디바이스에서도 불편함 없이 도서리스트를 볼 수 있도록 추가하였습니다.</span>
              <span className="s_title">✨결과 및 알게된 점</span>
              <span>• 기존 디자인을 코드로 옮기면서 HTML, CSS, JavaScript 등 프론트엔드 언어에 대한 익숙함을 향상시킬 수 있었습니다.</span>
              <span>•</span>
              <span className="ss_title">📊언어 사용 비율</span>
            </div>
            <div className="language_wrap">
              <div className="language">
                <div className="txt_wrap">
                  <div className="html_icon"></div>
                  <div className="html txt">Html</div>
                </div>
                <div className="html_percent_wrap">
                  <div className="html_percent_bar"></div>
                  <div className="html_percent_txt">
                    <AnimatedCountUp
                      start={0}
                      end={66.5}
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
                  <div className="css_percent_bar"></div>
                  <div className="css_percent_txt">
                    <AnimatedCountUp
                      start={0}
                      end={26.1}
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
                  <div className="js_percent_bar"></div>
                  <div className="js_percent_txt">
                    <AnimatedCountUp
                      start={0}
                      end={7.4}
                      duration={2.5}
                      decimal={1}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="eye">
            <a href="https://jaeyeong97-bookstore.netlify.app/" target="_blank" rel="noreferrer">
              <div className="eye_in1">
                <div className="eye_img"></div>
                <span>View Project</span>
              </div>
              <div className="eye_in2">
                <div className="eye_img"></div>
                <span>Click</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
