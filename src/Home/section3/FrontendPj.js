import { useEffect } from "react";
import sr from "../../util/ScrollReveal";

const FrontendPj = ({ handleChangePage }) => {

    useEffect(() => {
        sr.reveal(".pj", {
            origin: "bottom",
            distance: "30px",
            duration: 800,
            opacity: 0,
            easing: "ease-in-out",
            reset: false,
        });
    }, []);

    return (
        <div className="frontend_pj pj">
            <div className="project" onClick={() => { handleChangePage('shop') }}>
                <div className="page_img">
                    <div className="shop_wrap">
                        <img className="shop" src="/assets/shop.png" alt="SHOP 웹사이트 이미지" />
                    </div>
                    <span className="txt">SHOP</span>
                    <div className="explain">필요한 기능들을 갖춘 쇼핑몰 웹사이트입니다.</div>
                </div>
            </div>
            <div className="project" onClick={() => { handleChangePage('recipes') }}>
                <div className="page_img">
                    <img src="/assets/recipes.jpg" alt="레시피 웹사이트 이미지" />
                    <span className="txt">레시피 파인더</span>
                    <div className="explain">음성인식 기능이 있는 레시피 웹사이트입니다.</div>
                </div>
            </div>
            <div className="project" onClick={() => { handleChangePage('movie') }}>
                <div className="page_img">
                    <img src="/assets/movie.jpg" alt="영화 웹사이트 이미지" />
                    <span className="txt">Go n Play</span>
                    <div className="explain">영화, 시리즈 정보를 확인할 수 있는 OTT 웹사이트입니다.
                    </div>
                </div>
            </div>
            <div className="project" onClick={() => { handleChangePage('petdoc') }}>
                <div className="page_img">
                    <img src="/assets/petdoc.jpg" alt="펫닥 웹사이트 이미지" />
                    <span className="txt">petdoc</span>
                    <div className="explain">동물병원 예약 웹사이트입니다.</div>
                </div>
            </div>
        </div>
    );
};

export default FrontendPj;