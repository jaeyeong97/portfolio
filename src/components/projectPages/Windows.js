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
                    <div>• <span className="em">윈도우 XP</span> 를 재구현한 웹사이트</div>
                    <div>• <span className="em">SCSS</span> 사용</div>
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
                                <div className="s_text">- <span className="cem">mousedown</span>, <span className="cem">mousemove</span>, <span className="cem">mouseup</span> 이벤트 핸들러를 활용해 창을 이동시킬 수 있게 구현</div>
                                <div className="s_text">- 창 전체 화면 기능 구현</div>
                            </div>
                            <div className="mb">
                                <img className="window_img" src="../assets/memo-logic.gif" alt="full-screen" />
                                <div className="s_text">- DOM 조작 메서드 <span className="cem">createElement</span>, <span className="cem">textContent</span>, <span className="cem">appendChild</span>를 활용해 메모장 저장 기능 구현</div>
                                <div className="s_text">- 메모장 저장시 새로운 아이콘 생성</div>
                            </div>
                            <div className="mb">
                                <img className="window_img" src="../assets/z-index.gif" alt="full-screen" />
                                <div className="s_text">- 창의 <span className="cem">z-index</span>를 조정하여 클릭한 창이 최상단에 보이도록 구현</div>
                            </div>
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
                                <div className="s_text">- 가위, 바위, 보중에 하나를 선택하여 마지막에 남는 팀이 이기는 게임</div>
                                <div className="s_text">- 이미지 위치는 100ms 마다 랜덤값으로 변경</div>
                                <div className="s_text">- 가위바위보 이미지 offset 값을 활용해 겹칠시 이미지 변경</div>
                            </div>
                            <img className="window_img" src="../assets/rsp-game-result-logic.png" alt="full-screen" />
                            <div className="s_text">- 게임 결과 확인창</div>
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
                                <div className="s_text">- 로그인/회원가입 기능 구현</div>
                                <div className="s_text">- 회원가입시 중복 아이디 체크 및 최소, 최대 입력 글자수 구현</div>
                                <div className="s_text">- 회원가입 데이터를 로컬 스토리지에 저장</div>
                            </div>
                            <div className="mb">
                                <img className="window_img" src="../assets/quiz-answer-logic.gif" alt="full-screen" />
                                <div className="s_text">- 퀴즈 게임 타이머, 결과창, 맞힌 개수 등 퀴즈 게임에 필요한 기능 구현</div>
                            </div>
                            <img className="window_img" src="../assets/quiz-result-logic.png" alt="full-screen" />
                            <div className="s_text">- 게임 결과 확인창</div>
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