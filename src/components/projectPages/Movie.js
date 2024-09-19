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
                            <span className="t1">go n play OTT 웹사이트</span>
                            <span className="t2">사용 기술: JSX, SCSS, JavaScript, React</span>
                            <div className="t3">깃허브 주소:&nbsp;<a href="https://github.com/jaeyeong97/go-n-play" target="_blank" rel="noreferrer">github.com/jaeyeong97/go-n-play</a>
                                <span className="material-symbols-outlined open">
                                    open_in_new
                                </span>
                            </div>
                        </div>
                        <div className="eye">
                            <a href="https://go-n-play.web.app/" target="_blank" rel="noreferrer">
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
                    <div>• <span className="em">React</span> 개인 프로젝트</div>
                    <div>• 영화, 시리즈 정보를 확인 할 수 있는 OTT 웹사이트입니다.</div>
                    <div>• <span className="em">Recoil</span> 을 통해 영화 데이터 상태관리를 하였습니다.</div>
                    <div>• <span className="em">SCSS</span> 를 이용해 스타일링 하였습니다.</div>

                </div>
            </section>
            <section>
                <h3 className="ex_title">💻구현기능</h3>
                <div className="explain">
                    <div>• <span className="em">Routes</span> 와 <span className="em">Route</span> 를 이용해 각 경로에 맞는 컴포넌트가 렌더링되게 하였습니다. 공통적으로 Header 컴포넌트를 적용해, 모든 페이지에서 일관된 <span className="em">UI</span> 가 되도록 하였습니다.
                    </div>
                    <div>• <span className="em">Recoil</span> 상태관리를 하였고 <span className="em">atom</span> 을 통해 영화 데이터를 저장했습니다. 데이터가 필요한 컴포넌트에서 <span className="em">useRecoilValue</span> 로 가져와서 활용하였습니다.</div>
                    <div>• 사용자 리뷰를 <span className="em">로컬 스토리지</span> 에 저장하여 페이지가 새로고침 되어도 리뷰가 유지되게 하였습니다.</div>
                    <div>• 메인 슬라이더 영상이 재생될 시 <span className="em">음소거</span> 버튼을 통해, 사용자가 소리를 켜고 끌 수 있도록 하였습니다.</div>
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
                                    end={1.2}
                                    duration={2.5}
                                    decimal={1}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="language">
                        <div className="txt_wrap">
                            <div className="scss_icon"></div>
                            <div className="scss txt">SCSS</div>
                        </div>
                        <div className="css_percent_wrap">
                            <div className="movie_css_percent_bar bar"></div>
                            <div className="movie_css_percent_txt">
                                <AnimatedCountUp
                                    start={0}
                                    end={19.9}
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
                                    end={77.7}
                                    duration={2.5}
                                    decimal={1}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="to_project">
                    <a href="https://go-n-play.web.app/" target="_blank" rel="noreferrer">
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