import { useEffect } from "react";
import PjHeader from "../projectHeader/PjHeader";
import PjFooter from "../projectFooter/PjFooter";
import '../projectPages/ProjectCommon.css'
import { Link } from 'react-scroll';
import sr from "../../util/ScrollReveal";
import AnimatedCountUp from "../../util/AnimatedCountUp";
const UlsanTour = () => {
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
        sr.reveal(".ulsan_tour_html_percent_bar", {
            duration: 1000,
            beforeReveal: (el) => {
                el.style.animation = "ulsan_tour_html_percent 1s ease-out forwards";
            },
        });
        sr.reveal(".ulsan_tour_css_percent_bar", {
            duration: 1000,
            beforeReveal: (el) => {
                el.style.animation = "ulsan_tour_css_percent 1s ease-out forwards";
            },
        });
        sr.reveal(".ulsan_tour_js_percent_bar", {
            duration: 1000,
            beforeReveal: (el) => {
                el.style.animation = "ulsan_tour_js_percent 1s ease-out forwards";
            },
        });
    }, []);
    return (
        <div className="ulsan_tour components_wrap" id="pj_top">
            <PjHeader />
            <main className="main">
                <div className="main_img">울산관광 메인 이미지</div>
                <div className="main_txt_wrap_center">
                    <div className="main_txt_wrap">
                        <div className="main_txt">
                            <h2 className="title">울산 관광 웹사이트</h2>
                            <span className="t1">울산 관광 웹사이트를 새롭게 디자인한 1680px 고정형 웹사이트입니다.</span>
                            <span className="t2">사용 기술: HTML, CSS, JavaScript, JQuery</span>
                            <div className="t3">깃허브 주소:&nbsp;<a href="https://github.com/jaeyeong97/visit-ulsan-web" target="_blank" rel="noreferrer">github.com/jaeyeong97/visit-ulsan-web</a>
                                <span className="material-symbols-outlined open">
                                    open_in_new
                                </span>
                            </div>
                        </div>
                        <div className="eye">
                            <a href="https://jaeyeong97-ulsan-web.netlify.app/" target="_blank" rel="noreferrer">
                                <div className="eye_in1">
                                    <div className="eye_img">
                                        <span class="material-symbols-outlined eye_icon">
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
                <div className="summary_txt">
                    <div className="explain">
                        <span>• 기존의 울산 관광 웹사이트를 새롭게 디자인한 1680px 고정형 웹사이트입니다.</span>
                    </div>
                </div>
            </section>
            <section className="section_purpose">
                <h3 className="ex_title">프로젝트 목적</h3>
                <div className="purpose_txt">
                    <div className="explain">
                        <span>• 울산 광광 웹사이트를 이용하는 사용자들에게 다양하고 직관적인 디자인을 추가하여, 더 나은 경험을 제공하는 것</span>
                    </div>
                </div>
            </section>
            <section className="section_changed">
                <h3 className="ex_title">변경된 부분</h3>
                <div className="changed_txt">
                    <div className="explain">
                        <span>• 메인페이지에서 사용자가 원하는 정보를 쉽게 찾을 수 있게 정보를 담았습니다.</span>
                        <span>• 사용자가 원하는 컨셉에 맞는 여행지를 추천할 수 있게 목차를 분류하여, 사용자가 선택할 수 있게 하였습니다.</span>
                        <span>• 각 구역별 추천 여행지 섹션을 만들어, 사용자가 원하는 구역의 여행지들을 볼 수 있게 하였습니다.</span>
                        <span>• 이번주 행사, 이달의 축제 등 최신의 정보들을 확인 할 수 있도록 하였습니다.</span>
                    </div>
                </div>
            </section>
            <section className="section_result">
                <h3 className="ex_title">결과 및 알게된 점</h3>
                <div className="result_txt">
                    <div className="explain">
                        <span>• 이 프로젝트를 통해 다양한 디자인 컨셉과 사용자 경험 개선에 대한 스킬을 향상시킬 수 있었습니다.</span>
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
                            <div className="ulsan_tour_html_percent_bar bar"></div>
                            <div className="ulsan_tour_html_percent_txt">
                                <AnimatedCountUp
                                    start={0}
                                    end={55.8}
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
                            <div className="ulsan_tour_css_percent_bar bar"></div>
                            <div className="ulsan_tour_css_percent_txt">
                                <AnimatedCountUp
                                    start={0}
                                    end={40.2}
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
                            <div className="ulsan_tour_js_percent_bar bar"></div>
                            <div className="ulsan_tour_js_percent_bar">
                                <AnimatedCountUp
                                    start={0}
                                    end={4.0}
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
export default UlsanTour;