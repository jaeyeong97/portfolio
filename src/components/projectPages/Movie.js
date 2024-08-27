import { useEffect } from "react";
import PjHeader from "../projectHeader/PjHeader";
import PjFooter from "../projectFooter/PjFooter";
import '../projectPages/ProjectCommon.css'
import { Link } from 'react-scroll';
import sr from "../../util/ScrollReveal";
import AnimatedCountUp from "../../util/AnimatedCountUp";

const Movie = () => {

    useEffect(() => {
        // 페이지 이동 후 스크롤을 최상단으로
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {

        //프로젝트 퍼센트 바 애니메이션
        sr.reveal(".movie_html_percent_bar", {
            duration: 1000,
            beforeReveal: (el) => {
                el.style.animation = "movie_html_percent 1s ease-out forwards";
            },
        });
        sr.reveal(".movie_css_percent_bar", {
            duration: 1000,
            beforeReveal: (el) => {
                el.style.animation = "movie_css_percent 1s ease-out forwards";
            },
        });
        sr.reveal(".movie_js_percent_bar", {
            duration: 1000,
            beforeReveal: (el) => {
                el.style.animation = "movie_js_percent 1s ease-out forwards";
            },
        });
    }, []);


    return (
        <div className="movie components_wrap" id="pj_top">
            <PjHeader />
            <main className="main">
                <div className="main_img">영화 메인 이미지</div>
                <div className="main_txt_wrap_center">
                    <div className="main_txt_wrap">
                        <div className="main_txt">
                            <h2 className="title">go n play</h2>
                            <span className="t1">go n play 영화 웹사이트</span>
                            <span className="t2">사용 기술: JSX, CSS, JavaScript, React</span>
                            <div className="t3">깃허브 주소:&nbsp;<a href="https://github.com/jaeyeong97/2021-2024-movies-web" target="_blank" rel="noreferrer">github.com/jaeyeong97/2021-2024-movies-web</a>
                                <span className="material-symbols-outlined open">
                                    open_in_new
                                </span>
                            </div>
                        </div>
                        <div className="eye">
                            <a href="https://jaeyeong97-movie-web.web.app/" target="_blank" rel="noreferrer">
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
                    <div>• 개인 프로젝트</div>
                    <div>• 2021년 ~ 2024년 흥행 한 영화의 정보를 확인 할 수 있는 웹사이트입니다.
                    </div>
                </div>
            </section>
            <section>
                <h3 className="ex_title">💻구현기능</h3>
                <div className="explain">
                    <div>• <span className="em">filter</span> 메서드를 활용하여 년도 버튼 클릭 시, 각 년도에 맞는 영화가 화면에 출력되게 하였습니다.
                    </div>
                    <div>• 사용자가 리뷰를 10글자 이내로 작성 시, alert을 띄워 10글자 이상 작성하게 구현하였습니다.
                    </div>
                    <div>• <span className="em">onKeyDown</span> 이벤트 핸들러를 사용하여 enter키를 누를 시에도 리뷰가 입력되게 하여 사용자 편의를 더하였습니다.</div>
                    <div>• 영화의 평점에 따라 별 개수를 반환하는 함수를 만들어, 시각적으로 사용자가 평점을 확인하기 쉽게 하였습니다.</div>
                    <div>• 사용자 리뷰를 <span className="em">로컬 스토리지</span> 에 저장하여 페이지가 새로고침 되어도 남아있게 하였습니다.</div>
                </div>
            </section>
            <section>
                <h3 className="ex_title">🚨문제점</h3>
                <div className="explain">
                    <div>• 등록 된 리뷰가 길어 질 경우, 리뷰에 길이에 따라 스크롤 길이가 정해지는 문제점이 발생</div>
                </div>
            </section>
            <section>
                <h3 className="ex_title">🎯해결 방법</h3>
                <div className="explain">
                    <div>• 리뷰가 작성되는 섹션에 <span className="em">max-height</span> 값을 넣고 <span className="em">overflow-y: scroll</span> 을 주어서 리뷰가 길어 질 경우 그 영역에만 스크롤이 생기게 변경
                    </div>
                </div>
            </section>
            <section>
                <h3 className="ex_title">✨결과 및 알게된 점</h3>
                <div className="explain">
                    <div>• CSS 속성을 활용하여 스크롤 관련 문제를 해결하는 방법을 익혔습니다.
                    </div>
                    <div>• 사용자 경험 측면에서 스크롤 제어가 중요하다는 점을 배웠습니다.</div>
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
                            <div className="movie_html_percent_bar bar"></div>
                            <div className="movie_html_percent_txt">
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
                            <div className="css txt">CSS</div>
                        </div>
                        <div className="css_percent_wrap">
                            <div className="movie_css_percent_bar bar"></div>
                            <div className="movie_css_percent_txt">
                                <AnimatedCountUp
                                    start={0}
                                    end={12.4}
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
                            <div className="movie_js_percent_bar bar"></div>
                            <div className="movie_js_percent_bar">
                                <AnimatedCountUp
                                    start={0}
                                    end={86.8}
                                    duration={2.5}
                                    decimal={1}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="to_project">
                    <a href="https://jaeyeong97-movie-web.web.app/" target="_blank" rel="noreferrer">
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

export default Movie;