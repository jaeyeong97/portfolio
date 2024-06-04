import { useEffect } from "react";
import PjHeader from "../projectHeader/PjHeader";
import PjFooter from "../projectFooter/PjFooter";
import '../projectPages/ProjectCommon.css'
import { Link } from 'react-scroll';
import sr from "../../util/ScrollReveal";
import AnimatedCountUp from "../../util/AnimatedCountUp";
const Bbq = () => {
    useEffect(() => {
        // 페이지 이동 후 스크롤을 최상단으로
        window.scrollTo(0, 0);
    }, []);
    useEffect(() => {

        //프로젝트 퍼센트 바 애니메이션
        sr.reveal(".bbq_html_percent_bar", {
            duration: 1000,
            beforeReveal: (el) => {
                el.style.animation = "bbq_html_percent 1s ease-out forwards";
            },
        });
        sr.reveal(".bbq_css_percent_bar", {
            duration: 1000,
            beforeReveal: (el) => {
                el.style.animation = "bbq_css_percent 1s ease-out forwards";
            },
        });
        sr.reveal(".bbq_js_percent_bar", {
            duration: 1000,
            beforeReveal: (el) => {
                el.style.animation = "bbq_js_percent 1s ease-out forwards";
            },
        });
    }, []);
    return (
        <div className="bbq components_wrap" id="pj_top">
            <PjHeader />
            <main className="main">
                <div className="main_img">bba 메인 이미지</div>
                <div className="main_txt_wrap_center">
                    <div className="main_txt_wrap">
                        <div className="main_txt">
                            <h2 className="title">BBQ</h2>
                            <span className="t1">BBQ 웹사이트를 새롭게 디자인한 반응형 웹사이트</span>
                            <span className="t2">사용 기술: HTML, CSS, JQuery</span>
                            <div className="t3">깃허브 주소:&nbsp;<a href="https://github.com/jaeyeong97/bbq" target="_blank" rel="noreferrer">github.com/jaeyeong97/bbq</a>
                                <span className="material-symbols-outlined open">
                                    open_in_new
                                </span>
                            </div>
                        </div>
                        <div className="eye">
                            <a href="https://jaeyeong97-bbq.netlify.app/" target="_blank" rel="noreferrer">
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
                        <div>• 기존의 BBQ 웹사이트를 새롭게 디자인한 <span className="em">반응형</span> 웹사이트입니다.</div>
                        <div>• <span className="em">메인페이지</span> , <span className="em">메뉴페이지</span> 를 제작하였습니다.</div>
                    </div>
                </div>
            </section>
            <section className="section_purpose">
                <h3 className="ex_title">프로젝트 목적</h3>
                <div className="purpose_txt">
                    <div className="explain">
                        <span>• 기존 웹사이트 보다 더 현대적이고 사용자 친화적인 디자인을 구현</span>
                    </div>
                </div>
            </section>
            <section className="section_changed">
                <h3 className="ex_title">변경된 부분</h3>
                <div className="changed_txt">
                    <div className="explain">
                        <span>• 반응형 디자인을 적용하여 사용자의 디바이스에 맞는 적절한 화면 구성을 하였습니다.</span>
                        <span>• 메인슬라이더 영역에 커서 이미지를 추가하고, CSS에서 keyframes를 이용하여 애니메이션을 추가해 사용자에게 시각적 흥미를 주었습니다.</span>
                        <span>• 다른 치킨 브랜드 웹사이트를 참고하여 BBQ 웹사이트에서 부족하다고 생각되는 부분을
                            추가하였습니다.</span>
                    </div>
                </div>
            </section>
            <section className="section_result">
                <h3 className="ex_title">결과 및 알게된 점</h3>
                <div className="result_txt">
                    <div className="explain">
                        <span>• 이 프로젝트를 통해 다양한 웹사이트들의 구조를 학습할 수 있었습니다.</span>
                        <span>• 반응형 웹사이트 디자인에 대한 실전 경험을 쌓을 수 있었습니다.</span>
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
                            <div className="bbq_html_percent_bar bar"></div>
                            <div className="bbq_html_percent_txt">
                                <AnimatedCountUp
                                    start={0}
                                    end={64.3}
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
                            <div className="bbq_css_percent_bar bar"></div>
                            <div className="bbq_css_percent_txt">
                                <AnimatedCountUp
                                    start={0}
                                    end={31.6}
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
                            <div className="bbq_js_percent_bar bar"></div>
                            <div className="bbq_js_percent_bar">
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
            </section>
            <PjFooter />
        </div>
    )
}
export default Bbq;