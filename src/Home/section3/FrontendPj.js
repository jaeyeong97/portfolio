const FrontendPj = ({ handleChangePage }) => {
    return (
        <div className="frontend_pj pj">
            <div className="project" onClick={() => { handleChangePage('windows-xp') }}>
                <div className="page_img">
                    <img src="/assets/window.jpg" alt="윈도우 xp 웹사이트 이미지" />
                    <span className="txt">윈도우 XP</span>
                    <div className="explain">윈도우 XP를 다시 사용할 수 있게 웹사이트로 구현하였습니다.</div>
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
                    <span className="txt">go n play</span>
                    <div className="explain">영화, 시리즈 정보를 확인할 수 있는 OTT 웹사이트입니다.
                    </div>
                </div>
            </div>
            <div className="project" onClick={() => { handleChangePage('petdoc') }}>
                <div className="page_img">
                    <img src="/assets/petdoc.jpg" alt="펫닥 웹사이트 이미지" />
                    <span className="txt">petdoc</span>
                    <div className="explain">사용자가 입력한 반려동물 정보를 기반으로 동물병원에 예약할 수 있는 웹사이트입니다.</div>
                </div>
            </div>
        </div>
    );
};

export default FrontendPj;