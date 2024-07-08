import { useEffect } from "react";
import PjHeader from "../projectHeader/PjHeader";
import PjFooter from "../projectFooter/PjFooter";
import '../projectPages/ProjectCommon.css'
import { Link } from 'react-scroll';
import sr from "../../util/ScrollReveal";
import AnimatedCountUp from "../../util/AnimatedCountUp";

const Windows = () => {

    useEffect(() => {
        // 페이지 이동 후 스크롤을 최상단으로
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {

        //프로젝트 퍼센트 바 애니메이션
        sr.reveal(".windows_html_percent_bar", {
            duration: 1000,
            beforeReveal: (el) => {
                el.style.animation = "windows_html_percent 1s ease-out forwards";
            },
        });
        sr.reveal(".windows_css_percent_bar", {
            duration: 1000,
            beforeReveal: (el) => {
                el.style.animation = "windows_css_percent 1s ease-out forwards";
            },
        });
        sr.reveal(".windows_js_percent_bar", {
            duration: 1000,
            beforeReveal: (el) => {
                el.style.animation = "windows_js_percent 1s ease-out forwards";
            },
        });
    }, []);


    return (
        <div className="windows components_wrap" id="pj_top">
            <PjHeader />
            <main className="main">
                <div className="main_img">윈도우 메인 이미지</div>
                <div className="main_txt_wrap_center">
                    <div className="main_txt_wrap">
                        <div className="main_txt">
                            <h2 className="title">Windows XP</h2>
                            <span className="t1">윈도우 XP 웹사이트</span>
                            <span className="t2">사용 기술: HTML, SCSS, JavaScript</span>
                            <div className="t3">깃허브 주소:&nbsp;<a href="https://github.com/jaeyeong97/window-xp" target="_blank" rel="noreferrer">github.com/jaeyeong97/window-xp</a>
                                <span className="material-symbols-outlined open">
                                    open_in_new
                                </span>
                            </div>
                        </div>
                        <div className="eye">
                            <a href="https://window-xp.netlify.app/" target="_blank" rel="noreferrer">
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
                        <div>• 더이상 찾아보기 힘든 <span className="em">윈도우 XP</span> 를 다시 경험할 수 있게 구현한 웹사이트입니다.</div>
                        <div>• <span className="em">SCSS</span> 를 사용하여 스타일링 하였습니다.</div>
                    </div>
                </div>
            </section>
            <section className="section_function">
                <h3 className="ex_title">윈도우 구현 기능</h3>
                <div className="function_txt">
                    <div className="explain">
                        <div>• 로그인 성공 시 바탕화면으로 이동되도록 구현</div>
                        <div>• <span className="em">시작 메뉴</span> 클릭 시 내 컴퓨터, 메모장, 인터넷, 시스템 종료 등 항목에 접근 가능</div>
                        <div>• <span className="em">창</span>을 움직일 수 있고, 전체 화면 기능 구현</div>
                        <div>• <span className="em">메모장</span> 저장 기능 및 아이콘 추가 기능 구현</div>
                        <div>• 작업표시줄 <span className="em">현재 시간</span> 구현</div>
                        <div>• 창을 여러개 띄울경우 z-index를 조정하여 <span className="em">선택한 창</span> 이 최상단에 보이도록 구현</div>
                        <div>• <span className="em">컴퓨터 종료</span> 모달창을 제작하여 웹페이지를 닫을 수 있도록 구현</div>
                    </div>
                </div>
            </section>
            <section className="section_rsp">
                <h3 className="ex_title">가위바위보 게임 구현 기능</h3>
                <div className="rsp_txt">
                    <div className="explain">
                        <div>• <span className="em">가위바위보</span> 시뮬레이션 게임 구현</div>
                    </div>
                </div>
            </section>
            <section className="section_quiz">
                <h3 className="ex_title">퀴즈 게임 구현 기능</h3>
                <div className="quiz_txt">
                    <div className="explain">
                        <div>• 퀴즈 게임 <span className="em">로그인/회원가입</span> 기능 구현 </div>
                        <div>• 회원가입 데이터를 <span className="em">로컬스토리지</span> 에 저장하여 페이지를 껐다켜도 로그인 할 수 있도록 구현</div>
                        <div>• <span className="em">회원가입</span> 시 중복 아이디 체크 및 최소, 최대 입력 글자수 구현</div>
                        <div>• 퀴즈 게임 <span className="em">타이머</span> , <span className="em">결과창</span> , <span className="em">맞힌 개수</span> 등 퀴즈 게임에 필요한 다양한 로직 구현</div>
                    </div>
                </div>
            </section>
            <section className="section_bar">
                <h3 className="ex_title">언어 사용 비율</h3>
                <div className="language_wrap">
                    <div className="language">
                        <div className="txt_wrap ml">
                            <div className="html_icon"></div>
                            <div className="html txt">HTML</div>
                        </div>
                        <div className="html_percent_wrap">
                            <div className="windows_html_percent_bar bar"></div>
                            <div className="windows_html_percent_txt">
                                <AnimatedCountUp
                                    start={0}
                                    end={32.6}
                                    duration={2.5}
                                    decimal={1}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="language">
                        <div className="txt_wrap ml2">
                            <div className="scss_icon"></div>
                            <div className="css txt">SCSS</div>
                        </div>
                        <div className="css_percent_wrap">
                            <div className="windows_css_percent_bar bar"></div>
                            <div className="windows_css_percent_txt">
                                <AnimatedCountUp
                                    start={0}
                                    end={45}
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
                            <div className="windows_js_percent_bar bar"></div>
                            <div className="windows_js_percent_bar">
                                <AnimatedCountUp
                                    start={0}
                                    end={22.4}
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
    );
};

export default Windows;