import { useEffect } from "react";
import PjHeader from "../projectHeader/PjHeader";
import PjFooter from "../projectFooter/PjFooter";
import '../projectPages/ProjectCommon.css'
import { Link } from 'react-scroll';
import sr from "../../util/ScrollReveal";
import AnimatedCountUp from "../../util/AnimatedCountUp";
const BookStore = () => {

    useEffect(() => {

        //프로젝트 퍼센트 바 애니메이션
        sr.reveal(".book_store_html_percent_bar", {
            duration: 1000,
            beforeReveal: (el) => {
                el.style.animation = "book_store_html_percent 1s ease-out forwards";
            },
        });
        sr.reveal(".book_store_css_percent_bar", {
            duration: 1000,
            beforeReveal: (el) => {
                el.style.animation = "book_store_css_percent 1s ease-out forwards";
            },
        });
        sr.reveal(".book_store_js_percent_bar", {
            duration: 1000,
            beforeReveal: (el) => {
                el.style.animation = "book_store_js_percent 1s ease-out forwards";
            },
        });
    }, []);
    return (
        <div className="book_store components_wrap" id="pj_top">
            <PjHeader />
            <main className="main">
                <div className="main_img">교보문고 메인 이미지</div>
                <div className="main_txt_wrap_center">
                    <div className="main_txt_wrap">
                        <div className="main_txt">
                            <h2 className="title">교보문고</h2>
                            <span className="t1">기존의 교보문고 도서리스트 페이지를 반응형으로 제작한 웹페이지</span>
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
            <section className="section_summary" id="section_start">
                <h3 className="ex_title">개요</h3>
                <div className="summary_txt">
                    <div className="explain">
                        <div>• 기존의 교보문고 도서리스트 페이지를 <span className="em">반응형</span> 으로 제작한 웹페이지입니다.</div>
                    </div>
                </div>
            </section>
            <section className="section_purpose">
                <h3 className="ex_title">프로젝트 목적</h3>
                <div className="purpose_txt">
                    <div className="explain">
                        <span>• 기존 교보문고 도서리스트 페이지를 카피함으로써, 웹 디자인과 구현에 대한 학습과 연습을 목표로 했습니다.</span>
                        <span>• 사용자 중심의 디자인을 이해하고 적용하는 과정에서 실력을 향상시키는 것이 목적이었습니다.</span>
                    </div>
                </div>
            </section>
            <section className="section_changed">
                <h3 className="ex_title">변경된 부분</h3>
                <div className="changed_txt">
                    <div className="explain">
                        <span>• 기존 웹페이지가 반응형이 아니여서, 새롭게 반응형 디자인을 추가하여 다양한 디바이스에서도 불편함 없이 도서리스트를 볼 수 있도록 추가하였습니다.</span>
                    </div>
                </div>
            </section>
            <section className="section_result">
                <h3 className="ex_title">결과 및 알게된 점</h3>
                <div className="result_txt">
                    <div className="explain">
                        <span>• 구현되어 있는 웹사이트를 코드로 작성하면서 프로그래밍 언어와 다양한 디자인 패턴을 익힐 수 있었습니다.</span>
                    </div>
                </div>
            </section>
            <section className="section_bar">
                <span className="ex_title">언어 사용 비율</span>
                <div className="language_wrap">
                    <div className="language">
                        <div className="txt_wrap">
                            <div className="html_icon"></div>
                            <div className="html txt">Html</div>
                        </div>
                        <div className="html_percent_wrap">
                            <div className="book_store_html_percent_bar bar"></div>
                            <div className="book_store_html_percent_txt">
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
                            <div className="css txt">Css</div>
                        </div>
                        <div className="css_percent_wrap">
                            <div className="book_store_css_percent_bar bar"></div>
                            <div className="book_store_css_percent_txt">
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
                            <div className="js_txt">Js</div>
                        </div>
                        <div className="js_percent_wrap">
                            <div className="book_store_js_percent_bar bar"></div>
                            <div className="book_store_js_percent_bar">
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
            </section>
            <PjFooter />
        </div>
    )
}
export default BookStore;