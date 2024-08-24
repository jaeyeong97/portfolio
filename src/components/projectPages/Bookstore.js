import { useEffect } from "react";
import PjHeader from "../projectHeader/PjHeader";
import PjFooter from "../projectFooter/PjFooter";
import '../projectPages/ProjectCommon.css'
import { Link } from 'react-scroll';
import sr from "../../util/ScrollReveal";
import AnimatedCountUp from "../../util/AnimatedCountUp";

const Bookstore = () => {

    useEffect(() => {
        // 페이지 이동 후 스크롤을 최상단으로
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {

        //프로젝트 퍼센트 바 애니메이션
        sr.reveal(".bookstore_html_percent_bar", {
            duration: 1000,
            beforeReveal: (el) => {
                el.style.animation = "bookstore_html_percent 1s ease-out forwards";
            },
        });
        sr.reveal(".bookstore_css_percent_bar", {
            duration: 1000,
            beforeReveal: (el) => {
                el.style.animation = "bookstore_css_percent 1s ease-out forwards";
            },
        });
        sr.reveal(".bookstore_js_percent_bar", {
            duration: 1000,
            beforeReveal: (el) => {
                el.style.animation = "bookstore_js_percent 1s ease-out forwards";
            },
        });
    }, []);


    return (
        <div className="bookstore components_wrap" id="pj_top">
            <PjHeader />
            <main className="main">
                <div className="main_img">교보문고 메인 이미지</div>
                <div className="main_txt_wrap_center">
                    <div className="main_txt_wrap">
                        <div className="main_txt">
                            <h2 className="title">교보문고</h2>
                            <span className="t1">교보문고 웹사이트</span>
                            <span className="t2">사용 기술: HTML, CSS, JavaScript</span>
                            <div className="t3">깃허브 주소:&nbsp;<a href="https://github.com/jaeyeong97/bookstore" target="_blank" rel="noreferrer">github.com/jaeyeong97/bookstore</a>
                                <span className="material-symbols-outlined open">
                                    open_in_new
                                </span>
                            </div>
                        </div>
                        <div className="eye">
                            <a href="https://jaeyeong97-bookstore.netlify.app/" target="_blank" rel="noreferrer">
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
                    <div>• 기존의 교보문고 도서리스트 페이지를 <span className="em">반응형</span> 으로 제작한 웹페이지입니다</div>
                    <div>• 개인 프로젝트</div>
                </div>
            </section>
            <section>
                <h3 className="ex_title">🚩프로젝트 목적</h3>
                <div className="explain">
                    <div>• 기존 교보문고 도서리스트 페이지를 카피함으로써, 웹 디자인과 구현에 대한 학습과 연습을 목표로 했습니다.</div>
                    <div>• 사용자 중심의 디자인을 이해하고 적용하는 과정에서 실력을 향상시키는 것이 목적이었습니다.</div>
                </div>
            </section>
            <section>
                <h3 className="ex_title">👀변경된 부분</h3>
                <div className="explain">
                    <div>• 기존 웹페이지가 반응형이 아니여서, 새롭게 반응형 디자인을 추가하여 다양한 디바이스에서도 불편함 없이 도서리스트를 볼 수 있도록 추가하였습니다.</div>
                </div>
            </section>
            <section>
                <h3 className="ex_title">✨결과 및 알게된 점</h3>
                <div className="explain">
                    <div>• 기존 디자인을 코드로 옮기면서 HTML, CSS, JavaScript 등 프론트엔드 언어에 대한 익숙함을 향상시킬 수 있었습니다.</div>
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
                            <div className="bookstore_html_percent_bar bar"></div>
                            <div className="bookstore_html_percent_txt">
                                <AnimatedCountUp
                                    start={0}
                                    end={66.9}
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
                            <div className="bookstore_css_percent_bar bar"></div>
                            <div className="bookstore_css_percent_txt">
                                <AnimatedCountUp
                                    start={0}
                                    end={25.8}
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
                            <div className="bookstore_js_percent_bar bar"></div>
                            <div className="bookstore_js_percent_bar">
                                <AnimatedCountUp
                                    start={0}
                                    end={7.3}
                                    duration={2.5}
                                    decimal={1}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="to_project">
                    <a href="https://jaeyeong97-bookstore.netlify.app" target="_blank" rel="noreferrer">
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

export default Bookstore;