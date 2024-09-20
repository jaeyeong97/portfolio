import { useEffect } from "react";
import PjHeader from "../projectHeader/PjHeader";
import PjFooter from "../projectFooter/PjFooter";
import '../projectPages/ProjectCommon.css'
import { Link } from 'react-scroll';
import sr from "../../util/ScrollReveal";
import AnimatedCountUp from "../../util/AnimatedCountUp";

const Volvo = () => {

    useEffect(() => {
        // 페이지 이동 후 스크롤을 최상단으로
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {

        //프로젝트 퍼센트 바 애니메이션
        sr.reveal(".volvo_html_percent_bar", {
            duration: 1000,
            beforeReveal: (el) => {
                el.style.animation = "volvo_html_percent 1s ease-out forwards";
            },
        });
        sr.reveal(".volvo_css_percent_bar", {
            duration: 1000,
            beforeReveal: (el) => {
                el.style.animation = "volvo_css_percent 1s ease-out forwards";
            },
        });
        sr.reveal(".volvo_js_percent_bar", {
            duration: 1000,
            beforeReveal: (el) => {
                el.style.animation = "volvo_js_percent 1s ease-out forwards";
            },
        });
    }, []);


    return (
        <div className="volvo components_wrap" id="pj_top">
            <PjHeader />
            <main className="main">
                <div className="main_img">볼보 메인 이미지</div>
                <div className="main_txt_wrap_center">
                    <div className="main_txt_wrap">
                        <div className="main_txt">
                            <h2 className="title">Volvo</h2>
                            <span className="t1">Volvo 웹사이트</span>
                            <span className="t2">사용 기술: HTML, CSS, JQuery</span>
                            <div className="t3">깃허브 주소:&nbsp;<a href="https://github.com/jaeyeong97/volvo" target="_blank" rel="noreferrer">github.com/jaeyeong97/volvo</a>
                                <span className="material-symbols-outlined open">
                                    open_in_new
                                </span>
                            </div>
                        </div>
                        <div className="eye">
                            <a href="https://jaeyeong97-volvo.netlify.app/" target="_blank" rel="noreferrer">
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
            <section id="section_start">
                <h3 className="ex_title">🏅프로젝트 개요</h3>
                <div className="explain">
                    <div>• 기존의 볼보자동차 웹사이트를 새롭게 디자인한 <span className="em">1440px 고정형</span> 웹사이트
                    </div>
                    <div>• 메인페이지, 모델페이지, 구매페이지 제작</div>
                    <div>• 개인 프로젝트</div>
                </div>
            </section>
            <section>
                <h3 className="ex_title">🚩프로젝트 목적</h3>
                <div className="explain">
                    <div>• 기존 웹사이트를 친숙한 구조로 변경하여 사용자에게 친화적이고 익숙하게 웹사이트를 사용할 수 있게 변경</div>
                </div>
            </section>
            <section>
                <h3 className="ex_title">👀변경된 부분</h3>
                <div className="explain">
                    <div>• 헤더에 <span className="em">gnb</span> 를 추가하여 사용자가 원하는 메뉴를 한눈에 볼 수 있게 변경</div>
                    <div>• <span className="em">인기있는 모델</span> 을 볼 수 있는 섹션을 만들어, 사용자가 어떤 모델이 인기있는지 확인하기 쉽게 변경</div>
                    <div>• 사용자 편의를 위해 <span className="em">견적내기</span> , <span className="em">구매상담</span> , <span className="em">시승신청</span> , <span className="em">전시장검색</span> 아이콘을 추가</div>
                </div>
            </section>
            <section>
                <h3 className="ex_title">✨결과 및 알게된 점</h3>
                <div className="explain">
                    <div>• 사용자의 접근성에 맞게 메인페이지 구성을 변경할 수 있었습니다.</div>
                    <div>• 사용자가 원하는게 무엇인지 파악한 후 메인페이지를 구성하는것이 접근성에 도움이 된다는 것을 배웠습니다.</div>
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
                            <div className="volvo_html_percent_bar bar"></div>
                            <div className="volvo_html_percent_txt">
                                <AnimatedCountUp
                                    start={0}
                                    end={72.1}
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
                            <div className="volvo_css_percent_bar bar"></div>
                            <div className="volvo_css_percent_txt">
                                <AnimatedCountUp
                                    start={0}
                                    end={27.2}
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
                            <div className="volvo_js_percent_bar bar"></div>
                            <div className="volvo_js_percent_bar">
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
                <div className="to_project">
                    <a href="https://jaeyeong97-volvo.netlify.app/" target="_blank" rel="noreferrer">
                        <span className="text">프로젝트 보기</span>
                        <span className="material-symbols-outlined arrow_forward arrow--right">
                            arrow_forward
                        </span>
                    </a>
                </div>
            </section>
            <PjFooter />
        </div>
    );
};

export default Volvo;