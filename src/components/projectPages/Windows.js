import { useEffect, useState } from "react";
import PjHeader from "../projectHeader/PjHeader";
import PjFooter from "../projectFooter/PjFooter";
import '../projectPages/ProjectCommon.css'
import { Link } from 'react-scroll';
import sr from "../../util/ScrollReveal";
import AnimatedCountUp from "../../util/AnimatedCountUp";

const Windows = () => {
    const [toggle1, setToggle1] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    const [toggle3, setToggle3] = useState(false);
    const [toggle4, setToggle4] = useState(false);
    const [toggle5, setToggle5] = useState(false);
    const [toggle6, setToggle6] = useState(false);

    const handleToggle = (toggleSet) => {
        toggleSet((prev) => !prev);
    };

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
            <section id="section_start">
                <h3 className="ex_title">🏅프로젝트 개요</h3>
                <div className="explain">
                    <div>• 더이상 찾아보기 힘든 <span className="em">윈도우 XP</span> 를 다시 경험할 수 있게 구현한 웹사이트입니다.</div>
                    <div>• <span className="em">SCSS</span> 를 사용하여 스타일링 하였습니다.</div>
                </div>
            </section>
            <section>
                <h3 className="ex_title">💻구현 기능</h3>
                <div className="explain">
                    <div className="span_wrap" onClick={() => handleToggle(setToggle1)}>
                        <span className={`material-symbols-outlined arrow ${toggle1 ? 'rotate' : ''}`}>
                            arrow_right
                        </span>
                        <span>윈도우</span>
                    </div>
                    <div className={`img_wrap ${toggle1 ? 'show' : 'hide'}`}>
                        <div className="ani_wrap">
                            <div className="mb">
                                <img className="window_img" src="../assets/full-screen.gif" alt="full-screen" />
                                <span>- mousedown, mousemove, mouseup 이벤트 핸들러를 사용해 창을 이동시킬 수 있게 하였습니다.</span>
                                <span>- 창의 전체 화면 기능을 구현하였습니다.</span>
                            </div>
                            <div className="mb">
                                <img className="window_img" src="../assets/memo-logic.gif" alt="full-screen" />
                                <span>- DOM 조작 메서드 createElement, textContent, appendChild 등을 사용해 메모장 저장 기능을 구현하였습니다.</span>
                                <span>- 메모장 저장시 바탕화면에 새로운 아이콘이 생성되게 하였습니다.</span>
                            </div>
                            <div className="mb">
                                <img className="window_img" src="../assets/z-index.gif" alt="full-screen" />
                                <span>- 창을 여러개 띄울경우 각 창의 z-index를 조정하여 선택한 창이 최상단에 보이도록 구현하였습니다.</span>
                            </div>
                            <span>- 시작 메뉴 클릭 시 내 컴퓨터, 메모장, 인터넷, 시스템 종료 등 항목에 접근 가능</span>
                            <span>- 작업표시줄 현재 시간 구현</span>
                            <span>- 컴퓨터 종료 모달창을 제작하여 웹페이지를 닫을 수 있도록 구현</span>
                        </div>
                    </div>
                </div>
                <div className="explain">
                    <div className="span_wrap" onClick={() => handleToggle(setToggle2)}>
                        <span className={`material-symbols-outlined arrow ${toggle2 ? 'rotate' : ''}`}>
                            arrow_right
                        </span>
                        <span>가위바위보 게임</span>
                    </div>
                    <div className={`img_wrap ${toggle2 ? 'show' : 'hide'}`}>
                        <div className="ani_wrap">
                            <div className="mb">
                                <img className="window_img" src="../assets/rsp-game-logic.gif" alt="full-screen" />
                                <span>- 가위, 바위, 보중에 하나를 선택하여 끝까지 생존해야 승리하는 게임입니다.</span>
                                <span>- 가위바위보 이미지의 위치가 겹칠시 승패를 판단해 이미지가 변경되게 하였습니다.</span>
                            </div>
                            <img className="window_img" src="../assets/rsp-game-result-logic.png" alt="full-screen" />
                            <span>- 내가 선택한 팀의 승패 유무를 확인 할 수 있습니다.</span>
                        </div>
                    </div>
                </div>
                <div className="explain">
                    <div className="span_wrap" onClick={() => handleToggle(setToggle3)}>
                        <span className={`material-symbols-outlined arrow ${toggle3 ? 'rotate' : ''}`}>
                            arrow_right
                        </span>
                        <span>퀴즈 게임</span>
                    </div>
                    <div className={`img_wrap ${toggle3 ? 'show' : 'hide'}`}>
                        <div className="ani_wrap">
                            <div className="mb">
                                <img className="window_img" src="../assets/quiz-login-logic1.gif" alt="full-screen" />
                                <span>- 로그인/회원가입 기능을 구현하였습니다.</span>
                                <span>- 회원가입시 중복 아이디 체크 및 최소, 최대 입력 글자수 구현</span>
                                <span>- 회원가입 데이터를 로컬스토리지에 저장하여 페이지를 껐다켜도 로그인 정보가 저장되도록 구현하였습니다.</span>
                            </div>
                            <div className="mb">
                                <img className="window_img" src="../assets/quiz-answer-logic.gif" alt="full-screen" />
                                <span>- 퀴즈 게임 타이머, 결과창, 맞힌 개수 등 퀴즈 게임에 필요한 다양한 기능을 구현하였습니다.</span>
                            </div>
                            <img className="window_img" src="../assets/quiz-result-logic.png" alt="full-screen" />
                            <span>- 게임 결과를 확인할 수 있습니다.</span>
                        </div>
                    </div>
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
                        <div className="txt_wrap">
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
                <div className="to_project">
                    <a href="https://window-xp.netlify.app/" target="_blank" rel="noreferrer">
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

export default Windows;