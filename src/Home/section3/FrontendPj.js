const FrontendPj = ({ handleChangePage }) => {

    return (
        <div className="frontend_pj pj">
            <div className="project" onClick={() => { handleChangePage('shop') }}>
                <div className="page_img">
                    <div className="shop_wrap">
                        <img className="shop" src="/assets/shop.webp" alt="SHOP 웹사이트 이미지" />
                    </div>
                    <span className="txt">SHOP</span>
                    <div className="explain-wrap">
                        <div className="explain">
                            쇼핑몰에 필요한 여러 기능들을 갖춘 SHOP 웹사이트입니다.
                        </div>
                        <div className="skills-wrap">
                            <div className="skill">react</div>
                            <div className="skill">typescript</div>
                            <div className="skill">recoil</div>
                            <div className="skill">react-router</div>
                            <div className="skill">scss</div>
                            <div className="skill">react-oauth/google</div>
                            <div className="skill">react-daum-postcode</div>
                            <div className="skill">react-intersection-observer</div>
                            <div className="skill">jwt-decode</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project" onClick={() => { handleChangePage('windows-xp') }}>
                <div className="page_img">
                    <img src="/assets/window.webp" alt="윈도우 xp 웹사이트 이미지" />
                    <span className="txt">윈도우 XP</span>
                    <div className="explain-wrap">
                        <div className="explain">
                            윈도우 XP를 재구현하여 로딩화면부터 로그인화면, 바탕화면에 여러 기능을 경험할 수 있는 웹사이트입니다.
                        </div>
                        <div className="skills-wrap">
                            <div className="skill">html</div>
                            <div className="skill">scss</div>
                            <div className="skill">javascript</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project" onClick={() => { handleChangePage('recipes') }}>
                <div className="page_img">
                    <img src="/assets/recipes.webp" alt="레시피 웹사이트 이미지" />
                    <span className="txt">레시피 파인더</span>
                    <div className="explain-wrap">
                        <div className="explain">
                            음성인식 기능을 통해 레시피 검색을 할 수 있고 카테고리에 따라 레시피를 볼 수 있는 웹사이트입니다.
                        </div>
                        <div className="skills-wrap">
                            <div className="skill">react</div>
                            <div className="skill">styled-components</div>
                            <div className="skill">axios</div>
                            <div className="skill">react-query</div>
                            <div className="skill">react-speech-recognition</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project" onClick={() => { handleChangePage('petdoc') }}>
                <div className="page_img">
                    <img src="/assets/petdoc.webp" alt="펫닥 웹사이트 이미지" />
                    <span className="txt">petdoc</span>
                    <div className="explain-wrap">
                        <div className="explain">팀프로젝트로 개발한 동물병원 예약 웹사이트입니다.</div>
                        <div className="skills-wrap">
                            <div className="skill">react</div>
                            <div className="skill">react-router</div>
                            <div className="skill">css</div>
                            <div className="skill">naver-map api</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project" onClick={() => { handleChangePage('movie') }}>
                <div className="page_img">
                    <img src="/assets/movie.webp" alt="영화 웹사이트 이미지" />
                    <span className="txt">Go n Play</span>
                    <div className="explain-wrap">
                        <div className="explain">
                            영화, 시리즈 정보를 확인할 수 있는 OTT 웹사이트입니다.
                        </div>
                        <div className="skills-wrap">
                            <div className="skill">react</div>
                            <div className="skill">recoil</div>
                            <div className="skill">react-router</div>
                            <div className="skill">scss</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project">

            </div>
        </div>
    );
};

export default FrontendPj;