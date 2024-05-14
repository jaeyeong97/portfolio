import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import PjHeader from "../projectHeader/PjHeader";
import PjFooter from "../projectFooter/PjFooter";
import '../projectPages/ProjectCommon.css'
import sr from "../../util/ScrollReveal";
import AnimatedCountUp from "../../util/AnimatedCountUp";
const Petdoc = () => {
  const [toggle1, setToggle1] = useState(false); // 상담 페이지 토글
  const [toggle2, setToggle2] = useState(false); // 로딩 페이지 토글
  const [toggle3, setToggle3] = useState(false); // 검색 페이지 토글
  const [toggle4, setToggle4] = useState(false); // 반려동물 추가/수정 페이지 토글
  const [toggle5, setToggle5] = useState(false); // 즐겨찾기 페이지 토글
  const [toggle6, setToggle6] = useState(false); // 지도 페이지 토글

  const handleClick1 = () => {
    setToggle1(!toggle1);
  }
  const handleClick2 = () => {
    setToggle2(!toggle2);
  }
  const handleClick3 = () => {
    setToggle3(!toggle3);
  }
  const handleClick4 = () => {
    setToggle4(!toggle4);
  }
  const handleClick5 = () => {
    setToggle5(!toggle5);
  }
  const handleClick6 = () => {
    setToggle6(!toggle6);
  }

  useEffect(() => {
    // 페이지 이동 후 스크롤을 최상단으로
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // 프로젝트 스크롤 애니메이션
    // sr.reveal(".row_odd", {
    //     origin: "right",
    //     duration: 1000,
    //     distance: "500px",
    //     interval: true,
    // });
    // sr.reveal(".row_even", {
    //     origin: "left",
    //     duration: 1000,
    //     distance: "500px",
    //     interval: true,
    // });

    //프로젝트 퍼센트 바 애니메이션
    sr.reveal(".petdoc_html_percent_bar", {
      duration: 1000,
      beforeReveal: (el) => {
        el.style.animation = "petdoc_html_percent 1s ease-out forwards";
      },
    });
    sr.reveal(".petdoc_css_percent_bar", {
      duration: 1000,
      beforeReveal: (el) => {
        el.style.animation = "petdoc_css_percent 1s ease-out forwards";
      },
    });
    sr.reveal(".petdoc_js_percent_bar", {
      duration: 1000,
      beforeReveal: (el) => {
        el.style.animation = "petdoc_js_percent 1s ease-out forwards";
      },
    });
  }, []);
  return (
    <div className="petdoc components_wrap" id="pj_top">
      <PjHeader />
      <main className="main">
        <div className="main_img">펫닥 메인 이미지</div>
        <div className="main_txt_wrap_center">
          <div className="main_txt_wrap">
            <div className="main_txt">
              <h2 className="title">petdoc</h2>
              <span className="t1">반려 동물 병원 예약 웹 사이트</span>
              <span className="t2">사용 기술: HTML, CSS, JavaScript, React</span>
              <div className="t3">깃허브 주소:&nbsp;<a href="https://github.com/jaeyeong97/petdoc" target="_blank" rel="noreferrer">github.com/jaeyeong97/petdoc</a>
                <span className="material-symbols-outlined open">
                  open_in_new
                </span>
              </div>
            </div>
            <div className="eye">
              <a href="https://jaeyeong97-petdoc.web.app/" target="_blank" rel="noreferrer">
                <div className="eye_in1">
                  <div className="eye_img">
                    <span className="material-symbols-outlined eye_icon">
                      visibility
                    </span>
                  </div>
                  <span>View Project</span>
                </div>
                <div className="eye_in2">
                  <div className="eye_img"></div>
                  <span>Click!</span>
                </div>
              </a>
            </div>
            <Link to="section_start" smooth={true} offset={-90}>
              <span class="material-symbols-outlined arrow_down">
                expand_more
              </span>
            </Link>
          </div>
        </div>
      </main>
      <section className="section_summary" id="section_start">
        <h3 className="ex_title">개요</h3>
        <div className="loading_txt">
          <div className="explain">
            <span>• 팀 프로젝트 &lt;프론트엔드 4명&gt;</span>
            <span>• 반려동물 병원 예약 웹 사이트로써, 반려동물 소유자들이 편리하게 병원 진료 예약 및 반려동물의 건강 기록을 관리할 수 있는 플랫폼입니다.</span>
          </div>
        </div>
      </section>
      <section className="section_petdoc_explain1">
        <h3 className="ex_title">내가 기여한 부분</h3>
        <div className="img_wrap">
          <div className="w">
            <img src="/assets/petdoc_consult.gif" alt="펫닥 상담 페이지" />
            <span>&lt;상담 페이지&gt;</span>
          </div>
          <div className="w">
            <img src="/assets/petdoc_loading.png" alt="펫닥 로딩 페이지" />
            <span>&lt;로딩 페이지&gt;</span>
          </div>
          <div className="w">
            <img src="/assets/petdoc_search.gif" alt="펫닥 검색 페이지" />
            <span>&lt;검색 페이지&gt;</span>
          </div>
        </div>
        <div className="explain1_txt">
          <div className="explain">
            <div className="span_wrap" onClick={handleClick1}>
              <span className={`material-symbols-outlined arrow ${toggle1 ? 'rotate' : ''}`}>
                arrow_right
              </span>
              <span>상담 페이지</span>
            </div>
            <div className={`img_wrap ${toggle1 ? 'show' : 'hide'}`}>
              <div className="ani_wrap">
                <span className="ani_title">- 각 버튼 클릭시 주제에 맞는 답변이 나오게 구현하였습니다.</span>
                <h3>🚨문제점</h3>
                <span>- 상담 채팅 기록을 관리하는 함수에서 무한루프가 되는 오류 발생</span>
                <h3>🎯해결 방법</h3>
                <span>- useEffect 훅을 사용하여, 의존성 배열에 상담버튼을 관리하는 상태변수를 넣어서 버튼
                  의 상태가 변경될 때마다 채팅 기록이 업데이트되게 하였습니다.</span>
                <h3>✨결과 및 알게된 점</h3>
                <span>- useEffect의 의존성 배열을 올바르게 설정하는 것이 무한루프 오류를 방지하는데 중요
                  하다는 점을 깨달았습니다.</span>
              </div>
            </div>
            <div className="span_wrap" onClick={handleClick2}>
              <span className={`material-symbols-outlined arrow ${toggle2 ? 'rotate' : ''}`}>
                arrow_right
              </span>
              <span>로딩 페이지</span>
            </div>
            <div className={`img_wrap ${toggle2 ? 'show' : 'hide'}`}>
              <div className="ani_wrap">
                <span>- setTimeout 함수를 사용해 2초동안 로딩페이지가 출력되게 하였습니다.</span>
                <img src="/assets/loading_code.png" alt="로딩 코드" />
              </div>
            </div>
            <div className="span_wrap" onClick={handleClick3}>
              <span className={`material-symbols-outlined arrow ${toggle3 ? 'rotate' : ''}`}>
                arrow_right
              </span>
              <span>검색 페이지</span>
            </div>
            <div className={`img_wrap ${toggle3 ? 'show' : 'hide'}`}>
              <div className="ani_wrap">
                <span>- 병원 목록에서 검색 기능을 구현하였습니다.</span>
                <span>- filter 메서드를 활용하여 사용자가 입력한 검색어에 따라 병원 목록을 필터링합니다.</span>
                <span>- 검색어는 병원 이름에 포함되는지 확인하여 결과를 반환하도록 구현하였습니다.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section_petdoc_explain2">
        <div className="img_wrap">
          <div className="w">
            <img src="/assets/petdoc_edit.gif" alt="펫닥 반려동물 수정 페이지" />
            <span>&lt;반려동물 수정 페이지&gt;</span>
          </div>
          <div className="w">
            <img src="/assets/petdoc_bookmark.png" alt="펫닥 즐겨찾기 페이지" />
            <span>&lt;즐겨찾기 페이지&gt;</span>
          </div>
          <div className="w">
            <img src="/assets/petdoc_map.gif" alt="펫닥 지도 페이지" />
            <span>&lt;지도 페이지&gt;</span>
          </div>
        </div>
        <div className="explain1_txt">
          <div className="explain">
            <div className="span_wrap" onClick={handleClick4}>
              <span className={`material-symbols-outlined arrow ${toggle4 ? 'rotate' : ''}`}>
                arrow_right
              </span>
              <span>반려동물 추가/수정 페이지</span>
            </div>
            <div className={`img_wrap ${toggle4 ? 'show' : 'hide'}`}>
              <div className="ani_wrap">
                <span>- 반려동물을 추가하고 수정할 수 있는 페이지를 개발하였습니다.</span>
                <span>- 또한 등록된 반려동물 정보를 수정할 수도 있습니다.</span>
                <span>- 사용자는 반려동물의 종, 이름, 성별, 생일, 몸무게, 질병 정보 등을 입력하고 이미지를 업로드할 수 있습니다.</span>
              </div>
            </div>
            <div className="span_wrap" onClick={handleClick5}>
              <span className={`material-symbols-outlined arrow ${toggle5 ? 'rotate' : ''}`}>
                arrow_right
              </span>
              <span>즐겨찾기 페이지</span>
            </div>
            <div className={`img_wrap ${toggle5 ? 'show' : 'hide'}`}>
              <div className="ani_wrap">
                <span>- 병원을 즐겨찾기 할 수 있는 기능을 구현하였습니다.</span>
                <span>- 사용자는 병원 목록에서 원하는 병원을 즐겨찾기하여 저장할 수 있습니다.</span>
                <span>- 이미 즐겨찾기 된 병원을 다시 클릭하면 즐겨찾기가 해제됩니다.</span>
                <span>- 즐겨찾기 상태를 로컬 스토리지에 저장하여 페이지가 새로고침 되어도 유지되게 하였습니다.</span>
                <img src="/assets/bookmark_code.png" alt="북마크 코드" />
              </div>
            </div>
            <div className="span_wrap" onClick={handleClick6}>
              <span className={`material-symbols-outlined arrow ${toggle6 ? 'rotate' : ''}`}>
                arrow_right
              </span>
              <span>지도 페이지</span>
            </div>
            <div className={`img_wrap ${toggle6 ? 'show' : 'hide'}`}>
              <div className="ani_wrap">
                <span>- Naver 지도 API를 활용하여 반려동물 병원의 위치를 지도에 마커로 표시하는 기능을 구현했습니다.</span>
                <span>- 사용자는 지도 상에서 병원을 확인하고 선택하면 해당 병원의 상세 정보를 보여주는 기능을 제공합니다.</span>
              </div>
            </div>
            <span></span>
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
              <div className="petdoc_html_percent_bar bar"></div>
              <div className="petdoc_html_percent_txt">
                <AnimatedCountUp
                  start={0}
                  end={0.8}
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
              <div className="petdoc_css_percent_bar bar"></div>
              <div className="petdoc_css_percent_txt">
                <AnimatedCountUp
                  start={0}
                  end={18.2}
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
              <div className="petdoc_js_percent_bar bar"></div>
              <div className="petdoc_js_percent_bar">
                <AnimatedCountUp
                  start={0}
                  end={81}
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
export default Petdoc;