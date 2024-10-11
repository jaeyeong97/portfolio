import { useEffect, useRef, useState } from "react";
import sr from "../../util/ScrollReveal";
import Typed from "typed.js";

const Main = () => {
    const typing = useRef(null);
    const [showHand, setShowHand] = useState(false);

    useEffect(() => {
        sr.reveal(".t1", {
            origin: "bottom",
            distance: "50px",
            duration: 800,
            opacity: 0,
            easing: "ease-in-out",
            reset: false,
        });
        sr.reveal(".t2", {
            origin: "bottom",
            distance: "50px",
            duration: 800,
            opacity: 0,
            easing: "ease-in-out",
            reset: false,
            delay: 1000,
        });
        sr.reveal(".t3", {
            origin: "bottom",
            distance: "50px",
            duration: 800,
            opacity: 0,
            easing: "ease-in-out",
            reset: false,
            delay: 1500,
        });
    }, []);

    // 메인 타이핑 모션
    useEffect(() => {
        new Typed(typing.current, {
            strings: ["안녕하세요!",],
            typeSpeed: 120,
            backSpeed: 30,
            backDelay: 1000,
            loop: false,
        });
        const timer = setTimeout(() => {
            setShowHand(true);
        }, 1200);

        return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
    }, []);

    return (
        <main id="main">
            <div className="main_wrap" id="nav_home">
                <div className="profile">
                    <img src="/assets/profile.png" alt="profile" />
                </div>
                <div className="main_txt_wrap">
                    <div className="main_txt">
                        <div className="t1">
                            <span ref={typing}></span>
                            <span className="hand" style={{ opacity: showHand ? '1' : '0', transition: 'opacity 0.5s' }}
                            >👋</span>
                        </div>
                        <div className="t2">
                            <span>협력하며 함께 성장하고 싶은 <span className="accent">장재영</span>입니다.</span>
                        </div>
                        <div className="t3">
                            <span>매일 매일 꾸준히 코드를 작성하면서 성장하고 있습니다.</span>
                            <span>제가 가진 지식과 역량을 바탕으로 다양한 프로젝트를 만들어 보았습니다.</span>
                            <span>관심있게 봐주시면 감사하겠습니다!</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;