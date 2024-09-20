const FrontendPj = ({ handleChangePage }) => {
    return (
        <div className="frontend_pj pj">
            <div className="project" onClick={() => { handleChangePage('windows-xp') }}>
                <div className="page_img">
                    <img src="/assets/window.jpg" alt="윈도우 xp 웹사이트 이미지" />
                    <span className="txt">윈도우 XP</span>
                    <div className="explain">윈도우 XP를 재구현한 웹사이트입니다.</div>
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