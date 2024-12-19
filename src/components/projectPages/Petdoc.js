import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import PjHeader from "../projectHeader/PjHeader";
import PjFooter from "../projectFooter/PjFooter";
import sr from "../../util/ScrollReveal";
import AnimatedCountUp from "../../util/AnimatedCountUp";
const Petdoc = () => {
  const [toggle1, setToggle1] = useState(false); // 상담 페이지 토글
  const [toggle2, setToggle2] = useState(false); // 로딩 페이지 토글
  const [toggle3, setToggle3] = useState(false); // 검색 페이지 토글
  const [toggle4, setToggle4] = useState(false); // 반려동물 추가/수정 페이지 토글
  const [toggle5, setToggle5] = useState(false); // 즐겨찾기 페이지 토글
  const [toggle6, setToggle6] = useState(false); // 지도 페이지 토글

  const handleToggle = (toggleSet) => {
    toggleSet((prev) => !prev);
  };

  useEffect(() => {
    // 페이지 이동 후 스크롤을 최상단으로
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {

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
              <span className="t1">반려 동물 병원 예약 웹사이트</span>
              <span className="t2">사용 기술: React, React Router, NaverMap API</span>
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
        <h3 className="ex_title">📋프로젝트 개요</h3>
        <div className="loading_txt">
          <div className="explain">
            <div>• <span className="em">팀 프로젝트</span> &lt;프론트엔드 4명&gt;</div>
            <div>• 반려동물 진료 예약 및 건강 상태를 기록할 수 있는 웹사이트입니다.</div>
          </div>
        </div>
      </section>
      <section className="section_petdoc_explain1">
        <h3 className="ex_title">✨내가 기여한 부분</h3>
        <div className="img_wrap">
          <div className="w">
            <img src="/assets/petdoc_consult.webp" alt="펫닥 상담 페이지" />
            <span>&lt;상담 페이지&gt;</span>
          </div>
          <div className="w">
            <img src="/assets/petdoc_loading.webp" alt="펫닥 로딩 페이지" />
            <span>&lt;로딩 페이지&gt;</span>
          </div>
          <div className="w">
            <img src="/assets/petdoc_search.webp" alt="펫닥 검색 페이지" />
            <span>&lt;검색 페이지&gt;</span>
          </div>
        </div>
        <div className="explain1_txt">
          <div className="explain">
            <div className="span_wrap" onClick={() => handleToggle(setToggle1)}>
              <span className={`material-symbols-outlined arrow ${toggle1 ? 'rotate' : ''}`}>
                arrow_right
              </span>
              <span>상담 페이지</span>
            </div>
            <div className={`img_wrap ${toggle1 ? 'show' : 'hide'}`}>
              <div className="ani_wrap">
                <div className="s_text">- 각 버튼 클릭시 주제에 맞는 답변이 나오게 구현</div>
                <h3>🚨문제점</h3>
                <div className="s_text">- 상담 채팅 기록을 관리하는 함수에서 무한루프가 되는 오류 발생</div>
                <h3>🎯해결 방법</h3>
                <div className="s_text">- <span className="cem">useEffect</span> 훅을 사용하여, 의존성 배열에 상담버튼을 관리하는 상태변수를 넣어서 버튼
                  의 상태가 변경될 때마다 채팅 기록이 업데이트되게 변경</div>
                <h3>✨결과 및 알게된 점</h3>
                <div className="s_text">- <span className="cem">useEffect</span>의 의존성 배열을 올바르게 설정하는 것이 무한루프 오류를 방지하는데 중요
                  하다는 점을 깨달았습니다.</div>
              </div>
            </div>
            <div className="span_wrap" onClick={() => handleToggle(setToggle2)}>
              <span className={`material-symbols-outlined arrow ${toggle2 ? 'rotate' : ''}`}>
                arrow_right
              </span>
              <span>로딩 페이지</span>
            </div>
            <div className={`img_wrap ${toggle2 ? 'show' : 'hide'}`}>
              <div className="ani_wrap">
                <img src="/assets/loading_code.webp" alt="로딩 코드" />
                <div className="s_text">- <span className="cem">setTimeout</span> 함수를 사용해 2초동안 로딩페이지가 출력되게 구현</div>
              </div>
            </div>
            <div className="span_wrap" onClick={() => handleToggle(setToggle3)}>
              <span className={`material-symbols-outlined arrow ${toggle3 ? 'rotate' : ''}`}>
                arrow_right
              </span>
              <span>검색 페이지</span>
            </div>
            <div className={`img_wrap ${toggle3 ? 'show' : 'hide'}`}>
              <div className="ani_wrap">
                <div className="s_text">- <span className="cem">filter</span> 메서드를 활용해 사용자가 입력한 검색어에 따라 병원 목록을 필터링</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section_petdoc_explain2">
        <div className="img_wrap">
          <div className="w">
            <img src="/assets/petdoc_edit.webp" alt="펫닥 반려동물 수정 페이지" />
            <span>&lt;반려동물 수정 페이지&gt;</span>
          </div>
          <div className="w">
            <img src="/assets/petdoc_bookmark.webp" alt="펫닥 즐겨찾기 페이지" />
            <span>&lt;즐겨찾기 페이지&gt;</span>
          </div>
          <div className="w">
            <img src="/assets/petdoc_map.webp" alt="펫닥 지도 페이지" />
            <span>&lt;지도 페이지&gt;</span>
          </div>
        </div>
        <div className="explain1_txt">
          <div className="explain">
            <div className="span_wrap" onClick={() => handleToggle(setToggle4)}>
              <span className={`material-symbols-outlined arrow ${toggle4 ? 'rotate' : ''}`}>
                arrow_right
              </span>
              <span>반려동물 추가/수정 페이지</span>
            </div>
            <div className={`img_wrap ${toggle4 ? 'show' : 'hide'}`}>
              <div className="ani_wrap">
                <div className="s_text">- 반려동물 정보를 추가하고 수정할 수 있는 기능 구현</div>
                <div className="s_text">- 이미지 업로드 기능 구현</div>
              </div>
            </div>
            <div className="span_wrap" onClick={() => handleToggle(setToggle5)}>
              <span className={`material-symbols-outlined arrow ${toggle5 ? 'rotate' : ''}`}>
                arrow_right
              </span>
              <span>즐겨찾기 페이지</span>
            </div>
            <div className={`img_wrap ${toggle5 ? 'show' : 'hide'}`}>
              <div className="ani_wrap">
                <img src="/assets/bookmark_code.webp" alt="북마크 코드" />
                <div className="s_text">- 병원을 즐겨찾기 할 수 있는 기능을 구현</div>
                <div className="s_text">- 즐겨찾기한 병원 배열을 즐겨찾기 페이지로 전달</div>
                <div className="s_text">- 즐겨찾기 배열을 로컬 스토리지에 저장</div>
              </div>
            </div>
            <div className="span_wrap" onClick={() => handleToggle(setToggle6)}>
              <span className={`material-symbols-outlined arrow ${toggle6 ? 'rotate' : ''}`}>
                arrow_right
              </span>
              <span>지도 페이지</span>
            </div>
            <div className={`img_wrap ${toggle6 ? 'show' : 'hide'}`}>
              <div className="ani_wrap">
                <div className="s_text">- Naver Map API를 활용해 지도상에 병원 위치를 마커로 표시</div>
                <div className="s_text">- 마커 클릭 시 해당 병원의 상세정보를 모달창을 통해 확인 가능</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section_bar">
        <h3 className="ex_title">📊언어 사용 비율 <span>(깃허브 기준)</span></h3>
        <div className="language_wrap">
          <div className="language">
            <div className="txt_wrap">
              <div className="js_icon icon"></div>
              <div className="js_txt">JS</div>
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
          <div className="language">
            <div className="txt_wrap">
              <div className="css_icon icon"></div>
              <div className="css txt">CSS</div>
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
              <div className="html_icon icon"></div>
              <div className="html txt">HTML</div>
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
        </div>
        <div className="to_project">
          <a href="https://jaeyeong97-petdoc.web.app/" target="_blank" rel="noreferrer">
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
export default Petdoc;