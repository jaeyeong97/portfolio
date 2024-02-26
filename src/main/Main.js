import React from "react";
import Typed from "typed.js";
import '../main/Main.css';



const Main = () => {
    const typing = React.useRef(null);

    // 메인 타이핑 모션
    React.useEffect(() => {
        const typed = new Typed(typing.current, {
            strings: ["성장하는 것을 좋아합니다.", "효율성을 중요시 생각합니다.",],
            typeSpeed: 80,
            backSpeed: 30,
            backDelay: 1000,
            loop: true,
        });
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <main id="main">
            <div id="nav_home" />
            <div className="main_wrap">
                <div className="main_img"></div>
                <div className="main_txt">
                    <div className="t1">
                        <span>안녕하세요</span>
                        <span className="hand">👋</span>
                    </div>
                    <span className="accent t2">신입 프론트엔드 개발자</span>
                    <div className="t3">
                        <span className="accent">장재영</span>
                        <span>입니다.</span>
                    </div>
                    <div className="t4">
                        <span>저는</span>
                        <span className="typing" ref={typing} />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;