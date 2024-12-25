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
    sr.reveal(".shop_ts_percent_bar", {
      duration: 1000,
      beforeReveal: (el) => {
        el.style.animation = "shop_ts_percent 1s ease-out forwards";
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
              <span className="t2">사용 기술: React, TypeScript, Recoil, React Router, SCSS, OAuth</span>
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
        <h3 className="ex_title">📋프로젝트 개요</h3>
        <div className="summary_txt">
          <div className="explain">
            <div>• 개인 프로젝트</div>
            <div>• 쇼핑몰에 필요한 주요 기능들을 구현한 쇼핑몰 웹사이트입니다.</div>
          </div>
        </div>
      </section>
      <section>
        <h3 className="ex_title">💡주요 기능</h3>
        <div className="summary_txt">
          <div className="explain">
            <div>• 검색 페이지에서 상품을 검색하여 상세 페이지로 이동할 수 있고, 최근 검색어 또한 확인할 수 있습니다.</div>
            <div>• '좋아요' 버튼을 클릭하여 상품을 찜할 수 있고, 좋아요 페이지에서 확인할 수 있습니다.</div>
            <div>• 상품 상세 페이지에서 상품의 옵션 및 수량을 선택하여 장바구니에 담을 수 있습니다.</div>
            <div>• 상품 구매 페이지에서 '배송지 추가' 버튼을 통해 Daum 우편번호 검색 서비스를 사용해 배송지를 입력할 수 있습니다.</div>
            <div>• 카카오, 네이버, 구글 로그인을 통해 좋아요 페이지와 마이 페이지에 접근할 수 있도록 하였습니다.</div>
            <div>• 상품 썸네일에 마우스를 올려서 상품 상세 이미지를 미리 볼 수 있습니다.</div>
          </div>
        </div>
      </section>
      <section>
        <h3 className="ex_title">⚒️사용 기술</h3>
        <div className="summary_txt">
          <div className="explain">
            <h4 className="ex_h4">- 주요 기술</h4>
            <div><span className="cem">React</span> - 재사용과 유지보수를 하기 쉽도록 컴포넌트 구조로 UI를 제작하였습니다.</div>
            <div><span className="cem">TypeScript</span> - 타입 정의를 통해 코드의 안정성을 높이고 가독성을 높혔습니다.</div>
            <div><span className="cem">React Router</span> - 쇼핑몰의 검색 페이지, 상품 상세 페이지, 장바구니 등 페이지간 전환을 원활하게 하였습니다.</div>
            <div><span className="cem">OAuth</span> - 네이버, 카카오, 구글 로그인 기능을 OAuth 인증을 통해 구현하였습니다.</div>
            <div><span className="cem">Daum 주소 API</span> - 사용자가 배송지 입력 시 편의성을 더하기 위해 사용하였습니다.</div>

            <h4 className="ex_h4">- 스타일링</h4>
            <div><span className="cem">SCSS</span> - 공통 스타일을 변수로 관리해 코드의 재사용성을 높이고 유지보수하기 쉽게 작성했습니다.</div>

            <h4 className="ex_h4">- 상태 관리</h4>
            <div><span className="cem">Recoil</span> - 상품 리스트, 장바구니, 찜목록 상태 등을 atom으로 정의하고 페이지 간 상태를 공유하였습니다.</div>

            <h4 className="ex_h4">- 웹 접근성 및 UI/UX 개선</h4>
            <div>
              <span className="cem">로딩 중 레이아웃 안정화</span> - 상품 이미지가 로딩 중일 경우, 플레이스홀더 공간에 회색 배경을 표시해 이미지가 로드되는 동안 레이아웃 시프트가 발생하지 않도록 처리했습니다.
            </div>

            <div><span className="cem">무한 스크롤</span> - 상품의 목록이 길어질 경우 무한 스크롤을 통해 상품이 적절하게 로드되도록 하였습니다.</div>
            <div><span className="cem">키보드 네비게이션</span> - 웹 접근성을 높이기 위해 키보드만으로도 주요 기능에 접근할 수 있도록 하였습니다.</div>
          </div>
        </div>
      </section>
      <section className="section_bar">
        <h3 className="ex_title">📊언어 사용 비율 <span>(깃허브 기준)</span></h3>
        <div className="language_wrap">
          <div className="language">
            <div className="txt_wrap">
              <div className="ts_icon icon"></div>
              <div className="ts_txt">TS</div>
            </div>
            <div className="ts_percent_wrap">
              <div className="shop_ts_percent_bar bar"></div>
              <div className="shop_ts_percent_bar">
                <AnimatedCountUp
                  start={0}
                  end={64.5}
                  duration={2.5}
                  decimal={1}
                />
              </div>
            </div>
          </div>
          <div className="language">
            <div className="txt_wrap">
              <div className="scss_icon icon"></div>
              <div className="scss txt">SCSS</div>
            </div>
            <div className="css_percent_wrap">
              <div className="shop_scss_percent_bar bar"></div>
              <div className="shop_scss_percent_txt">
                <AnimatedCountUp
                  start={0}
                  end={25.9}
                  duration={2.5}
                  decimal={1}
                />
              </div>
            </div>
          </div>
          <div className="language">
            <div className="txt_wrap">
              <div className="js_icon icon"></div>
              <div className="js_txt">JS</div>
            </div>
            <div className="js_percent_wrap">
              <div className="shop_js_percent_bar bar"></div>
              <div className="shop_js_percent_bar">
                <AnimatedCountUp
                  start={0}
                  end={9.1}
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
              <div className="shop_html_percent_bar bar"></div>
              <div className="shop_html_percent_txt">
                <AnimatedCountUp
                  start={0}
                  end={0.5}
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