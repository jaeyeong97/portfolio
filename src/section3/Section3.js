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
  }, []);

  return (
    <section id="section3">
      <h2 className="title" id="nav_projects">
        Projects
        <div className="underbar"></div>
      </h2>
      <div className="projects_wrap">
        <div className="row row1 row_odd">
          <div className="page_img">
            <img src="/assets/petdoc-frame.png" alt="펫닥 웹사이트 이미지" />
          </div>
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
              <span>• Geolocation API를 활용하여 사용자 위치 정보를 받아, 동물병원과의 거리 도출</span>
              <span>• 반려동물 추가, 수정, 삭제페이지 제작</span>
              <span>• 로딩페이지 제작</span>
              <span className="s_title">🚨문제점</span>
              <span>• '상담하기' 페이지에서, 상담 채팅 기록을 관리하는 함수에서 무한루프가 되는 오류 발생 </span>
              <span className="ss_title">🎯해결 방법</span>
              <span>• useEffect 훅을 사용하여, 의존성 배열에 상담버튼을 관리하는 상태변수를 넣어서 버튼의 상태가 변경될 때마다 채팅 기록이 업데이트되게 하였습니다. </span>
              <span className="ss_title">✨결과 및 알게된 점</span>
              <span>• useEffect의 의존성 배열을 올바르게 설정하는 것이 무한루프 오류를 방지하는데 중요하다는 점을 깨달았습니다.</span>
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
            <div className="eye_in1">
              <div className="eye_img"></div>
              <span>View Project</span>
            </div>
            <div className="eye_in2">
              <div className="eye_img"></div>
              <span>Click</span>
            </div>
          </div>
        </div>
        <div className="row row2 row_even">
          <div className="page_img">
            <img src="/assets/movie-frame.png" alt="영화 웹사이트 이미지" />
          </div>
          <div className="page_text">
            <div className="explain">
              <span className="title">2020년 ~ 2023년 흥행 영화 웹사이트</span>
              <span className="s_title">🏅프로젝트 개요</span>
              <span>• 2020년 ~ 2023년 흥행 한 영화의 정보를 확인 할 수 있는 웹사이트입니다.</span>
              <span>• 리액트로 구현하였습니다.</span>
              <span>• 개인 프로젝트</span>
              <span className="s_title">💻구현기능 </span>
              <span>• filter 메서드를 활용하여 각 년도 버튼을 클릭 시, 각 년도에 맞는 영화가 화면에 출력되게 하였습니다.  </span>
              <span>• 사용자가 리뷰를 10글자 이내로 작성 시, alert을 띄워 10글자 이상 작성하게 구현하였습니다.</span>
              <span>• onKeyDown 이벤트 핸들러를 사용하여, 사용자가 리뷰 작성 후 enter키를 누를 시에도 리뷰가 입력되게 하여 사용자 편의를 더하였습니다.</span>
              <span>• 영화의 평점에 따라 별 개수를 반환하는 함수를 만들어, 시각적으로 사용자가 평점을 확인하기 쉽게 하였습니다.</span>
              <span className="s_title">🚨문제점</span>
              <span>• 등록 된 리뷰가 길어 질 경우, 리뷰에 길이에 따라 스크롤 길이가 정해지는 문제점이 발생하였습니다.</span>
              <span className="ss_title">🎯해결 방법</span>
              <span>• 리뷰가 작성되는 섹션에 max-height 값을 넣고, overflow-y의 값으로 scroll을 주어서, 리뷰가 길어 질 경우, 리뷰 작성 영역에만 스크롤이 생기게 설정하였습니다.</span>
              <span className="ss_title">✨결과 및 알게된 점</span>
              <span>• CSS 속성을 활용하여 스크롤 관련 문제를 해결하는 방법을 익혔습니다.</span>
              <span>• 사용자 경험 측면에서 스크롤 제어가 중요하다는 점을 배웠습니다.</span>
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
            <div className="eye_in1">
              <div className="eye_img"></div>
              <span>View Project</span>
            </div>
            <div className="eye_in2">
              <div className="eye_img"></div>
              <span>Click</span>
            </div>
          </div>
        </div>
        <div className="row row3 row_odd">
          <div className="page_img">
            <img src="/assets/bbq-frame.png" alt="비비큐 웹사이트 이미지" />
          </div>
          <div className="page_text">
            <div className="explain">
              <span className="title">BBQ</span>
              <span className="s_title">🏅프로젝트 개요</span>
              <span>• 기존의 BBQ 웹사이트를 새롭게 디자인한 반응형 웹사이트입니다.</span>
              <span>• 메인페이지, 메뉴페이지를 제작하였습니다.</span>
              <span>• 개인 프로젝트</span>
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
            <div className="eye_in1">
              <div className="eye_img"></div>
              <span>View Project</span>
            </div>
            <div className="eye_in2">
              <div className="eye_img"></div>
              <span>Click</span>
            </div>
          </div>
        </div>
        <div className="row row4 row_even">
          <div className="page_img">
            <img src="/assets/ulsan-frame.png" alt="울산 웹사이트 이미지" />
          </div>
          <div className="page_text">
            <div className="explain">
              <span className="title">울산 관광 웹페이지</span>
              <span className="s_title">🏅프로젝트 개요</span>
              <span>• 기존의 울산 관광 웹사이트를 새롭게 디자인한 1680px 고정형 웹페이지입니다.</span>
              <span>• 개인 프로젝트</span>
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
            <div className="eye_in1">
              <div className="eye_img"></div>
              <span>View Project</span>
            </div>
            <div className="eye_in2">
              <div className="eye_img"></div>
              <span>Click</span>
            </div>
          </div>
        </div>
        <div className="row row5 row_odd">
          <div className="page_img">
            <img src="/assets/volvo-frame.png" alt="볼보 웹사이트 이미지" />
          </div>
          <div className="page_text">
            <div className="explain">
              <span className="title">Volvo</span>
              <span className="s_title">🏅프로젝트 개요</span>
              <span>• 기존의 볼보자동차 웹사이트를 새롭게 디자인한 1440px 고정형 웹사이트입니다.</span>
              <span>• 메인페이지, 모델페이지, 구매페이지를 제작하였습니다.</span>
              <span>• 개인 프로젝트</span>
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
            <div className="eye_in1">
              <div className="eye_img"></div>
              <span>View Project</span>
            </div>
            <div className="eye_in2">
              <div className="eye_img"></div>
              <span>Click</span>
            </div>
          </div>
        </div>
        <div className="row row6 row_even">
          <div className="page_img">
            <img
              src="/assets/bookstore-frame.png"
              alt="교보문고 웹사이트 이미지"
            />
          </div>
          <div className="page_text">
            <div className="explain">
              <span className="title">교보문고</span>
              <span className="s_title">🏅프로젝트 개요</span>
              <span>• 기존의 교보문고 도서리스트 페이지를 클론 코딩한 웹페이지입니다.</span>
              <span>• 개인 프로젝트</span>
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
            <div className="eye_in1">
              <div className="eye_img"></div>
              <span>View Project</span>
            </div>
            <div className="eye_in2">
              <div className="eye_img"></div>
              <span>Click</span>
            </div>
          </div>
        </div>
        <div className="row row7 row_odd">
          <div className="page_img"></div>
          <div className="page_text">
            <div className="explain">
              <span className="title">미술관</span>
              <span className="s_title">🏅프로젝트 개요</span>
              <span>• </span>
              <span>• 개인 프로젝트</span>
              <span className="s_title">💻구현기능 </span>
              <span>• </span>
              <span>• </span>
              <span className="s_title">🚨문제점</span>
              <span className="ss_title">문제 배경</span>
              <span>문제 배경 설명</span>
              <span className="ss_title">🎯해결 방법</span>
              <span>해결 방법 설명</span>
              <span className="ss_title">✨결과 및 알게된 점</span>
              <span> 결과 및 알게된 점 설명</span>
            </div>
            <div className="language_wrap">
              <div className="language">
                <div className="txt_wrap">
                  <div className="html_icon"></div>
                  <div className="html txt">Html</div>
                </div>
                <div className="html_percent_wrap">
                  <div className="html_percent_bar"></div>
                  <div className="html_percent_txt"></div>
                </div>
              </div>
              <div className="language">
                <div className="txt_wrap">
                  <div className="css_icon"></div>
                  <div className="css txt">Css</div>
                </div>
                <div className="css_percent_wrap">
                  <div className="css_percent_bar"></div>
                  <div className="css_percent_txt"></div>
                </div>
              </div>
              <div className="language">
                <div className="txt_wrap">
                  <div className="js_icon"></div>
                  <div className="js_txt">Js</div>
                </div>
                <div className="js_percent_wrap">
                  <div className="js_percent_bar"></div>
                  <div className="js_percent_txt"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="eye">
            <div className="eye_in1">
              <div className="eye_img"></div>
              <span>View Project</span>
            </div>
            <div className="eye_in2">
              <div className="eye_img"></div>
              <span>Click</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
